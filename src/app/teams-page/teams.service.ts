import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

import { environment } from '../../environments/environment';

@Injectable()
export class TeamsService {
  db: firebase.database.Database;

  constructor() {
    firebase.initializeApp(environment.firebase);
    this.db = firebase.database();
  }

  getTeams() {
    return this.db.ref('/houses');
  }

  getmatches() {
    return this.db.ref('/matches');
  }

  addMatchDetails() {
    const id = this.db.ref('/matches').push().key;
    const obj = {};
    obj["/matches/" + id] = {
      game: 'Ludo',
      date: new Date(),
      team1: {
        name: 'STARK',
        points: 10
      }, team2: {
        name: 'TARGARYEN',
        points: 0
      }
    };
    this.db.ref().update(obj);
  }
}