import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild('identity') identity: ElementRef;
  @ViewChild('token') token: ElementRef;
  @ViewChild('myNav') myNav: ElementRef;
  maxNoOfMember = 6;

  showInput = false;
  showWelcome = true;
  showAssignedGroup = false;
  showGroups = false;
  overlayClass: any;
  houseExists = false;

  public soldiers: any;
  public houses: any;
  showError = false;
  assignedHouseData: any;
  assignedHouseImageUrl: any;
  userIdentity: any;
  userName: any;
  userToken: any;
  constructor(private router: Router) {
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
    firebase.firestore().settings(environment.settings);
    const soldiersRef = firebase.database().ref('/soldiers');
    soldiersRef.on('value', function (snapshot) {
      console.log(snapshot.val());
      this.soldiers = snapshot.val();
    }, this);

    const housesRef = firebase.database().ref('/houses');
    housesRef.on('value', function (snapshot) {
      console.log(snapshot.val());
      this.houses = snapshot.val();
    }, this);
  }

  showInputOption() {
    this.showWelcome = false;
    this.showInput = true;
  }
  assignHouse() {
    if (!this.soldiers || this.soldiers.length === 0) {
      console.log('unable to proceed');
      return;
    } else if (!this.houses || this.houses.length === 0) {
      console.log('unable to proceed, house not present');
      return;
    }
    console.log('started...');
    this.userIdentity = this.identity.nativeElement.value.trim();
    this.userToken = this.token.nativeElement.value.trim();
    if (this.userIdentity === undefined || this.userIdentity.length === 0) {
      this.openNav();
      return;
    } else if (this.userToken === undefined || this.userToken.length === 0) {
      this.openNav();
      return;
    } else {
      const userData = this.soldiers.filter( s => s.id === this.userIdentity);
      if (userData.length === 0) {
        this.openNav();
        return;
      } else if (userData[0]['token'] !== this.userToken) {
        this.openNav();
        return;
      } else if (userData[0]['isHouseAssigned'][0]) {
        this.openNav(2);
        return;
      }
      this.userName = userData[0]['name'];
      console.log(this.userName);
    }
    this.showInput = false;
    const assignedHouse = this.getHouseNo(this.houses);
    console.log('assigned house' + assignedHouse);
    if (assignedHouse) {
      const houseReference = firebase.database().ref(`/houses/${assignedHouse['id']}/members`);
      let updates = assignedHouse['members'];
      updates.push(this.userIdentity);
      houseReference.update(updates).then(() => {
        console.log('updated data');
        let soldierId = 0;
        let count = 0;
        this.soldiers.forEach(s => {
          if (s['id'] === this.userIdentity) {
            soldierId = count;
          } else {
            count++;
          }
        });
         const soldierRef = firebase.database().ref(`/soldiers/${soldierId}/isHouseAssigned`);
         updates = [true];
         soldierRef.update(updates).then(() => {
           this.showAssignedGroup = true;
           this.assignedHouseData = assignedHouse;
           this.assignedHouseImageUrl = `../../assets/${this.assignedHouseData['name']}.jpg`;
         }).catch(error => {
           console.log('error occurred' + error);
         });
      }).catch((error) => {
          console.log('error occurred' + error);
        }
      );
    }
  }
  getHouseNo(data: any[]) {
    const visitedHouse = [];
    if (!data || data.length === 0) {
      return;
    }

    let houseCount = 0;

    let assignedHouse;
    let randomNo;
    randomNo = Math.floor(Math.random() * 4 + 1);
    while (data[randomNo - 1]['members'].length >= this.maxNoOfMember) {
      if (visitedHouse.indexOf(randomNo - 1) === -1) {
        visitedHouse.push(randomNo - 1);
        houseCount++;
      }
      if (houseCount === data.length) {
        break;
      }
      randomNo = Math.floor(Math.random() * 4 + 1);
    }
    if (data[randomNo - 1]['members'].length < this.maxNoOfMember) {
      assignedHouse = data[randomNo - 1];
      assignedHouse['id'] = randomNo - 1;
    }
    return assignedHouse;
  }

  openNav(errorType = 1) {
    errorType === 1 ? this.showError = true : this.houseExists = true;
    this.overlayClass = 'open-overlay overlay';
  }

  closeNav() {
    this.overlayClass = 'close-overlay overlay';
    this.showError = false;
    this.houseExists = false;
  }
  showResultsPage() {
    this.router.navigate(['/view-results']);
  }

}
