import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../app/components/test/login/login.component';
import { Menu1Component } from '../app/components/test/menu1/menu1.component';
import { SelectBranchFyearComponent } from '../app/components/test/select-branch-fyear/select-branch-fyear.component';
import { SignupComponent } from '../app/components/test/signup/signup.component';
import { UserAccessComponent } from '../app/components/test/user-access/user-access.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test/test1/test1.component';
import { Test2Component } from './components/test/test2/test2.component';
import { Test3Component } from './components/test/test3/test3.component';
import { Test4Component } from './components/test/test4/test4.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SelectBranchFyearComponent,
    Menu1Component,
    UserAccessComponent,
    Test2Component,
    Test3Component,
    Test1Component,
    Test4Component
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
