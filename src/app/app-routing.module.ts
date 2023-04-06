import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServerComponent } from './components/server/server.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './services/auth.guard';
import {AcceuilComponent} from "./components/acceuil/acceuil.component";



const routes: Routes = [
  {path: '',   redirectTo: 'acceuil', pathMatch: 'full'},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent ,children :[
    {
      path: 'virtual-machines',
      component : ServerComponent
    }
    
  ] , canActivate: [AuthGuard]}
  //{path: 'home', component: HomeComponent , canActivate : [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
