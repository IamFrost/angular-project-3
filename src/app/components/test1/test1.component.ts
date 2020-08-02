import { Component, OnInit } from '@angular/core';
import { UserAccessOneService } from "../../services/user-access-one/user-access-one.service";
import { LoginService } from "../../services/login/login.service";
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Usersec } from 'src/app/models/usersec';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  users = [];
  currentSelectedUser: string;
  mapMenu = new Map();
  mapMenusFirstColumn = [];
  mapMenusSecondColumn = [];
  allUsers: Array<string> = [];
  userSet = new Set<string>();
  userMap = new Map<string, Set<string>>();
  fetchMap = new Map<string, Set<string>>();
  updateMap = new Map<string, Set<string>>();

  constructor(private userAccessOneService: UserAccessOneService,
    private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.setFirstColumn();
    this.setMap();
    this.getOneUserAccess();
  }

  isInFetchMap(accessValue: string) {
    if (this.fetchMap.size !== 0) {
      for (let entry of this.fetchMap.entries()) {
        let accessRow = entry[1];
        // not using has method of Set - using loop to search
        for (let access of accessRow) {
          if (access.toString().trim() === accessValue.toString().trim()) {
            return true;
          }
        }
      }
    }
    return false;
  }

  updateAccess(firstColumnValue: string, secondColumnValue: string) {
    //console.log("this is user: " + this.getSelectedUser() + " this is firstColumnValue : " + firstColumnValue + " this is secondColumnValue: " + secondColumnValue);

    let entryFound = false;
    let searchflag = 0;
    for (let entry of this.updateMap.entries()) {
      if (entry[0].toString().trim() === firstColumnValue.toString().trim()) {
        searchflag = 1;
        if (entry[1].has(secondColumnValue.toString().trim())) {
          entryFound = true;
          searchflag = 2;
          this.updateMap.delete(entry[0]);
          console.log("deleted : ")
          break;
        }
        if (searchflag === 1) {
          entry[1].add(secondColumnValue);
          this.updateMap.set(firstColumnValue, entry[1]);
          console.log("added : ");
          break;
        }
      }
    }
    if (searchflag === 0 && entryFound === false) {
      let secondColumnSet = new Set<string>();
      secondColumnSet.add(secondColumnValue);
      this.updateMap.set(firstColumnValue, secondColumnSet);
      console.log("added : ");
    }

    //Iterate over map entries
    for (let entry of this.updateMap.entries()) {
      for (let key of entry[1].keys()) {
        console.log('this is update map : ' + 'this is first index : ' + entry[0] + ' this is second index: ', key);
      }
    }
  }

  trackByFn(i: number) {
    return i;
  }

  setMap() {
    this.mapMenu = this.getMenu();
  }

  getSecondColumn(map: Map<any, any>, firstColumnName: string) {
    let secondColumn = [];
    for (let entry of map.entries()) {
      if (entry[0] === firstColumnName) {
        secondColumn = entry[1];
        break;
      }
    }
    return secondColumn;
  }

  setFirstColumn() {
    this.mapMenusFirstColumn = this.getFirstColumn(this.getMenu());
  }

  getFirstColumn(map: Map<any, any>) {
    let firstColumn = [];
    for (let entry of map.entries()) {
      firstColumn.push(entry[0]);
    }
    return firstColumn;
  }

  getMenu() {

    let map = new Map();
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
    return map;
  }

  async getAllUsers() {
    const response = await this.loginService.GetAllLogins();
    const responseToJson = await response.json();
    for (let entry of responseToJson) {
      this.userSet.add(entry['username']);
    }
  }

  async getOneUserAccess() {
    const response = await this.userAccessOneService.GetOneUserAccess(this.getSelectedUser());
    if(response){
      const responseToJson = await response.json();
      if(responseToJson){
        this.userAccessOneService.setJsonResponse(responseToJson);
        this.fetchMap = this.getKeyValuePair(this.userAccessOneService.getJsonResponse(), this.getDistinctMainMenu(this.userAccessOneService.getJsonResponse(), 'mainmenu'), 'mainmenu', 'menuname');
        this.updateMap = this.fetchMap;
      }
      else{
        console.log("can't convert response to json : "+responseToJson);
      }
    }
    else{
      console.log("response not found : "+response);
    }
  }

  getKeyValuePair(data: string[], items: string[], column1Name: string, column2Name: string) {

    let map = new Map<string, Set<string>>();

    items.forEach(element => {
      let mainmenu = element;
      let menuname = new Set<string>();
      menuname = this.getDistinctMenuName(data, column1Name, column2Name, mainmenu);
      map.set(mainmenu, menuname);
    });

    return map;
  }

  getDistinctMainMenu(items: any, column1Name: string) {
    const lookup = {};
    const result = [];

    for (const item of items) {
      const currentVar = item[column1Name];
      if (!(currentVar in lookup)) {
        lookup[currentVar] = 1;
        result.push(currentVar);
      }
    }

    return result;
  }

  getDistinctMenuName(items: string[], column1Name: string, column2Name: string, column1Value: string) {
    console.log('this is items : ' + items.toString());
    const lookup = {};
    const result = [];
    for (const item of items) {
      const currentVar = item[column1Name];
      if (currentVar === column1Value) {
        const currentValue = item[column2Name];
        if (!(currentValue in lookup)) {
          lookup[currentValue] = 1;
          result.push(currentValue);
        }
      }
    }
    let set = new Set<string>();
    for (let item of result) {
      set.add(item);
    }
    return set;
  }

  getSelectedUser() {
    console.log(this.currentSelectedUser);
    return this.currentSelectedUser;

  }

  getSelectedUserAccess() {
    this.getOneUserAccess();
  }
}
