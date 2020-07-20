import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SelectBranchFyearComponent } from './select-branch-fyear/select-branch-fyear.component';
import { Test1Component } from './test1/test1.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'test1',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'selectBranchFyear',
    component: SelectBranchFyearComponent
  },
  {
    path:'test1',
    component: Test1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
