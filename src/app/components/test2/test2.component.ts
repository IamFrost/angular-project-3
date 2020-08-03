import { Component, OnInit } from '@angular/core';
import { UsersecModel } from '../../models/usersec/usersec-model';
import { LoginsModel } from '../../models/logins/logins-model';
import { UserAccessOneService } from "../../services/user-access-one/user-access-one.service";
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  logins: LoginsModel[] = null;
  usersec: UsersecModel[] = null;
  currentSelectedUser = 'rony';


  constructor(private userAccessOneService: UserAccessOneService,
     private loginService: LoginService) {

  }

  ngOnInit(): void {
    // this.setOneUserAccess();
    this.setAllLogin();
  }

  setAllLogin() {
    this.loginService.getAllEmployee().subscribe(data => {
      console.log('all', data);
      if (data) {
        this.logins = data;
      }
      else {
        this.logins = null;
      }
    })
  }

  setOneUserAccess() {
    this.userAccessOneService.getOneEmployee(this.currentSelectedUser).subscribe(data => {
      console.log('one', data);
      if (data) {
        this.usersec = data;
      }
      else {
        this.usersec = null;
      }
    })
  }

  deleteOneUserAccess() {
    this.usersec = null;
  }

  getOneUsersec() {
    console.log("displaying data: " + this.usersec);
    if (this.usersec) {
      for (let row of this.usersec) {
        console.log("userid: " + row.userid + " menuname: " + row.menuname + " mainmenu: " + row.mainmenu);
      }
    }
  }
}
