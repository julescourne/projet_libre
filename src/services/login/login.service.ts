import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/authenticate/token';

  constructor(private http: HttpClient) { }

  submitForm(form: FormGroup): Observable<any> {
      const formData = {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
        rememberMe: form.get('rememberMe')?.value
      };
      const headers = new HttpHeaders({Autorisation : 'Basic ' + btoa(formData.email + ":" + formData.password)});
      return this.http.post<any>(this.baseUrl, formData ,{headers});
    }
}
