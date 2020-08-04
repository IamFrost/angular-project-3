import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UsersecModel } from '../../models/usersec/usersec-model';
import { LoginsModel } from '../../models/logins/logins-model';
import { UserAccessOneService } from "../../services/user-access-one/user-access-one.service";
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {

  currentSelectedUser: string = null;

  logins: LoginsModel[] = null;
  usersec: UsersecModel[] = null;

  menuMapFirstColumn: string[] = [];
  menuMapSecondColumn: string[] = [];

  menuMap = new Map<string, Set<string>>();
  userAccessMap = new Map<string, Set<string>>();
  trackMap = new Map<string, Set<string>>();

  userAccessForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userAccessOneService: UserAccessOneService,
    private loginService: LoginService) {
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

  ngOnInit() {
    this.setAllLogin();
    this.getMenu();
    this.getFirstColumn();
    this.buildReactiveForm();
  }

  // convenience getters for easy access to form fields
  get userAccessFormControl() { return this.userAccessForm.controls; }

  onUserSelectChange(e) {

  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userAccessForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userAccessForm.value, null, 4));
  }

  updateUserAccess(firstColumnValue: string, secondColumnValue: string) {
    console.log("this is user: " + this.currentSelectedUser + " this is firstColumnValue : " + firstColumnValue + " this is secondColumnValue: " + secondColumnValue);

    let entryFound = false;
    let searchflag = 0;
    for (let entry of this.userAccessMap.entries()) {
      if (entry[0].toString().trim() === firstColumnValue.toString().trim()) {
        searchflag = 1;
        if (entry[1].has(secondColumnValue.toString().trim())) {
          entryFound = true;
          searchflag = 2;
          this.userAccessMap.delete(entry[0]);
          console.log("deleted : ")
          break;
        }
        if (searchflag === 1) {
          entry[1].add(secondColumnValue);
          this.userAccessMap.set(firstColumnValue, entry[1]);
          console.log("added : ");
          break;
        }
      }
    }
    if (searchflag === 0 && entryFound === false) {
      let secondColumnSet = new Set<string>();
      secondColumnSet.add(secondColumnValue);
      this.userAccessMap.set(firstColumnValue, secondColumnSet);
      console.log("added : ");
    }

    //Iterate over map entries
    for (let entry of this.userAccessMap.entries()) {
      for (let key of entry[1].keys()) {
        console.log('this is update map : ' + 'this is first index : ' + entry[0] + ' this is second index: ', key);
      }
    }
  }

  buildReactiveForm() {
    this.userAccessForm = this.formBuilder.group({
      userSelect: [null, Validators.required]
    });
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
              if (row[1].size === 1) {
                this.userAccessMap.delete(key);
              }
              else {
                let menuNameSet = new Set<string>();
                for (let entry of row[1]) {
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
    if (this.userAccessMap.size !== 0) {
      if (this.userAccessMap.has(key)) {
        for (let row of this.userAccessMap) {
          if (row[0].toString().trim() === key.toString().trim() && row[1].has(value)) {
            return true;
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
      // console.log("this is model: " + this.usersec);
      // console.log("this is map: " + this.userAccessMap);
      // for (let row of this.userAccessMap) {
      //   for (let entry of row[1]) {
      //     console.log("entry[0] : " + row[0] + " entry[1] : " + entry);
      //   }
      // }
    }
    else {
      this.userAccessMap = null;
    }
  }

  setOneUserAccess() {
    this.userAccessMap.clear();
    this.userAccessOneService.getOneUserAccess(this.getCurrentSelectedUser()).subscribe(data => {
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

  getCurrentSelectedUser(): string {
    return this.currentSelectedUser;
  }

  getSecondColumn(firstColumnValue: string) {
    let secondColumn: string[] = [];
    for (let row of this.menuMap.entries()) {
      if (row[0].toString().trim() === firstColumnValue.toString().trim()) {
        for (let entry of row[1]) {
          secondColumn.push(entry);
        }
        break;
      }
    }
    this.menuMapSecondColumn = secondColumn;
    return secondColumn;
  }

  getFirstColumn() {
    let firstColumn: string[] = [];
    for (let key of this.menuMap.keys()) {
      firstColumn.push(key);
    }
    this.menuMapFirstColumn = firstColumn;
    return firstColumn;
  }

  getMenu() {

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
    this.loginService.getAllLogin().subscribe(data => {
      if (data) {
        this.logins = data;
      }
      else {
        this.logins = null;
      }
    })
  }

}
