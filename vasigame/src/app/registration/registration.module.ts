import { NgModule } from '@angular/core';
import {BrowserModule} from'@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



import {MaterialModule} from '../material/material.module';
import { UserregistrationComponent } from './userregistration/userregistration.component';

import { from } from 'rxjs';


@NgModule({
  declarations: [UserregistrationComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  exports:[UserregistrationComponent]
})
export class RegistrationModule { }
