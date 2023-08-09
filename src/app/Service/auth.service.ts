import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api  ='http://127.0.0.1:8000/api/'

  constructor(private readonly http:HttpClient) {}
 //metodos consumo de api
 Login(body: any): Observable<any> {
  return this.http.post<any>(`${this.api}login`, body);
  }
  Register(body: any): Observable<any> {
    return this.http.post<any>(`${this.api}register`, body);
    }

userInformation(): Observable<any> {
  return this.http.get<any>(this.api + 'user-profile');
}
logout() {
  return this.http.post(this.api + 'logout', {});
}

//metodos para los tokens
setUser(id:any) {
  localStorage.setItem('user_id', id);
}
getUser() {
  return localStorage.getItem('user_id');
}
deleteUser() {
  localStorage.removeItem('user_id');
}

getToken() {
  return localStorage.getItem('token');
}
setToken(token: string) {
  localStorage.setItem('token', token);
}
loggedIn(): boolean {
  if (this.isTokenValid()) return true;
  return false;
}
private isTokenValid(): boolean {

  const token = localStorage.getItem('token');
  if(!token) return false;
  return true;
}

deleteToken() {
  return localStorage.removeItem('token');
}
}
