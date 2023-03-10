import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup;

  constructor(private router: Router , private loginService: LoginService, private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required],
        rememberMe: [false]
      });
    }

  onSubmit() {
      if (this.loginForm.valid) {
        this.loginService.submitForm(this.loginForm).subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/home']);
          },
          error => {
            console.log(error);
            // Handle the error
          }
        );
      }
  }
}


