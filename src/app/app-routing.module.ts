import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServeurComponent} from "./serveur/serveur.component";
import {HomeComponent} from "./login/home.component";
import {SigninComponent} from "./signin/signin.component"

const routes: Routes = [
  {path: '',   redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'serveur', component: ServeurComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
