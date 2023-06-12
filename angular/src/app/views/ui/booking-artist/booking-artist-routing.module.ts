import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingArtistComponent } from './booking-artist.component';

const routes: Routes = [
  {path: '', component: BookingArtistComponent, data:{title:'Booking Artist'}, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingArtistRoutingModule { }
