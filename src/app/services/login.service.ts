import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token),
        sessionStorage.setItem("auth-user", value.name)
      }
    ))
  }

  signup(name: string, email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token),
        sessionStorage.setItem("auth-user", value.name)
      }
    ))
  }

  logoff() {

    if(sessionStorage["auth-token"] != null) {
      sessionStorage.removeItem("auth-token")
      sessionStorage.removeItem("auth-user")
    }

    this.router.navigate(["login"])
  }
}
