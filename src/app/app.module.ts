import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServeurComponent} from "./serveur/serveur.component";
import {HomeComponent} from './login/home.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import { SigninComponent } from './signin/signin.component';
import {TokenInterceptor} from './class/interceptor';
import {AuthService} from './services/AuthService/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ServeurComponent,
    SigninComponent,
    HomeComponent,
    TokenInterceptor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
