import {Component, Injector, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import {AcceuilComponent} from "../acceuil/acceuil.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  @Input() parent: any;

  loginForm: FormGroup;

  email! : string ;
  password! : string ;

  hide = true;

  constructor(private router: Router ,private authService : AuthService , private formBuilder: FormBuilder, private injector: Injector) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required],
      });
      this.parent = this.getParent();
  }

  getParent() {
    return this.injector.get<any>(AcceuilComponent);
  }

  onSubmit() {
      if (this.loginForm.valid) {
        this.email = this.loginForm.get('email')?.value,
        this.password = this.loginForm.get('password')?.value,
        this.authService.login({email: this.email ,password:this.password}).subscribe(result => {
          if (result === true )
          {
            this.parent.toggleContent()
            this.router.navigateByUrl('/acceuil')
          }
        })
      }


  }
}


