import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../app/components/login/login.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { SelectBranchFyearComponent } from '../app/components/select-branch-fyear/select-branch-fyear.component';
import { Test1Component } from '../app/components/test1/test1.component';
import { Menu1Component } from '../app/components/menu1/menu1.component';
import { UserAccessComponent } from '../app/components/user-access/user-access.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SelectBranchFyearComponent,
    Test1Component,
    Menu1Component,
    UserAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
