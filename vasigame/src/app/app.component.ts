import { Component } from '@angular/core';


declare var heightWidthIndicate : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VasiGames';
  public flag: boolean;
  
  constructor(){}
  ngOnInit(): void {
    
    this.flag = heightWidthIndicate();
    
   
  }
 
 
}


