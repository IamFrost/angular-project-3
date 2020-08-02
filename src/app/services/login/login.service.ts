import { Injectable } from '@angular/core';

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

  constructor() { }

  GetAllLogins() {
    return fetch(this.baseUrlUsersec);
  }

  

}
