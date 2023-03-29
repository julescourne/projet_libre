import { Component, Injector, Input } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {AcceuilComponent} from "../acceuil/acceuil.component";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  @Input() parent: any;

  signinForm: FormGroup;

  nom!: string;

  prenom!: string;

  genre!: string;

  email!: string;

  password!: string;

  hide = true;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private injector: Injector) {
    this.signinForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      genre: ['Homme', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.parent = this.getParent()
  }

  getParent() {
    return this.injector.get<any>(AcceuilComponent);
  }

  onSubmit() {
    if (this.signinForm.valid) {
        this.email = this.signinForm.get('email')?.value,
        this.password = this.signinForm.get('password')?.value,
        this.prenom = this.signinForm.get('prenom')?.value,
        this.nom = this.signinForm.get('nom')?.value,
        this.genre = this.signinForm.get('genre')?.value,
        this.authService.signin({
          nom: this.nom,
          prenom: this.prenom,
          genre: this.genre,
          email: this.email,
          password: this.password
        }).subscribe(result => {
          if (result === true) {
            this.parent.toggleLogin()
            this.router.navigateByUrl('/acceuil')
            // this.router.navigateByUrl('/acceuil')
          }
        })
    }
  }
}

