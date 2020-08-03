import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginsModel } from 'src/app/models/logins/logins-model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  protocol = 'http';
  host = 'localhost';
  port = '3000';
  subdomain = 'logins';
  baseUrlLogins = this.protocol + '://' + this.host + ':' + this.port + '/' + this.subdomain;
  baseUrlLoginsWithSlash = this.protocol + '://' + this.host + ':' + this.port + '/' + this.subdomain + '/';

  constructor(private httpClient: HttpClient) { }

  GetAllLogins() {
    return fetch(this.baseUrlLogins);
  }

  getAllEmployee() {
    return this.httpClient.get<LoginsModel[]>(this.baseUrlLogins);
  }
}
