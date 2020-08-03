import { Component, OnInit } from '@angular/core';
import { Usersec } from '../../models/usersec/usersec';
import { UserAccessOneService } from "../../services/user-access-one/user-access-one.service";

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  currentSelectedUser = 'rony';
  usersec: Usersec[] = null;

  constructor(private userAccessOneService: UserAccessOneService) {

  }

  ngOnInit(): void {
    // this.setOneUserAccess();
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
