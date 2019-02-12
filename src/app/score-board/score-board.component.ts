import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams-page/teams.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

  matches: Array<any> = [];
  points: Array<any> = [];

  constructor(private service: TeamsService) { }

  ngOnInit() {

    this.service.getmatches().on('value', (ref) => {
      const pointsMap = {};
      const vals = ref.val();
      for (let id in vals) {
        const val = vals[id];
        val._id = id;
        this.matches.push(val);
        pointsMap[val.team1.name] = pointsMap[val.team1.name] || { name: val.team1.name, points: 0 };
        pointsMap[val.team1.name].points += val.team1.points;

        pointsMap[val.team2.name] = pointsMap[val.team2.name] || { name: val.team2.name, points: 0 };
        pointsMap[val.team2.name].points += val.team2.points;
      }
      this.points = Object.values(pointsMap);
    });
  }

}
