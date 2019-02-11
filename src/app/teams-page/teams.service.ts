import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

import { environment } from '../../environments/environment';

@Injectable()
export class TeamsService {

  constructor() {
    firebase.initializeApp(environment.firebase);
  }

  getTeams() {
    return firebase.database().ref('/houses');
  }
}