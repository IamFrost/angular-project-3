import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UsersecModel } from '../../../models/test/usersec/usersec-model';
import { LoginsModel } from '../../../models/test/logins/logins-model';
import { UserAccessOneService } from "../../../services/test/user-access-one/user-access-one.service";
import { LoginService } from '../../../services/test/login/login.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  form: FormGroup;
  websiteList: any = [
    { id: 1, name: 'ItSolutionStuff.com' },
    { id: 2, name: 'HDTuto.com' },
    { id: 3, name: 'NiceSnippets.com' }
  ];

  accessForm: FormGroup;
  currentSelectedUser: string = null;

  logins: LoginsModel[] = null;
  usersec: UsersecModel[] = null;

  menuMapFirstColumn: string[] = [];
  menuMapSecondColumn: string[] = [];

  menuMap = new Map<string, Set<string>>();
  userAccessMap = new Map<string, Set<string>>();
  trackMap = new Map<string, Set<string>>();

  submitted = false;

  accessUpdateArray: string[][] = [];


  constructor(private formBuilder: FormBuilder,
    private userAccessOneService: UserAccessOneService,
    private loginService: LoginService) {

    this.form = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    });

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

    this.accessForm = this.formBuilder.group({
      access: this.formBuilder.array([], [Validators.required])
    });

    for(let firstColumn of this.menuMapFirstColumn){
      for(let secondColumn of this.getSecondColumn(firstColumn)){
        this.accessForm.addControl(
          "checkbox" + firstColumn + "_" + secondColumn,
          new FormControl(false)
        );
      }
    };

  }
  ngOnInit(): void {
    this.setAllLogin();
    this.getMenu();
    this.getFirstColumn();
  }

  onCheckboxChange(e) {
    const website: FormArray = this.form.get('website') as FormArray;
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
      const index = website.controls.findIndex(x => x.value === e.target.value);
      website.removeAt(index);
    }
  }

  submit() {
    console.log(this.form.value);
  }



  onAccessCheckboxChange(e, firstColumnValue: string) {
    const access: FormArray = this.accessForm.get('access') as FormArray;

    // for (const iterator of access[0]) {
    //   console.log('this is form array: '+iterator);
    //   console.log('');
    // }
    if (e.target.checked) {
      access[firstColumnValue].push(new FormControl(e.target.value));
    } else {
      const index = access.controls.findIndex(x => x.value === e.target.value);
      access[firstColumnValue].removeAt(index);
    }
  }

  submitAccess() {
    console.log(this.accessForm.value);
  }



  updateUserAccess(firstColumnValue: string, secondColumnValue: string) {
    // if(!this.userAccessMap.has(firstColumnValue)){
    //   this.userAccessMap.set(firstColumnValue, new Set<string>(secondColumnValue));
    // }
    // console.log("this is user: " + this.currentSelectedUser + " this is firstColumnValue : " + firstColumnValue + " this is secondColumnValue: " + secondColumnValue);

    // let entryFound = false;
    // let searchflag = 0;
    // for (let entry of this.userAccessMap.entries()) {
    //   if (entry[0].toString().trim() === firstColumnValue.toString().trim()) {
    //     searchflag = 1;
    //     if (entry[1].has(secondColumnValue.toString().trim())) {
    //       entryFound = true;
    //       searchflag = 2;
    //       this.userAccessMap.delete(entry[0]);
    //       console.log("deleted : ")
    //       break;
    //     }
    //     if (searchflag === 1) {
    //       entry[1].add(secondColumnValue);
    //       this.userAccessMap.set(firstColumnValue, entry[1]);
    //       console.log("added : ");
    //       break;
    //     }
    //   }
    // }
    // if (searchflag === 0 && entryFound === false) {
    //   let secondColumnSet = new Set<string>();
    //   secondColumnSet.add(secondColumnValue);
    //   this.userAccessMap.set(firstColumnValue, secondColumnSet);
    //   console.log("added : ");
    // }

    // //Iterate over map entries
    // for (let entry of this.userAccessMap.entries()) {
    //   for (let key of entry[1].keys()) {
    //     console.log('this is update map : ' + 'this is first index : ' + entry[0] + ' this is second index: ', key);
    //   }
    // }
  }

  addInMap(key: string, value: string) {
    if (this.userAccessMap.size === 0 || this.userAccessMap.has(key) === false) {
      let menuNameSet = new Set<string>();
      menuNameSet.add(value);
      this.userAccessMap.set(key, menuNameSet);
      this.accessUpdateArray[key] = [value];
    }
    else {
      for (let row of this.userAccessMap) {
        if (row[0].toString().trim() === key.toString().trim()) {
          let menuNameSet = new Set<string>();
          let menuNameArray: string[] = [];
          for (let entry of row[1]) {
            menuNameSet.add(entry);
            menuNameArray.push(entry)
          }
          menuNameSet.add(value);
          menuNameArray.push(value);
          this.userAccessMap.set(key, menuNameSet);
          this.accessUpdateArray[key] = [menuNameArray];
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

    this.accessUpdateArray = [];

    if (this.getCurrentSelectedUser()) {
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

  print() {
    console.log(this.accessUpdateArray);
  }
}
