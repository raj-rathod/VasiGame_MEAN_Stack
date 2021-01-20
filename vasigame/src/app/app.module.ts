//import module here ....

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegistrationModule} from './registration/registration.module';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { UserdataModule } from './userdata/userdata.module';
import {CounterModule} from 'angular-circle-counter';
import {ChartsModule} from 'ng2-charts';
import {AdminGameModuleModule} from './admin-game-module/admin-game-module.module';


//import component here  .... 
import { AppComponent } from './app.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import {TeamMemberInfoComponent} from './team-info/team-info.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PopularGameSectionComponent } from './popular-game-section/popular-game-section.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomeComponent } from './home/home.component';
import { GamesectionComponent } from './gamesection/gamesection.component';
import { from } from 'rxjs';







@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent,
    TeamInfoComponent,
    TeamMemberInfoComponent,
    VideoplayerComponent,
    ContactComponent,
    NavbarComponent,
    MainpageComponent,
    UserprofileComponent,
    PopularGameSectionComponent,
    AdminPageComponent,
    HomeComponent,
    GamesectionComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    RegistrationModule,
    UserdataModule,
    CounterModule,
    ChartsModule,
    AdminGameModuleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
