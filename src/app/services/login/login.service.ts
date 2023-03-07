import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'localhost:4200';
  private userSession: any;

  constructor(private http: HttpClient) { }

  submitForm(form: FormGroup): Observable<any> {
      const formData = {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
        rememberMe: form.get('rememberMe')?.value
      };

      return this.http.post<any>(this.baseUrl + '/login', formData);
    }
}
