import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog ,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var heightWidthIndicate : any;

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  public teamdata = [
    {"name" : "Rajesh Rathore", "post" : "Co-Founder ", "education" : "BE (Computer Science)", "image" : "../../assets/image/rajesh.jpg",
     "contact":{"Linkdin" : "https://www.linkedin.com/in/rajesh-rathore-409a0316b/", "facebook" : "https://www.facebook.com/raj.n.143","twitter" :"https://twitter.com/Rajesh946055", "instagram":"#" }, 
     "description":"I am Rajesh Rathore , persuing BE from computer science and Engeneering From Visvesvaraya Technological University. Today's Education is Just Like a Jumbled Game where people Uses to try those things where their Field of intrest lies within.So I am also trying my hand Best in web Devlopment"},
     {"name" : "Nishant Sinha", "post" : "Co-Founder", "education" : "BE (Computer Science)", "image" : "../../assets/image/nishant.jpg",
     "contact":{"Linkdin" : "https://www.linkedin.com/in/rajesh-rathore-409a0316b/", "facebook" : "https://www.facebook.com/raj.n.143","twitter" :"url", "instagram":"#"}, 
     "description":"I am Nishant Sinha , persuing BE from computer science and Engeneering From Visvesvaraya Technological University. Today's Education is Just Like a Jumbled Game where people Uses to try those things where their Field of intrest lies within.So I am also trying my hand Best in web Devlopment"},
     {"name" : "Pushkar Chaudhary", "post" : "Co-Founder", "education" : "BE (Computer Science)", "image" : "../../assets/image/pc.jpg",
     "contact":{"Linkdin" : "https://www.linkedin.com/in/rajesh-rathore-409a0316b/", "facebook" : "https://www.facebook.com/raj.n.143","twitter" :"url", "instagram":"#"}, 
     "description":"I am Pushkar Chaudhary , persuing BE from computer science and Engeneering From Visvesvaraya Technological University. Today's Education is Just Like a Jumbled Game where people Uses to try those things where their Field of intrest lies within.So I am also trying my hand Best in web Devlopment"},
     {"name" : "Shubham Sindhu", "post" : "Team Manager", "education" : "BE (Computer Science)", "image" : "../../assets/image/shubham.jpg",
     "contact":{"Linkdin" : "https://www.linkedin.com/in/rajesh-rathore-409a0316b/", "facebook" : "https://www.facebook.com/raj.n.143","twitter" :"url", "instagram":"#"}, 
     "description":" I am Shubham Sindhu , persuing BE from computer science and Engeneering From Visvesvaraya Technological University. Today's Education is Just Like a Jumbled Game where people Uses to try those things where their Field of intrest lies within.So I am also trying my hand Best in web Devlopment"}
  ];
   public teamMemberData =[
    {"name" : "Devashish Dubey", "post" : "Marketing Head", "education" : "BCA (Computer Science)", "image" : "../../assets/image/devu.jpg",
    "contact":{"Linkdin" : "#", "facebook" : "#","twitter" :"#", "instagram":"#" }, 
    "description":"I am Devashish Dubey , persuing BCA from computer science .  I am also trying my hand Best in web Devlopment"},
    {"name" : "Rajeev Kumar", "post" : "Promotional Head", "education" : "BE (Computer Science)", "image" : "../../assets/image/rajeev.jpg",
    "contact":{"Linkdin" : "#", "facebook" : "#","twitter" :"#", "instagram":"#" }, 
    "description":" I am Rajeev Kumar , persuing BE from computer science and Engeneering From Visvesvaraya Technological University.  I am also trying my hand Best in Digital Marketing"},
    {"name" : "Bharat Singh", "post" : "Marketor", "education" : "BE (Information Science)", "image" : "../../assets/image/bharat.jpg",
    "contact":{"Linkdin" : "#", "facebook" : "#","twitter" :"#", "instagram":"#" }, 
    "description":" I am Rajeev Kumar , persuing BE from computer science and Engeneering From Visvesvaraya Technological University.  I am also trying my hand Best in Digital Marketing"},
    {"name" : "Rahul Dabas", "post" : " Content Writer", "education" : "BE (Computer Science)", "image" : "../../assets/image/rajesh.jpg",
    "contact":{"Linkdin" : "#", "facebook" : "#","twitter" :"#", "instagram":"#" }, 
    "description":" I am Rahul Dabas , persuing BE from computer science and Engeneering From Visvesvaraya Technological University.  I am also trying my hand Best in Logo Designing and Content writing"},
    {"name" : "Renil Roy", "post" : "Video & Music Editor", "education" : "BE (Computer Science)", "image" : "../../assets/image/renil.jpg",
    "contact":{"Linkdin" : "#", "facebook" : "#","twitter" :"#", "instagram":"#" }, 
    "description":" I am Renil Roy , persuing BE from computer science and Engeneering From Visvesvaraya Technological University.  I am also trying my hand Best ii Video & Music Editing"}
   ];
  constructor(public dialog : MatDialog) { }
  public flag : boolean;
  ngOnInit(): void {
    
    this.flag =  heightWidthIndicate();
    
  }
public teamInfo:any=this.teamMemberData[0];
teamMemberInfo(event :any){
 this.teamInfo = event;
}



  showTeamData(teamData){
    const dialogRef = this.dialog.open(TeamMemberInfoComponent, {
      width: '500px',
      data: teamData
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
  }

}
@Component({
    selector : "team-info",
    templateUrl : "./teamInfo.html",
    styleUrls: ['./team-info.component.css']
  

})
export class TeamMemberInfoComponent{
  constructor(
    public dialogRef: MatDialogRef<TeamMemberInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    public flag : boolean;
    ngOnInit(): void {
      this.flag =  heightWidthIndicate();
      
    }
}
