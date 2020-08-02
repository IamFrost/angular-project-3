import { Component, OnInit } from '@angular/core';
import { UserAccessOneService } from "../../services/user-access-one/user-access-one.service";
// import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  users = [];
  currentSelectedUser;
  mapMenu = new Map();
  mapMenusFirstColumn = [];
  mapMenusSecondColumn = [];
  fetchMap = new Map();
  updateMap = new Map<string, Set<string>>();

  getAllUsers() {
    let getUsers = ['suman', 'rony', 'alex'];
    this.users = getUsers;
    this.currentSelectedUser = getUsers[0];
    return getUsers;
  }

  // mapMenusFirstColumn = this.getFirstColumn(this.getMenu());
  constructor(private userAccessOneService: UserAccessOneService) {
  }

  ngOnInit(): void {

    this.getAllUsers();
    this.setFirstColumn();
    // this.getOneUserAccess();
    // this.getDistinctMainMenuValues();
    //this.selectedHero();
    // this.getMenu();
    this.setMap();
    this.getOneUserAccess();


  }

  isInFetchMap(accessValue: string, checkboxId?: string) {
    // console.log("From isInFetchMap: accessValue - "+accessValue);
    if (this.fetchMap.size !== 0) {
      for (let entry of this.fetchMap.entries()) {
        let accessRow = entry[1];
        for (let access of accessRow) {
          if (access.toString().trim() === accessValue.toString().trim()) {
            // console.log("found : From isInFetchMap: accessValue - "+accessValue.toString().trim());
            // console.log(document.getElementById(checkboxId));
            return true;
          }
        }
      }
    }
    return false;
  }

  isFoundInSet(set: Set<string>) {

    for (let entry of set.keys()) {

      //console.log('this is update map : ', 'this is first index : ', entry[0], 'this is second index: ', entry[1]);
    }
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
      for(let key of entry[1].keys()){
        console.log('this is update map : ' + 'this is first index : '+ entry[0] + ' this is second index: ', key);
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

    //Iterate over map entries
    // for (let entry of map.entries()) {
    //   console.log('this is map : ', entry[0], entry[1]);
    // }
    return map;
  }

  selectedHero() {
    var elements = (<HTMLInputElement[]><any>document.getElementsByName("checkbox"));
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == "checkbox") {
        if (elements[i].checked) {
          console.log("Checked", elements[i].checked);
          //this.inEditMode = true;
          //break;                      //<== Add this line in your for loop
        }
        else {
          console.log("Unchecked", elements[i].checked);
          //this.inEditMode = false;
        }
      }
      else {
        console.log('this is type : ' + elements[i].type);
      }
    }
  }

  async getOneUserAccess() {
    const response = await this.userAccessOneService.GetOneUserAccess(this.getSelectedUser());
    const responseToJson = await response.json();
    this.userAccessOneService.setJsonResponse(responseToJson);
    //this.userAccessOneService.jsonResponse = responseToJson;
    //console.log('this is responseToJson : ' + responseToJson);
    //console.log('from data service : this is jsonresponse : ' + this.userAccessOneService.jsonResponse);
    //console.log(userAccessOneService);
    //this.getDistinctMainMenu(userAccessOneService, 'mainmenu');
    //this.getDistinctMenuName(userAccessOneService, 'mainmenu', 'menuname', 'ACCOUNTS');
    this.fetchMap = this.getKeyValuePair(this.userAccessOneService.getJsonResponse(), this.getDistinctMainMenu(this.userAccessOneService.getJsonResponse(), 'mainmenu'), 'mainmenu', 'menuname');
    //this.updateMap = this.fetchMap;

    // for (const entry of this.fetchMap.entries()) {
    //   console.log('this is fetch map :  entry[0] : ' + entry[0] + ' entry[1] : ' + entry[1]);
    // }
    // for (const entry of this.updateMap.entries()) {
    //   console.log('this is update map :  entry[0] : ' + entry[0] + ' entry[1] : ' + entry[1]);
    // }
  }

  getKeyValuePair(data: string[], items: string[], column1Name: string, column2Name: string) {

    let map = new Map();

    // console.log('this is data from getKeyValuePair : ' + data);
    // console.log('this is items from getKeyValuePair : ' + items);

    items.forEach(element => {
      let mainmenu = element;
      let menuname = [];
      menuname = this.getDistinctMenuName(data, column1Name, column2Name, mainmenu);

      let elements = [];
      menuname.forEach(element => {
        // console.log('this is main menu from getKeyValuePair : ' + mainmenu);
        // console.log('this is menu name from getKeyValuePair : ' + element);
        elements.push(element);
      });
      map.set(mainmenu, elements);

    });

    //Iterate over map keys
    // for (let key of map.keys()) {
    //   console.log("Map Keys= " + key);
    // }

    //Iterate over map values
    // for (let value of map.values()) {
    //   console.log("Map Values= " + value);
    // }

    //Iterate over map entries
    // for (let entry of map.entries()) {
    //   console.log('this is map : ', entry[0], entry[1]);
    // }

    return map;
  }

  getDistinctMainMenu(items: string[], column1Name: string) {

    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    // console.log(items);
    for (const item of items) {
      const currentVar = item[column1Name];

      if (!(currentVar in lookup)) {
        lookup[currentVar] = 1;
        result.push(currentVar);
      }
    }

    // console.log('this is result - main menu : ' + result);
    return result;

  }

  getDistinctMenuName(items: string[], column1Name: string, column2Name: string, column1Value: string) {

    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    // console.log(items);
    for (const item of items) {
      const currentVar = item[column1Name];
      // console.log('debug here : '+currentVar)
      if (currentVar === column1Value) {
        const currentValue = item[column2Name];
        // console.log('value here : '+currentValue);
        if (!(currentValue in lookup)) {
          lookup[currentValue] = 1;
          result.push(currentValue);
        }
      }
    }

    // console.log('this is result 1: ' + result);
    return result;

  }

  getSelectedUser() {
    console.log(this.currentSelectedUser);
    return this.currentSelectedUser;

  }

  getSelectedUserAccess() {
    this.getOneUserAccess();
  }
}
