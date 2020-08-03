import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Usersec } from 'src/app/models/usersec';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  protocol = 'http';
  host = 'localhost';
  port = '3000';
  subdomain = 'logins';
  baseUrlUsersec = this.protocol + '://' + this.host + ':' + this.port + '/' + this.subdomain;
  baseUrlUsersecWithSlash = this.protocol + '://' + this.host + ':' + this.port + '/' + this.subdomain + '/';

  constructor(private httpClient : HttpClient) { }

  GetAllLogins() {
    return fetch(this.baseUrlUsersec);
  }

  // getAllEmployee(){
  //   return this.httpClient.get<Usersec[]>(this.baseUrlUsersec);
  // }



}
