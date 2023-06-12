import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistListRoutingModule } from './artist-list-routing.module';
import { ArtistListComponent } from './artist-list.component';
import { SharedUiModule } from '../../../shared-ui/';

@NgModule({
  declarations: [ArtistListComponent],
  imports: [CommonModule, ArtistListRoutingModule, SharedUiModule],
})
export class ArtistListModule {}
