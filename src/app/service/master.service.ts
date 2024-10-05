import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginmodel, user } from '../model/Loginmodel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  proceedLogin(_data: Loginmodel) {
    return this.http.get<user[]>('http://localhost:3000/user?id=' + _data.username + '&&password=' + _data.password);
  }

  isLoggedIn() {
    return localStorage.getItem('username') != null;
  }
}
