import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  //Decorador con la palabra Injectable
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<User> {
    return this.http.get<User>('././assets/data.json'); //Aca va la url para traer los datos
  }
}