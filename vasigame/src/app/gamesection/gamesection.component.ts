import { Component, OnInit } from '@angular/core';

declare var heightWidthIndicate : any;

@Component({
  selector: 'app-gamesection',
  templateUrl: './gamesection.component.html',
  styleUrls: ['./gamesection.component.css']
})
export class GamesectionComponent implements OnInit {

  constructor() { }
  public moreGamesFlag :boolean = false;
  public category : string = "All Games";
  flag1 = false;

  ngOnInit(): void {
    this.flag1 = heightWidthIndicate();
  }
 
moreGames(){
  this.moreGamesFlag = true;
}

sidenavClose(event :any){
  event.close();
}

adventure( event : any){
  event.close();
  this.category = "Adventure";
}

action(event : any){
  event.close();
  this.category = "Action";
}

educational(event : any){
  event.close();
  this.category = "Education";
}

board(event : any){
  event.close();
  this.category = "Board";
}

cards(event : any){
  event.close();
  this.category = "Cards";
}

casual(event : any){
  event.close();
  this.category = "Casual";
}

multiplayer(event : any){
  event.close();
  this.category = "MultiPlayer";
}

puzzles(event : any){
  event.close();
  this.category = "Puzzles";
}

sports(event : any){
  event.close();
  this.category = "Sports";
}

trivia(event : any){
  event.close();
  this.category = "Trivia";
}

}
