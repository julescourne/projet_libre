import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServerComponent } from './components/server/server.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
  {path: '',   redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent , children :[
    {
      path: 'virtual-machines',
      component : ServerComponent
    }
  ]}
  //{path: 'home', component: HomeComponent , canActivate : [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
