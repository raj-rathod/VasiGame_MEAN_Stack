import { Component, OnInit } from '@angular/core';
declare var heightWidthIndicate : any; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public flag :boolean ;
  public clientX : any;
  public clientY : any;
  public rotation: any;
  ngOnInit(): void {
    this.flag = heightWidthIndicate();
   
  }
  moverPositin(event){
  this.clientX = ((window.innerWidth / 2 - event.clientX) / 10).toString().concat("deg");
  this.clientY = ((window.innerHeight / 2 - event.clientY) / 4).toString().concat("deg");
   this.rotation ="rotateX(".concat(this.clientX,") ", "rotateY(", this.clientY,")");
  }

}
