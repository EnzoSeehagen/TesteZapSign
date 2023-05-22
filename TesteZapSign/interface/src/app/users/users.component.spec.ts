import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UsersService } from '../users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { UserModel } from './user.model';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersService: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
  });

  it('deve criar o UsersComponent', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar listarUsuarios() em ngOnInit', () => {
    spyOn(component, 'listarUsuarios');
    component.ngOnInit();
    expect(component.listarUsuarios).toHaveBeenCalled();
  });

  it('deve chamar cadastrarUser e listarUsuarios() em cadastrar', () => {
    const user = new UserModel();
    spyOn(usersService, 'cadastrarUser').and.returnValue(of(user));
    spyOn(usersService, 'listarUsuarios').and.returnValue(of([]));

    component.user = user;
    component.cadastrar();

    expect(usersService.cadastrarUser).toHaveBeenCalledWith(jasmine.any(UserModel));
    expect(usersService.listarUsuarios).toHaveBeenCalled();
  });

  it('deve chamar atualizarUser e listarUsuarios() em atualizar', () => {
    const id = 1;
    const user = new UserModel();
    spyOn(usersService, 'atualizarUser').and.returnValue(of(user));
    spyOn(usersService, 'listarUsuarios').and.returnValue(of([]));

    component.user = user;
    component.atualizar(id);

    expect(usersService.atualizarUser).toHaveBeenCalledWith(id, jasmine.any(UserModel));
    expect(usersService.listarUsuarios).toHaveBeenCalled();
  });

  it('deve chamar removerUser e listarUsuarios() em remover', () => {
    const id = 1;
    spyOn(usersService, 'removerUser').and.returnValue(of({}));
    spyOn(usersService, 'listarUsuarios').and.returnValue(of([]));

    component.remover(id);

    expect(usersService.removerUser).toHaveBeenCalledWith(id);
    expect(usersService.listarUsuarios).toHaveBeenCalled();
  });

  it('deve definir o array de usuários em listarUsuarios quando for bem-sucedido', () => {
    const users = [{ id: 1, name: 'Enzo' }, { id: 2, name: 'Seehagen' }];
    spyOn(usersService, 'listarUsuarios').and.returnValue(of(users));
    component.listarUsuarios();
    expect(component.users).toEqual(users);
  });

  it('deve registrar um erro em listarUsuarios quando falhar', () => {
    spyOn(usersService, 'listarUsuarios').and.returnValue(throwError('Error'));
    spyOn(console, 'log');
    component.listarUsuarios();
    expect(console.log).toHaveBeenCalledWith('Erro ao listar os usuários');
  });
});
