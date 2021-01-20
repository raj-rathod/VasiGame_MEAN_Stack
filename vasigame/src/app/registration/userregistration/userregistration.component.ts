import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  public userInfo = {
    "name" : "",
    "username" : "",
    "email" : "",
    "password" : ""
    
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public loginShowBtn : boolean =true;
  public hide : boolean = true;

  constructor(public dialogRef : MatDialogRef<UserregistrationComponent> ) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    this.dialogRef.close();
  }

  userLoginBtn(){
     this.loginShowBtn = true;
  }
  userSingupBtn(){
    this.loginShowBtn = false;
    
  }
  

}
