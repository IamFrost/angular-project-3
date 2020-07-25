import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SelectBranchFyearComponent } from './select-branch-fyear/select-branch-fyear.component';
import { Test1Component } from './test1/test1.component';
import { Menu1Component } from './menu1/menu1.component';
import { UserAccessComponent } from './user-access/user-access.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'useraccess',
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
    path:'selectbranchfyear',
    component: SelectBranchFyearComponent
  },
  {
    path:'test1',
    component: Test1Component
  },
  {
    path:'menu1',
    component: Menu1Component
  },
  {
    path:'useraccess',
    component: UserAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
