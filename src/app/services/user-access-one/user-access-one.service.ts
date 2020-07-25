import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAccessOneService {

  jsonResponse = [];

  constructor(private httpCLient: HttpClient) { }

  setJsonResponse(response: string[]) {
    this.jsonResponse = response;
  }
  getJsonResponse() {
    return this.jsonResponse
  }



  GetAllUserAccess() {
    return fetch(('http://localhost:3001/usersec'));
  }
  GetOneUserAccess(userid: string) {
    return fetch(('http://localhost:3001/usersec' + '?userid=' + userid));
  }


}

