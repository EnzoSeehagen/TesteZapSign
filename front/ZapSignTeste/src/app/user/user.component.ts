import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarios: UserModel[] = [];

  user: UserModel = new UserModel();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listarUser();
  }

  cadastrar() {
    console.log(this.user);
  }

  listarUser() {
    this.userService.listarUser().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => {
      console.log("Erro ao listar os usuários");
    });
  }
}
