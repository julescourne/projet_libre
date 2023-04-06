import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, tap } from 'rxjs';
import  appConstant  from '../constant/app.constant';
import {User} from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Define the token variable

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  private loggedUser! : string ;

  private signUser! : User;

  constructor( private http : HttpClient) {

   }


  //
  login(user: { email: string, password: string }): Observable<boolean> {
    const url = `${appConstant.BACKEND}${appConstant.TOKEN_ROUTE}`
    console.log(user);

    return this.http.post(url, user , { responseType: 'text'})
      .pipe(
        tap(token => this.doLoginUser(user.email, token)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  signin(user: { nom: string, prenom: string, genre: string, email: string, password: string }): Observable<boolean> {
    const url = `${appConstant.BACKEND}authenticate/signin`;

    return this.http.post<any>(url, user );
  }


  private doLoginUser(email: string, token: string) {
    this.loggedUser = email;
    localStorage.clear()
    this.storeJwtToken(token);
    localStorage.setItem("USERNAME",email);
  }


  // check if the users is login
  isLoggedIn() {
    return !!this.getJwtToken();
  }

// log out the user while he logout
  private doLogoutUser() {

    this.loggedUser = '';
    this.removeTokens();
    localStorage.clear()
  }

  // get the token from localStorage
  getJwtToken() : string  {
    return localStorage.getItem(this.JWT_TOKEN) || '';
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
