import { Component, OnInit } from '@angular/core';

declare var gamePlay : any;
declare var heightWidthIndicate : any;

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {

  constructor( ) { }

 
  public gamePlay : boolean = true;
  public flag :boolean ;
  public innerheight : number;
  public gameData :any;
  public marginTop : string ;

  public upComingGame = {
    "title" : "Title of the game",
    "description" : "Vasi games first game comming soon. keep wating and stay tuned.",
    "statusFlag" : false,
    "playUrl" : " ",
    "videoUrl" : "../../assets/video/s2.mp4"
  }

  public recentGame = [
    { "title" : "title1", "description" : "Vasi games first game comming soon. keep wating and stay tuned.", "posterUrl" : "" ,  "statusFlag" : true, "playUrl" : " ", "videoUrl" : "../../assets/video/song1.mp4"  } ,
    { "title" : "title2", "description" : "Vasi games second game comming soon. keep wating and stay tuned.", "posterUrl" : "" ,  "statusFlag" : true, "playUrl" : " ", "videoUrl" : ""  } ,
    { "title" : "title3", "description" : "Vasi games third game comming soon. keep wating and stay tuned.", "posterUrl" : "" ,  "statusFlag" : true, "playUrl" : " ", "videoUrl" : ""  } 
  ];
   
  ngOnInit(): void {
    this.flag =  heightWidthIndicate();
    this.innerheight = window.innerHeight - 250;
    this.marginTop  = this.innerheight.toString().concat("px");

  }


  recentGameInfo(event){
     this.gameData = event;
     this.gamePlay = false;
  }

  game(){
    gamePlay();
  }

}
