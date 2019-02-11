import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './teams-page/teams-page.component';

const route: Routes = [
  { path: '', loadChildren: '../app/home-page/home-page.module#HomePageModule' },
  { path: 'teams', component: TeamsPageComponent },
  // { path: 'view-results', loadChildren: '../app/view-results/view-results.module#ViewResultsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRouting { }
