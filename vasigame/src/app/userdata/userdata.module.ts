import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from'@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayedgamesComponent } from './playedgames/playedgames.component';



@NgModule({
  declarations: [ProfileEditComponent, LeaderboardComponent, PlayedgamesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports : [ProfileEditComponent, LeaderboardComponent, PlayedgamesComponent]
})
export class UserdataModule { }
