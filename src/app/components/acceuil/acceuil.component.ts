import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(200, keyframes([
          style({ transform: 'translateY(100%)', offset: 0 }),
          style({ transform: 'translateY(0)', offset: 0.8 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class AcceuilComponent implements OnInit {

  showContent: boolean = true;

  showNewContent: boolean = false;

  showLogin: boolean = false;

  showSignin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.showContent = true;
    this.showNewContent = false;
    this.showLogin = false;
    this.showSignin = false;
  }

  toggleNewContent() {
    this.showContent = false;
    this.showNewContent = true;
    this.showLogin = false;
    this.showSignin = false;
  }

  toggleLogin(){
    this.showContent = false;
    this.showNewContent = false;
    this.showLogin = true;
    this.showSignin = false;
  }

  toggleSignin(){
    console.log(this.showContent, this.showNewContent, this.showLogin, this.showSignin);
    this.showContent = false;
    this.showNewContent = false;
    this.showLogin = false;
    this.showSignin = true;
  }

  redirectHome(){
    this.router.navigateByUrl("/home")
  }
}
