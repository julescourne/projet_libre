import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup;
  username! : string ; 
  password! : string ; 

  constructor(private router: Router ,private authService : AuthService , private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required],
        rememberMe: [false]
      });
    }

  onSubmit() {
      if (this.loginForm.valid) {
        this.username = this.loginForm.get('email')?.value, 
        this.password = this.loginForm.get('password')?.value,
        this.authService.login({username: this.username ,password:this.password}).subscribe(result => {
          if (result === true )
          {
            
          }
        })
      }
    
      
  }
}


