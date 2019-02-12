import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {

  teams: Array<any>;

  constructor(private service: TeamsService) { }

  ngOnInit() {
    this.service.getTeams().on('value', (ref) => {
      this.teams = ref.val();
    });
  }

}
