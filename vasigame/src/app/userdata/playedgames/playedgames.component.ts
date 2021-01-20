import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-playedgames',
  templateUrl: './playedgames.component.html',
  styleUrls: ['./playedgames.component.css']
})
export class PlayedgamesComponent implements OnInit {

  constructor(public dilog : MatDialog, public dialogRef: MatDialogRef<PlayedgamesComponent>,) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  
  }

}
