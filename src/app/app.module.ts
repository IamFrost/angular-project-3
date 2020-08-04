import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../app/components/login/login.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { SelectBranchFyearComponent } from '../app/components/select-branch-fyear/select-branch-fyear.component';
import { Menu1Component } from '../app/components/menu1/menu1.component';
import { UserAccessComponent } from '../app/components/user-access/user-access.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SelectBranchFyearComponent,
    Menu1Component,
    UserAccessComponent,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
