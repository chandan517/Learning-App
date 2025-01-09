import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // private apiUrl = 'http://localhost:3000/users';

  // constructor(private http: HttpClient) {}

 
  // createUser(user: any): Observable<any> {
  //   return this.http.post(this.apiUrl, user);
  // }


  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  
  // updateUser(id: string, user: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, user);
  // }

 
  // deleteUser(id: string): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
