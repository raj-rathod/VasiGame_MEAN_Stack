import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FileuploadComponent} from './fileupload/fileupload.component';
import { UserprofileComponent} from "./userprofile/userprofile.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";

import { from } from 'rxjs';




const routes: Routes = [
  { path :'', redirectTo:'/home', pathMatch:'full'},
  { path : 'home', component: HomeComponent},
  { path : 'fileupload', component : FileuploadComponent},
  { path : 'userprofile', component :UserprofileComponent},
  { path : 'admin', component : AdminPageComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
