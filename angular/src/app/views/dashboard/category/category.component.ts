import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { Category } from './category.model';
import { CategoryService, GlobalService } from '../../../shared-ui/';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { ElementRef } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, AfterViewInit {
  newCategory: Category = new Category();
  newCategoryAlready = false;

  @ViewChild('showAddEditCategoryModal', { static: false })
  public showAddEditCategoryModal: ModalDirective;

  @ViewChild('deleteCategoryModal', { static: false })
  public deleteCategoryModal: ModalDirective;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  categoryList = [];
  requiredValidation: any = {
    name: '',
  };
  @ViewChild('imgFileInput') imgFileInputVar: ElementRef;
  selectedImage: any = {
    imageInfo: [],
    imageUrl: '',
  };
  // ShowCategoryImg:boolean = true;

  constructor(
    private spinner: NgxSpinnerService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private globalService: GlobalService
  ) {
    this.GetCategoryList();
  }

  ngOnInit() {
    this.dtOptions = {
      responsive: true,
      columnDefs: [
        {
          targets: 0,
          orderable: true,
          searchable: false,
        },
        {
          targets: 1,
          orderable: false,
        },
        {
          targets: 2,
          orderable: false,
        },
      ],
      // pagingType: 'full_numbers'
    };
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  closeModel() {
    this.showAddEditCategoryModal.hide();
    this.deleteCategoryModal.hide();
    this.imgFileInputVar.nativeElement.value = '';
    this.selectedImage = {
      imageInfo: [],
      imageUrl: ''
    };
  }

  uploadImg(event) {
    const reader = new FileReader();
    const fileData = event.target.files[0];
    if (!fileData.name.match(/\.(jpg|jpeg|png)$/)) {
      this.toastr.warning(
        'You can upload only jpg, jpeg, png, gif image.',
        'Warning'
      );
      this.imgFileInputVar.nativeElement.value = '';
      this.newCategoryAlready = false;
      return false;
    } else {
      // this.ShowCategoryImg = false;
      this.selectedImage.imageInfo = event.target.files[0] ;
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (readerEvent: any) => {
        this.selectedImage.imageUrl = readerEvent.target.result;
      };
    }
  }


  saveImage() {
    // return;
    const self = this;
    const ObjectKeys = Object.keys(this.requiredValidation);

    const found = ObjectKeys.filter(function(obj) {
      return !self.newCategory[obj];
    });
    if (found.length) {
      this.toastr.error('* Please fill all mandatory fields.', 'Error');
      return false;
    } else if (!this.newCategory._id && !this.selectedImage.imageInfo.name) {
      this.toastr.error('* Please select image.', 'Error');
      return false;
    }
    const postData = Object.assign({}, this.newCategory);
    postData.name = postData.name.trim();
    if (this.selectedImage.imageInfo.name) {
      this.spinner.show();
      this.globalService.localUpload(this.selectedImage.imageInfo, environment.uploadFolder.category).subscribe(
        (data: any) => {
          if (data.status === 200) {
            postData.oldImage = postData.image;
            postData.image = data.imgPath;
            this.saveCategory(postData);
            // this.spinner.hide();
          }
        },
        (error) => {
          this.closeModel();
            this.spinner.hide();
            this.toastr.error(
              'There are some server error. Please check connection.',
              'Error'
            );

        }
      );
    } else {
      this.saveCategory(postData);
    }

  }

  saveCategory(postData: any) {
    this.categoryService.saveCategory(postData).subscribe(
      (data) => {
        this.spinner.hide();
        if (data.status === 200) {
          const CreateCategory = this.newCategory._id ? ' Updated ' : ' Created ';
          this.toastr.success(
            'Category' + CreateCategory + 'Successfully',
            'Success'
          );
          this.GetCategoryList();
          this.closeModel();
          // this.imgFileInputVar.nativeElement.value = '';
        } else {
          // this.toastr.error("This name already exist.", "Error");
        }
      },
      (error) => {
        this.closeModel();
        this.spinner.hide();
        this.toastr.error(
          'There are some server error. Please check connection.',
          'Error'
        );
      }
    );
  }

  checkAlreadyExitCategory(newCategory) {
    if (newCategory) {
      const found = this.categoryList.filter(function(obj) {
        return (
          (newCategory._id &&
            obj._id !== newCategory._id &&
            obj.name === newCategory._name.trim()) ||
          (!newCategory._id && obj.name === newCategory.name.trim())
        );
      });
      if (found.length) {
        this.newCategoryAlready = false;
        this.toastr.error('This name already exist.', 'Error');
      } else {
        this.newCategoryAlready = true;
      }
    } else {
      this.newCategoryAlready = true;
    }
  }

  GetCategoryList() {
    this.spinner.show();
    this.categoryService.getCategoryList().subscribe((res) => {
      if (res.status === 200) {
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
          this.categoryList = res.data;
          this.spinner.hide();
        });
      }
    });
  }

  showAddEditModal(categoryInfo?: any) {
    this.newCategoryAlready = true;
    if (Category) {
      this.newCategory = Object.assign({}, categoryInfo);
      this.showAddEditCategoryModal.show();
    } else {
      this.newCategory = new Category();
      this.showAddEditCategoryModal.show();
    }
  }

  // tslint:disable-next-line: no-shadowed-variable
  showshowActionModal(category: any) {
    this.newCategory = category;
    this.deleteCategoryModal.show();
  }

  deleteCategory() {
    this.spinner.show();
    this.categoryService.deleteCategory(this.newCategory).subscribe(
      (data) => {
        this.spinner.hide();
        this.closeModel();
        this.GetCategoryList();
        this.toastr.success('Category deleted successfully.', 'Success');
      },
      (error) => {
        this.spinner.hide();
        this.deleteCategoryModal.hide();
        this.toastr.error(
          'There are some server error. Please check connection.',
          'Error'
        );
      }
    );
  }
}
