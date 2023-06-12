import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { GlobalService, ArtistService } from '../../../../shared-ui';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { ArtistDetails } from '../artist.model';

@Component({
  selector: 'app-artist-overview',
  templateUrl: './artist-overview.component.html',
  styleUrls: ['./artist-overview.component.scss'],
})
export class ArtistOverviewComponent implements OnInit, AfterViewInit {
  newArtist: ArtistDetails = new ArtistDetails();
  @ViewChild('deleteArtistModal', {static: false})
  public deleteArtistModal: ModalDirective;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  artistList = [];

  constructor(
    private globalService: GlobalService,
    private spinner: NgxSpinnerService,
    private artistService: ArtistService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.getArtistList();
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
  getArtistList() {
    this.spinner.show();
    this.artistService.getArtistList().subscribe((res) => {
      if (res.status === 200) {
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
          this.artistList = res.data;
          this.spinner.hide();
        });
      }
    });
  }
  editArtist(_id?: any) {
    this.router.navigate(['/artists/edit-artist/' + _id]);
  }

  closeModel() {
    this.deleteArtistModal.hide();
  }

  showActionModal(artist: any) {
    this.newArtist = artist;
    this.deleteArtistModal.show();
  }
  deleteArist() {
    this.spinner.show();
    this.artistService.deleteArtist(this.newArtist).subscribe(
      (data) => {
        this.spinner.hide();
        this.closeModel();
        this.getArtistList();
        this.toastr.success('Artist deleted successfully.', 'Success');
      },
      (error) => {
        this.spinner.hide();
        this.deleteArtistModal.hide();
        this.toastr.error(
          'There are some server error. Please check connection.',
          'Error'
        );
      }
    );
  }
}
