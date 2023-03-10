import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, tap } from 'rxjs';
import  appConstant  from '../constant/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Define the token variable

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  private loggedUser! : string ; 

  constructor( private http : HttpClient) {
    
   }


  // 
  login(user: { username: string, password: string }): Observable<boolean> {
    const url = `${appConstant.BACKEND}${appConstant.TOKEN_ROUTE}`
    console.log(url)
    console.log(user)
    return this.http.post(url, user , { responseType: 'text'})
      .pipe(
        tap(token => this.doLoginUser(user.username, token)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  //TODO add logout to remove make the user token unavable so he can't use it anymore 


  private doLoginUser(username: string, token: string) {
    this.loggedUser = username;
    this.storeJwtToken(token);
  }


  // check if the users is login 
  isLoggedIn() {
    return !!this.getJwtToken();
  }

// log out the user while he logout 
  private doLogoutUser() {

    this.loggedUser = '';
    this.removeTokens();
  }

  // get the token from localStorage 
  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  // store the toke in the localstorage 
  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

// remove the token in the localstorage
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
