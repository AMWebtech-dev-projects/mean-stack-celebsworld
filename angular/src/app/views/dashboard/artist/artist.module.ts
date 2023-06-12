import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutModule } from '../../../layouts/dashboard-layout/dashboard-layout.module';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistOverviewComponent } from './artist-overview/artist-overview.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap';
import { SharedUiModule } from '../../../shared-ui/';
import { AddEditArtistComponent } from './add-edit-artist/add-edit-artist.component';
@NgModule({
  declarations: [AddEditArtistComponent, ArtistOverviewComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    DashboardLayoutModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    AngularEditorModule,
    NgxSliderModule,
    SharedUiModule,
    DataTablesModule,
    ModalModule
  ]
})
export class ArtistModule {}
