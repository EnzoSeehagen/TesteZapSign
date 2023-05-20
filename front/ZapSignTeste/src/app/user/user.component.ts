import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  user: Array<any> = new Array();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.listarUser();
  }

  listarUser() {
    this.userService.listarUser().subscribe(user => {
      this.user = user;
    }, err =>{
      console.log("Erro ao listar os usuários");
    }
    )
  }
}
