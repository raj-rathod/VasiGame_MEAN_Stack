import { Component, OnInit } from '@angular/core';

declare var  heightWidthIndicate : any;

@Component({
  selector: 'app-popular-game-section',
  templateUrl: './popular-game-section.component.html',
  styleUrls: ['./popular-game-section.component.css']
})
export class PopularGameSectionComponent implements OnInit {
 public flag : boolean;
  constructor() { }

  ngOnInit(): void {
    this.flag = heightWidthIndicate();
  }

}
