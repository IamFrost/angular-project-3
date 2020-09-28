import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { SelectBranchFyearComponent } from '../app/components/select-branch-fyear/select-branch-fyear.component';
import { Menu1Component } from '../app/components/menu1/menu1.component';
import { UserAccessComponent } from '../app/components/user-access/user-access.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Test1Component } from './components/test1/test1.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'selectbranchfyear',
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
    path:'test2',
    component: Test2Component
  },
  {
    path:'test3',
    component: Test3Component
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
