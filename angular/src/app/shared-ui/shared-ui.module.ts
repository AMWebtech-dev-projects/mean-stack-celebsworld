import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedUiRoutingModule } from './shared-ui-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { AlertComponent } from './alert';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { CharacterOnlyDirective } from './directives/onlycharacter.directive';
import { NumberOnlyDirective } from './directives/onlynumber.directive';
import { GrdFilterPipe } from './filters-pipes/grd-filter.pipe';
import { RemoveWhiteSpacesPipe } from './filters-pipes/remove-white-spaces.pipe';
import { DisabledDirective } from './directives/disabled.directive';

const SHARED_COMPONENTS = [
  LoadingComponent,
  AlertComponent,
  CharacterOnlyDirective,
  NumberOnlyDirective,
  GrdFilterPipe,
  DisabledDirective,
  RemoveWhiteSpacesPipe,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedUiRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-right',
    }),
    NgxSpinnerModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  entryComponents: [],
})
export class SharedUiModule {
  static forRoot(): ModuleWithProviders<SharedUiModule> {
    return {
      ngModule: SharedUiModule,
      providers: [],
    };
  }
}
