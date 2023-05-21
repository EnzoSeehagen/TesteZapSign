import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  cadastrarUser(user: UserModel) : Observable<any> {
    return this.http.post("http://localhost:8000/user/", user);
  }

  atualizarUser(id: any, user: UserModel) : Observable<any> {
    return this.http.put("http://localhost:8000/user/".concat(id) + "/", user);
  }
  

  removerUser(id: any){
    return this.http.delete("http://localhost:8000/user/".concat(id));
  }

  listarUsuarios() : Observable<any> {
    return this.http.get("http://localhost:8000/user/");
  }
}
