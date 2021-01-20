import { Component, OnInit } from '@angular/core';
declare var myFunc:any;

declare var heightWidthIndicate : any;
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }
  public tigger : boolean = false;
  public flag : boolean;
  ngOnInit(): void {
    myFunc();
    
    this.flag = heightWidthIndicate();
  }

}
