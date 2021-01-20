import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProfileEditComponent } from '../userdata/profile-edit/profile-edit.component';
import { LeaderboardComponent } from '../userdata/leaderboard/leaderboard.component';
import { PlayedgamesComponent } from '../userdata/playedgames/playedgames.component';



declare var heightWidthIndicate : any;
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(public dilog : MatDialog) { }
  showFiller = false;
  flag1 = false;
  ngOnInit(): void {
    this.flag1 = heightWidthIndicate();
  }
  
  openDilog(){
    const dialogRef = this.dilog.open(ProfileEditComponent, {
      width: '450px'
      
    });
    dialogRef.afterClosed().subscribe(result =>{
      
    });

  }

  sidenavClose(event :any){
    event.close();
  }

homePage(event:any){
  event.close();
}

playedGame(event:any){
  const dialogRef = this.dilog.open(PlayedgamesComponent, {
    width: '1200px'
    
  });
  dialogRef.afterClosed().subscribe(result =>{
    
  });
  event.close();
}

leaderBoard(event :any){
  const dialogRef = this.dilog.open( LeaderboardComponent, {
    width: '700px'
    
  });
  dialogRef.afterClosed().subscribe(result =>{
    
  });
  event.close();
}

scoreBoard(event :any){
  event.close();
}

progressBoard(event :any){
  event.close();
}

}
