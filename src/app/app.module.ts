import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRouting } from './app-routing.module';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { TeamsService } from './teams-page/teams.service';
import { ScoreBoardComponent } from './score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsPageComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebase, 'imp-groups'),
    AngularFireDatabaseModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
