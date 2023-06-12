import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistOverviewComponent } from './artist-overview/artist-overview.component';
import { AddEditArtistComponent } from './add-edit-artist/add-edit-artist.component';

const routes: Routes = [
  {
    path: 'add-artist',
    component: AddEditArtistComponent,
    data: { this: 'Add Artist' },
    pathMatch: 'full',
  },
  {
    path: 'edit-artist/:id',
    component: AddEditArtistComponent,
    data: { this: 'Add Artist' },
    pathMatch: 'full',
  },
  {
    path: 'manage-artist',
    component: ArtistOverviewComponent,
    data: { this: 'Artist List' },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistRoutingModule {}
