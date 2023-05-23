import { Component, Injectable } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

  user: UserModel = new UserModel();
  users: Array<any> = new Array();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  atualizar(id: number){
    this.usersService.atualizarUser(id, this.user).subscribe(user => {
      this.user = new UserModel(); 
      this.listarUsuarios();
    }, err => {
      console.log('Erro ao atualizar o usuário', err)
    })
  } 
  
  remover(id: number){
    this.usersService.removerUser(id).subscribe(user => {
      this.user = new UserModel(); 
      this.listarUsuarios();
    }, err => {
      console.log('Erro ao remover o usuário', err)
    })
  }
  
  cadastrar(){
    console.log(this.user)
    this.usersService.cadastrarUser(this.user).subscribe(user => {
      this.user = new UserModel(); 
      this.listarUsuarios();
    }, err => {
      console.log('Erro ao cadastrar usuário', err)
    })
  }
  

  listarUsuarios() {
    this.usersService.listarUsuarios().subscribe(
      users => {
      this.users = users;
      },
      err => {
        console.log('Erro ao listar os usuários');
      }
    );
  }
  
}
