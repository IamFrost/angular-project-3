import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SelectBranchFyearComponent } from './select-branch-fyear/select-branch-fyear.component';
import { Test1Component } from './test1/test1.component';
import { Menu1Component } from './menu1/menu1.component';
import { UserAccessComponent } from './user-access/user-access.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
