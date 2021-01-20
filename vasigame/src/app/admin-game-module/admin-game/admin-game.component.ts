import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.css']
})
export class AdminGameComponent implements OnInit {

  constructor() { }
  public gamesData :any = [
    {"title" :"letters","category":"Educational","description":"It is educational Game","posterUrl":"../../assest/;image","apiUrl":"/letters"},
    {"title" :"Robo Runner","category":"Adventure","description":"It is Adventure Game","posterUrl":"../../assest/;image","apiUrl":"/roborunner"},
    {"title" :"Buzzoni","category":"Casual","description":"It is Casual Game","posterUrl":"../../assest/;image","apiUrl":"/buzzoni"}
  ]
public gameData : any = this.gamesData[0];

  ngOnInit(): void {
  }
  gameDataClick(event : any){
    this.gameData = event;
  }
}
