import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewResultsComponent} from './view-results.component';

const routes: Routes = [
  { path: '', redirectTo: 'results', pathMatch: 'full'},
  { path: 'results', component: ViewResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ViewResultsRoutingModule {}
