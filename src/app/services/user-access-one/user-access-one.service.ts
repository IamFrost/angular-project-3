import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAccessOneService {


  protocol = 'http';
  host = 'localhost';
  port = '3000';
  subdomain = 'usersec';
  baseUrlUsersec = this.protocol + '://' + this.host + ':' + this.port + '/' + this.subdomain;
  baseUrlUsersecWithSlash = this.protocol + '://' + this.host + ':' + this.port + '/' + this.subdomain + '/';

  jsonResponse = [];

  constructor(private httpCLient: HttpClient) { }

  setJsonResponse(response: string[]) {
    this.jsonResponse = response;
  }
  getJsonResponse() {
    return this.jsonResponse
  }



  GetAllUserAccess() {
    return fetch(this.baseUrlUsersec);
  }
  GetOneUserAccess(userIdInput: string) {
    return fetch(this.baseUrlUsersecWithSlash + userIdInput);
  }
  Delete_A_Purchase(userIdInput: string) {
    return fetch(this.baseUrlUsersecWithSlash + userIdInput,{
      method: 'DELETE'
    });
  }
  Create_A_Purchase(userIdInput: string, menuNameInput: string, mainMenuInput: string) {
    console.log('from Create of user-access-one.service.ts : ' + userIdInput + ' ' + menuNameInput + ' ' + mainMenuInput);
    return fetch(this.baseUrlUsersec, {
      method: 'POST',
      body: JSON.stringify({
        userid: userIdInput.toString(),
        menuname: menuNameInput.toString(),
        mainmenu: mainMenuInput.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Update_A_Purchase(userIdInput: string, menuNameInput: string, mainMenuInput: string) {
  //   console.log('from Update of user-access-one.service.ts : ' + userIdInput + ' ' + menuNameInput + ' ' + mainMenuInput);
  //   return fetch('http://localhost:3001/usersec' + '?userid=' + userIdInput, {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       userid: userIdInput.toString(),
  //       menuname: menuNameInput.toString(),
  //       mainmenu: mainMenuInput.toString()
  //     }),
  //     headers: {'Content-Type': 'application/json'}
  //   });
  // }
}

