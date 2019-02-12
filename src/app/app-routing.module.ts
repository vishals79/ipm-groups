import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

const route: Routes = [
  { path: '', loadChildren: '../app/home-page/home-page.module#HomePageModule' },
  { path: 'teams', component: TeamsPageComponent },
  { path: 'score-board', component: ScoreBoardComponent },
  // { path: 'view-results', loadChildren: '../app/view-results/view-results.module#ViewResultsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRouting { }
