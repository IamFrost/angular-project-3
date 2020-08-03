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

  currentSelectedUser = 'rony';

  logins: LoginsModel[] = null;
  usersec: UsersecModel[] = null;

  menuMap = new Map<string, Set<string>>();
  userAccessMap = new Map<string, Set<string>>();


  constructor(private userAccessOneService: UserAccessOneService,
    private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.setAllLogin();
    this.setMenu();
    this.setOneUserAccess();
    // this.setCurrentSelectedUserAccess();
  }







  addInMap(key: string, value: string) {
    if (this.userAccessMap.size === 0 || this.userAccessMap.has(key) === false) {
      let menuNameSet = new Set<string>();
      menuNameSet.add(value);
      this.userAccessMap.set(key, menuNameSet);
    }
    else {
      for (let row of this.userAccessMap) {
        if (row[0].toString().trim() === key.toString().trim()) {
          let menuNameSet = new Set<string>();
          for (let entry of row[1]) {
            menuNameSet.add(entry);
          }
          menuNameSet.add(value);
          this.userAccessMap.set(key, menuNameSet);
          break;
        }
      }
    }
  }
  deleteFromMap(key: string, value: string) {
    if (this.userAccessMap.has(key)) {
      for (let row of this.userAccessMap) {
        if (row[0].toString().trim() === key.toString().trim()) {
          for (let entry of row[1]) {

            if (entry.toString().trim() === value.toString().trim()) {
              if(row[1].size === 1){
                this.userAccessMap.delete(key);
              }
              else{
                let menuNameSet = new Set<string>();
                for(let entry of row[1]){
                  menuNameSet.add(entry);
                }
                menuNameSet.delete(value);
                this.userAccessMap.set(key, menuNameSet);
              }
            }

          }
        }
      }
    }
  }
  isInMap(key: string, value: string): boolean {
    if (this.userAccessMap.has(key)) {
      for (let row of this.userAccessMap) {
        if (row[0].toString().trim() === key.toString().trim()) {
          for (let entry of row[1]) {
            if (entry.toString().trim() === value.toString().trim()) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }






  setCurrentSelectedUserAccess() {
    if (this.usersec) {
      for (let row of this.usersec) {
        this.addInMap(row.mainmenu, row.menuname);
      }
      console.log("this is model: "+this.usersec);
      console.log("this is map: "+this.userAccessMap);
      for(let row of this.userAccessMap){
        for(let entry of row[1]){
          console.log("entry[0] : "+row[0]+" entry[1] : "+entry);
        }
      }
    }
    else {
      this.userAccessMap = null;
    }
  }






  setOneUserAccess() {
    this.userAccessOneService.getOneEmployee(this.currentSelectedUser).subscribe(data => {
      //console.log('one', data);
      if (data) {
        this.usersec = data;
        this.setCurrentSelectedUserAccess();
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






  setMenu() {

    let map = new Map<string, string[]>();
    map.set('ADMIN', ['Create User', 'User Access']);
    map.set('ACCOUNTS', ['Accounting Head Entry', 'Buyer Ledger',
      'Contra Voucher Entry', 'General Ledger', 'Item Ledger', 'Ledger Book',
      'Open Balance for Buyer', 'Open Balance for Supplier', 'Receive Payment',
      'Supplier Ledger', 'Vocher Entry']);
    map.set('SALE', ['Buyer', 'Buyer List', 'MR Search', 'Sale Entry',
      'Sale Product Search', 'Buyer Ledger', 'Sale Return Entry']);
    map.set('INVENTORY', ['Card Entry', 'Damage Adjust', 'Item Entry',
      'Item Search', 'Opening Balance', 'Opening Quantity', 'Stock Position',
      'Unit Entry']);
    map.set('RECEIVED GOODS', ['Purchase Chalan', 'Purchase Edit', 'Purchase Entry',
      'Purchase Product Search Details', 'Supplier Info Entry']);

    if (map) {
      for (let rowMap of map) {
        let menuNameSet = new Set<string>();
        for (let element of rowMap[1]) {
          menuNameSet.add(element);
        }
        this.menuMap.set(rowMap[0], menuNameSet);
      }
    }
    else {
      this.menuMap = null;
    }
  }






  setAllLogin() {
    this.loginService.getAllEmployee().subscribe(data => {
      //console.log('all', data);
      if (data) {
        this.logins = data;
      }
      else {
        this.logins = null;
      }
    })
  }


}
