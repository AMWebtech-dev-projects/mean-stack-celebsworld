import {
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  GlobalService,
  CategoryService,
  ArtistService,
} from '../../../../shared-ui';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { ToastrService } from 'ngx-toastr';
import { ArtistDetails } from '../artist.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-add-edit-artist',
  templateUrl: './add-edit-artist.component.html',
  styleUrls: ['./add-edit-artist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddEditArtistComponent implements OnInit {
  @ViewChild('imgFileInput') imgFileInputVar: ElementRef;
  newArtist: ArtistDetails = new ArtistDetails();
  requiredValidation: any = {
    name: '',
    profession: '',
    language: '',
    artistBio: '',
    minTimeResponsce: '',
    maxTimeResponsce: '',
    artistPrice: '',
    // artistImage: '',
  };
  artistConfig: any = {
    categoryList: [],
    celebLang: [
      { _id: 1, name: 'Hindi' },
      { _id: 2, name: 'English' },
      { _id: 3, name: 'Punjabi' },
      { _id: 4, name: 'Marathi' },
      { _id: 5, name: 'Bengali' },
      { _id: 6, name: 'Telugu' },
      { _id: 7, name: 'Tamil' },
      { _id: 8, name: 'Gujarati' },
      { _id: 9, name: 'Urdu' },
      { _id: 10, name: 'Kannada' },
    ],
    ProfileImg: {
      imageInfo: [],
      imageUrl: '',
    },
  };
  MultiSelectSettings: any = {};
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    sanitize: false,
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName',
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
      ],
    ],
  };
  optionsPrice: Options = {
    floor: 100,
    autoHideLimitLabels: true,
    ceil: 50000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.High:
          return '<b>Max price:</b> Rs.' + value;
        default:
          return 'Rs.' + value;
      }
    },
  };
  @Input() maxValDays = 10;
  @Input() minValDays = 1;
  artistId = '';
  constructor(
    private globalService: GlobalService,
    private categoryService: CategoryService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private artistService: ArtistService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getCategoryList();
  }

  ngOnInit(): void {
    this.MultiSelectSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      enableCheckAll: false,
      allowSearchFilter: false,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      noDataAvailablePlaceholderText: 'No Language Found',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.route.params.subscribe((res) => {
      this.artistId = res.id;
    });
  }

  validateMinMax(event, valueType) {
    if (valueType === 'max') {
      if (this.newArtist.minTimeResponsce) {
        if (
          this.newArtist.maxTimeResponsce > this.newArtist.minTimeResponsce &&
          this.newArtist.maxTimeResponsce <= this.maxValDays
        ) {
        } else {
          setTimeout(() => {
            this.newArtist.maxTimeResponsce = this.newArtist.minTimeResponsce;
          });
        }
      } else {
        this.newArtist.maxTimeResponsce = this.maxValDays;
      }
    } else {
      if (this.newArtist.minTimeResponsce <= this.maxValDays) {
        this.newArtist.maxTimeResponsce = this.newArtist.minTimeResponsce;
      } else {
        this.newArtist.minTimeResponsce = this.minValDays;
      }
    }
  }

  getArtist() {
    this.spinner.show();
    this.artistService.getArtistList({ _id: this.artistId }).subscribe(
      (data) => {
        if (data.status === 200) {
          this.newArtist = data.data;
          this.spinner.hide();
        } else {
          this.spinner.hide();
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  getCategoryList() {
    this.spinner.show();
    this.categoryService.getCategoryList().subscribe(
      (data) => {
        if (data.status === 200) {
          this.artistConfig.categoryList = data.data;
          this.spinner.hide();
        } else {
          this.spinner.hide();
        }
        if (this.artistId) {
          this.getArtist();
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  selectProfileImg(event) {
    const reader = new FileReader();
    const fileData = event.target.files[0];
    if (!fileData.name.match(/\.(jpg|jpeg|png)$/)) {
      this.toastr.warning(
        'You can upload only jpg, jpeg, png, gif image.',
        'Warning'
      );
      this.imgFileInputVar.nativeElement.value = '';
      this.artistConfig.ProfileImg.imageUrl = '';
      return false;
    } else if (event.target.files && event.target.files[0]) {
      this.artistConfig.ProfileImg.imageInfo = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (readerEvent: any) => {
        this.artistConfig.ProfileImg.imageUrl = readerEvent.target.result;
      };
    }
  }

  deleteImg() {
    this.artistConfig.ProfileImg.imageUrl = '';
    this.artistConfig.ProfileImg.imageInfo = [];
    this.imgFileInputVar.nativeElement.value = '';
    const oldImage = JSON.parse(JSON.stringify(this.newArtist.artistImage));
    if (oldImage) {
      this.newArtist.artistOldImage = oldImage;
    }
    this.newArtist.artistImage = '';
  }

  uploadImg() {
    const self = this;
    const ObjectKeys = Object.keys(this.requiredValidation);

    const found = ObjectKeys.filter(function (obj) {
      return !self.newArtist[obj];
    });
    if (found.length) {
      this.toastr.error('* Please fill all mandatory fields.', 'Error');
      return false;
    } else if (
      (!this.newArtist._id && !this.artistConfig.ProfileImg.imageInfo.name) ||
      (this.newArtist._id &&
        !this.newArtist.artistImage &&
        !this.artistConfig.ProfileImg.imageInfo.name)
    ) {
      this.toastr.error('* Please select artist image.', 'Error');
      return false;
    }
    const postData = Object.assign({}, this.newArtist);
    postData.name = postData.name.trim();
    if (this.artistConfig.ProfileImg.imageInfo.name) {
      this.spinner.show();
      this.globalService
        .localUpload(
          this.artistConfig.ProfileImg.imageInfo,
          environment.uploadFolder.artist
        )
        .subscribe(
          (data: any) => {
            if (data.status === 200) {
              if (postData.artistImage) {
                postData.artistOldImage = postData.artistImage;
              }
              postData.artistImage = data.imgPath;
              this.saveArtist(postData);
            }
          },
          (error) => {
            this.spinner.hide();
            this.toastr.error(
              'There are some server error. Please check connection.',
              'Error'
            );
          }
        );
    } else {
      this.saveArtist(postData);
    }
  }
  saveArtist(postData: any) {
    this.artistService.saveArtist(postData).subscribe(
      (data) => {
        this.spinner.hide();
        if (data.status === 200) {
          const submitText = this.artistId ? 'Updated' : 'Created';
          this.toastr.success(
            'Artist Profile ' + submitText + ' Successfully.',
            'Success'
          );
          this.router.navigate(['artists/manage-artist']);
        }
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error(
          'There are some server error. Please check connection.',
          'Error'
        );
      }
    );
  }
}
