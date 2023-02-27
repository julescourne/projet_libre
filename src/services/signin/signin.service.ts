import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class SigninService {
  private baseUrl = 'localhost:4200';

  constructor(private http: HttpClient) { }

  submitForm(form: FormGroup): Observable<any> {
    const formData = {
      first_name: form.get('first_name')?.value,
      last_name: form.get('last_name')?.value,
      gender: form.get('gender')?.value,
      age: form.get('age')?.value,
      email: form.get('email')?.value,
      password: form.get('password')?.value
    };

    return this.http.post<any>(this.baseUrl + '/signin', formData);
  }
}
