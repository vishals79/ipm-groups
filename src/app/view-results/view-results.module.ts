import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewResultsRoutingModule} from './view-results-routing.module';
import {ViewResultsComponent} from './view-results.component';

@NgModule({
  imports: [
    CommonModule,
    ViewResultsRoutingModule
  ],
  declarations: [
    ViewResultsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewResultsModule {}
