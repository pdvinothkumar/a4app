import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SchoolsComponent } from './components/schools/schools.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [
  {path:'',component:UsersComponent},
  {path:'schools',component:SchoolsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
