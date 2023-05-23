import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


const API_URL = 'http://localhost:1115/welcamp/api/test/';
///welcamp/swagger-ui/index.html
//const API_URL = 'http://localhost:1115/welcamp/swagger-ui/index.html';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http: HttpClient) { }

  

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'owner', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'seller', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'camper', { responseType: 'text' });
  }

/*
  public registre(user:User){
    //console.log(user.role);
   
    return this.http.post("http://localhost:1115/welcamp/api/test/signup", user);
  }  */
  /*
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'deliv', { responseType: 'text' });
  }
  
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'camper', { responseType: 'text' });
  }
  
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'owner', { responseType: 'text' });
  }
  */
}
