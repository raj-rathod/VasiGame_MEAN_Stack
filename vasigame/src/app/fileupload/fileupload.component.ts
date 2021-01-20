import { Component, OnInit } from '@angular/core';
import{ FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { ThrowStmt } from '@angular/compiler';

const uri ='http://localhost:3000/file/upload';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  uploader = new FileUploader({url:uri});
  public uploadedfilelist :any=[];

  constructor() { 
    this.uploader.onCompleteItem =(item :any, response : any, headers : any) =>{
      this.uploadedfilelist.push(JSON.parse(response));
    }
  }

  ngOnInit(): void {
  }
  
}
