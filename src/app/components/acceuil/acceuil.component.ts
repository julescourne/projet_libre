import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  animations: [
    trigger('slideVertical', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(600, keyframes([
          style({ transform: 'translateY(100%)', offset: 0 }),
          style({ transform: 'translateY(0)', offset: 0.8 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ]),
    // trigger('slideHorizontal', [
    //   state('in', style({ transform: 'translateX(0)' })),
    //   transition('void => *', [
    //     style({ transform: 'translateX(100%)' }),
    //     animate(500, keyframes([
    //       style({ transform: 'translateX(100%)', offset: 0 }),
    //       style({ transform: 'translateX(0)', offset: 0.8 }),
    //       style({ transform: 'translateX(0)', offset: 1 })
    //     ]))
    //   ])
    // ])
  ]
})
export class AcceuilComponent implements OnInit {

  showContent: boolean = true;

  showNewContent: boolean = false;

  showLogin: boolean = false;

  showSignin: boolean = false;

  showServeur: boolean = false;

  showNavVm: boolean = false;

  showNavSql: boolean = false;

  showNavStorage: boolean = false;

  showNavCosmos: boolean = false;

  showServerModal: boolean = false;

  showVm: boolean = false;

  constructor(private router: Router, public cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.toggleContent()
  }

  toggleInNavSQL() {
    this.showNavSql = true;
  }

  toggleOutNavSQL() {
    this.showNavSql = false;
  }

  toggleInNavStorage() {
    this.showNavStorage = true;
  }

  toggleOutNavStorage() {
    this.showNavStorage = false;
  }

  toggleInNavCosmos() {
    this.showNavCosmos = true;
  }

  toggleOutNavCosmos() {
    this.showNavCosmos = false;
  }

  toggleInNavVM() {
    this.showNavVm = true;
  }

  toggleOutNavVM() {
    this.showNavVm = false;
  }

  toggleServerModal(){
    this.showContent = false;
    this.showNewContent = false;
    this.showLogin = false;
    this.showSignin = false;
    this.showServeur = true;
    this.showServerModal = true;
    this.showVm = false;
    this.cookieService.delete('showVm')
    this.cookieService.delete('showContent'); // ajouter la variable dans un cookie
    this.cookieService.delete('showNewContent'); // supprimer les autres variables des cookies
    this.cookieService.delete('showLogin');
    this.cookieService.delete('showSignin');
    this.cookieService.set('showServeur', 'true');
    this.cookieService.set('showServerModal', 'true');
  }

  toggleContent() {
    this.showContent = true;
    this.showNewContent = false;
    this.showLogin = false;
    this.showSignin = false;
    this.showServeur = false;
    this.showVm = false;
    this.cookieService.delete('showVm')
    this.cookieService.set('showContent', 'true'); // ajouter la variable dans un cookie
    this.cookieService.delete('showNewContent'); // supprimer les autres variables des cookies
    this.cookieService.delete('showLogin');
    this.cookieService.delete('showSignin');
    this.cookieService.delete('showServeur');
    this.showServerModal = false;
    this.cookieService.delete('showServerModal');
  }

  toggleNewContent() {
    this.showContent = false;
    this.showNewContent = true;
    this.showLogin = false;
    this.showSignin = false;
    this.showVm = false;
    this.cookieService.delete('showVm')
    this.cookieService.set('showNewContent', 'true');
    this.cookieService.delete('showContent');
    this.cookieService.delete('showLogin');
    this.cookieService.delete('showSignin');
    this.showServeur = false;
    this.cookieService.delete('showServeur');
    this.showServerModal = false;
    this.cookieService.delete('showServerModal');
  }

  toggleLogin(){
    this.showContent = false;
    this.showNewContent = false;
    this.showLogin = true;
    this.showSignin = false;
    this.showVm = false;
    this.cookieService.delete('showVm')
    this.cookieService.set('showLogin', 'true');
    this.cookieService.delete('showContent');
    this.cookieService.delete('showNewContent');
    this.cookieService.delete('showSignin');
    this.showServeur = false;
    this.cookieService.delete('showServeur');
    this.showServerModal = false;
    this.cookieService.delete('showServerModal');
  }

  toggleSignin(){
    console.log(this.showContent, this.showNewContent, this.showLogin, this.showSignin);
    this.showContent = false;
    this.showNewContent = false;
    this.showLogin = false;
    this.showSignin = true;
    this.showVm = false;
    this.cookieService.delete('showVm')
    this.cookieService.set('showSignin', 'true');
    this.cookieService.delete('showContent');
    this.cookieService.delete('showNewContent');
    this.cookieService.delete('showLogin');
    this.showServeur = false;
    this.cookieService.delete('showServeur');
    this.showServerModal = false;
    this.cookieService.delete('showServerModal');
  }

  toggleServeur(){
    console.log(this.showContent, this.showNewContent, this.showLogin, this.showSignin);
    this.showContent = false;
    this.showNewContent = false;
    this.showLogin = false;
    this.showSignin = false;
    this.showVm = false;
    this.cookieService.delete('showVm')
    this.cookieService.delete('showSignin');
    this.cookieService.delete('showContent');
    this.cookieService.delete('showNewContent');
    this.cookieService.delete('showLogin');
    this.showServeur = true;
    this.cookieService.set('showServeur', 'true');
    this.showServerModal = false;
    this.cookieService.delete('showServerModal');
  }

  toggleDisplayVM(){
    this.showContent = false;
    this.showNewContent = false;
    this.showLogin = false;
    this.showSignin = false;
    this.showVm = true;
    this.cookieService.set('showVm', 'true');
    this.cookieService.delete('showSignin');
    this.cookieService.delete('showContent');
    this.cookieService.delete('showNewContent');
    this.cookieService.delete('showLogin');
    this.showServeur = true;
    this.cookieService.set('showServeur', 'true');
    this.showServerModal = false;
    this.cookieService.delete('showServerModal');
  }
}
