import { Injectable } from '@angular/core';
import { UsersecModel } from '../../models/usersec/usersec-model';
import {HttpClient, HttpHeaders } from '@angular/common/http'

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};
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

  currentUserJsonResponse = [];
  currentUser = '';
  currentUserPriviledge = '';

  constructor(private httpClient: HttpClient) { }

  setJsonResponse(response: string[]) {
    this.jsonResponse = response;
  }
  getJsonResponse() {
    return this.jsonResponse;
  }
  setCurrentUser(userid: string) {
    this.currentUser = userid;
  }
  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentPriviledge(privilege: string) {
    this.currentUserPriviledge = privilege;
  }
  getCurrentPriviledge() {
    return this.currentUserPriviledge;
  }
  setCurrentUserJsonResponse(response: string[]) {
    this.currentUserJsonResponse = response;
  }
  getCurrentUserJsonResponse() {
    return this.currentUserJsonResponse;
  }



  // getUsers() {
  //   return this.httpClient.get(`http://localhost:3000/usersec/rony`).
  //       pipe(
  //          map((data: Usersec[]) => {
  //            return data;
  //          }), catchError( error => {
  //            return throwError( 'Something went wrong!' );
  //          })
  //       )
  //   }

  getAllEmployee(){
    return this.httpClient.get<UsersecModel[]>(this.baseUrlUsersec);
  }

  getOneEmployee(userIdInput: string){
    return this.httpClient.get<UsersecModel[]>(this.baseUrlUsersecWithSlash + userIdInput);
  }

  GetAllUserAccess() {
    return fetch(this.baseUrlUsersec);
  }
  GetOneUserAccess(userIdInput: string) {

      return fetch(this.baseUrlUsersecWithSlash + userIdInput);

  }
  Delete_A_Purchase(userIdInput: string) {
    return fetch(this.baseUrlUsersecWithSlash + userIdInput, {
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

