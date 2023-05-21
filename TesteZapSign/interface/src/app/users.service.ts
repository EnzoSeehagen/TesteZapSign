import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htttp: HttpClient) { }

  cadastrarUser(user: UserModel) : Observable<any> {
    return this.htttp.post("http://localhost:8000/user/", user);
  }

  atualizarUser(id: any, user: UserModel) : Observable<any> {
    return this.htttp.put("http://localhost:8000/user/".concat(id) + "/", user);
  }
  

  removerUser(id: any){
    return this.htttp.delete("http://localhost:8000/user/".concat(id));
  }

  listarUsuarios() : Observable<any> {
    return this.htttp.get("http://localhost:8000/user/");
  }
}
