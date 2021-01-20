import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserregistrationComponent } from '../registration/userregistration/userregistration.component';
declare var navBarHeight:any;
declare var heightWidthIndicate : any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public title ="VasiGames";
public flag : boolean;
constructor(public dilog : MatDialog){}

  public userProfileFlag : boolean = true;
  ngOnInit(): void {
    navBarHeight();
    this.flag = heightWidthIndicate();
    
  }

  openLog():void {
    const dialogRef = this.dilog.open(UserregistrationComponent, {
      width: '450px'
      
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('Dilog result'+ result);
    });
  }

}
