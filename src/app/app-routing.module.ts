import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from '../app/components/test/login/login.component';
// import { SignupComponent } from '../app/components/test/signup/signup.component';
// import { SelectBranchFyearComponent } from '../app/components/test/select-branch-fyear/select-branch-fyear.component';
// import { Menu1Component } from '../app/components/test/menu1/menu1.component';
// import { UserAccessComponent } from '../app/components/test/user-access/user-access.component';
// import { Test2Component } from './components/test/test2/test2.component';
// import { Test3Component } from './components/test/test3/test3.component';
// import { Test1Component } from './components/test/test1/test1.component';
// import { Test4Component } from './components/test/test4/test4.component';

import { LoginComponent } from '../app/components/test/login/login.component';
import { Menu1Component } from './components/test/menu1/menu1.component';
import { SelectBranchFyearComponent } from './components/test/select-branch-fyear/select-branch-fyear.component';
import { SignupComponent } from './components/test/signup/signup.component';
import { Test1Component } from './components/test/test1/test1.component';
import { Test2Component } from './components/test/test2/test2.component';
import { Test3Component } from './components/test/test3/test3.component';
import { Test4Component } from './components/test/test4/test4.component';
import { UserAccessComponent } from './components/test/user-access/user-access.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'selectbranchfyear',
    component: SelectBranchFyearComponent
  },
  {
    path: 't1',
    component: Test1Component
  },
  {
    path: 't2',
    component: Test2Component
  },
  {
    path: 't3',
    component: Test3Component
  },
  {
    path: 't4',
    component: Test4Component
  },
  {
    path: 'menu1',
    component: Menu1Component
  },
  {
    path: 'useraccess',
    component: UserAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
