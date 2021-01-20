import { NgModule } from '@angular/core';
import {BrowserModule} from'@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



import {MaterialModule} from '../material/material.module';
import { AdminGameComponent } from './admin-game/admin-game.component';



@NgModule({
  declarations: [AdminGameComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule
  ],
  exports :[AdminGameComponent]
})
export class AdminGameModuleModule { }
