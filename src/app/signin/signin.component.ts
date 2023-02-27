import { Component} from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SigninService } from '../../services/signin/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent{

  signinForm: FormGroup;

  constructor(private router: Router, private signinService: SigninService, private formBuilder: FormBuilder ) {
   this.signinForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['male'],
      age: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.signinService.submitForm(this.signinForm).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
          // Handle the error
        }
      );
    }
  }
}
