import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomePageRoutingModule} from './home-page-routing.module';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
