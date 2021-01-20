import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(public dilog : MatDialog, public dialogRef: MatDialogRef<LeaderboardComponent >,) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  
  }

}
