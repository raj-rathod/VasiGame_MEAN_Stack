import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


import {AdminGameComponent} from '../admin-game-module/admin-game/admin-game.component';
declare var heightWidthIndicate : any;

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public dilog : MatDialog) { }
  showFiller = false;
  flag1 = false;
  ngOnInit(): void {
    this.flag1 = heightWidthIndicate();


   
  }
public chartoptions = {
  scaleShowVerticalLines : false,
  responsive :true,
  legend : {
    labels : {
      fontColor : '#ffffff'  
    }
  },
  scales: {
    xAxes: [{
        display: true,
        scaleLabel: {   // To format the scale Lebel
            display: true,
            fontColor:'#ffffff',
            fontSize:10
        },
        ticks: {
           fontColor: "#ffffff", // To format the ticks, coming on the axis/lables which we are passing.
           fontSize: 14
          }
    }],
    yAxes: [{
        display: true,
        scaleLabel: {
            display: true,
            fontColor: '#ffffff',
            fontSize:10
        },
        ticks: {
              fontColor: "#ffffff",
              fontSize: 14
        }
    }]
}  
}
public chartlables = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'];
public charttype = 'line';
public chartlegend =true;

public chartdata = [
  {data:[40,30,405,25,1000,300,200,700],label:'Last Week '},
  {data:[30,600,36,450,900,3000,300],label:'This Week '}
];
  

public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
    labels : {
      fontColor : '#ffffff'  
    }
  }
 
};

public pieChartLabels: Label[] = ['Game1', 'Game2','Game3'];
public pieChartData: number[] = [300, 500, 100];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  },
];

public pieChartPlugins = [{
  afterLayout: function (chart) {
    chart.legend.legendItems.forEach(
      (label) => {
        let value = chart.data.datasets[0].data[label.index];

        label.text += ' ' + value;
        return label;
      }
    )
  }
}];
  sidenavClose(event :any){
    event.close();
  }

homePage(event:any){
  event.close();
}

gamesData(event:any){
  const dialogRef = this.dilog.open(AdminGameComponent, {
    width: '1200px'
    
  });
  dialogRef.afterClosed().subscribe(result =>{
    
  });
  event.close();
}

teamBoard(event :any){
  event.close();
}

scoreBoard(event :any){
  event.close();
}

progressBoard(event :any){
  event.close();
} 



}
