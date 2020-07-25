import { Component, OnInit } from '@angular/core';
import { UserAccessOneService } from "../services/user-access-one/user-access-one.service";

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {


  constructor(private userAccessOneService: UserAccessOneService) {
  }

  ngOnInit(): void {
    // this.getOneUserAccess();
    // this.getDistinctMainMenuValues();
    // this.selectedHero();
  }

  selectedHero() {
    var elements = (<HTMLInputElement[]><any>document.getElementsByName("form"));
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == "checkbox") {
        if (elements[i].checked) {
          console.log("Checked", elements[i].checked);
          //this.inEditMode = true;
          break;                      //<== Add this line in your for loop
        }
        else {
          console.log("Unchecked", elements[i].checked);
          //this.inEditMode = false;
        }
      }
      // else{
      //   console.log('this is type : '+elements[i].type);
      // }
    }
  }

  async getOneUserAccess() {
    const response = await this.userAccessOneService.GetOneUserAccess('rony');
    const userAccessOneService = await response.json();
    this.userAccessOneService.jsonResponse = userAccessOneService;
    console.log('this is response : '+this.userAccessOneService.jsonResponse);
    // this.userAccessOneService.setJsonResponse(userAccessOneService);
    // console.log(userAccessOneService);
    // this.getDistinctMainMenu(userAccessOneService, 'mainmenu');
    // this.getDistinctMenuName(userAccessOneService, 'mainmenu', 'menuname', 'ACCOUNTS');
    // this.getKeyValuePair(userAccessOneService, this.getDistinctMainMenu(userAccessOneService, 'mainmenu'), 'mainmenu', 'menuname');
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
        console.log('this is main menu from getKeyValuePair : ' + mainmenu);
        console.log('this is menu name from getKeyValuePair : ' + element);
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
    console.log(items);
    for (const item of items) {
      const currentVar = item[column1Name];

      if (!(currentVar in lookup)) {
        lookup[currentVar] = 1;
        result.push(currentVar);
      }
    }

    console.log('this is result - main menu : ' + result);
    return result;

  }

  getDistinctMenuName(items: string[], column1Name: string, column2Name: string, column1Value: string) {

    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    console.log(items);
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

    console.log('this is result 1: ' + result);
    return result;

  }

}
