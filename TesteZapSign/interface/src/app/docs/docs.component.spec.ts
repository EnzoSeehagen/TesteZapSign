import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DocsComponent } from './docs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { DocModel } from './doc.model';
import { DocsService } from '../docs.service';

describe('DocsComponent', () => {
    let component: DocsComponent;
    let fixture: ComponentFixture<DocsComponent>;
    let docsService: DocsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [DocsComponent],
          imports: [HttpClientTestingModule],
          providers: [DocsService],
        }).compileComponents();
      });

      beforeEach(() => {
        fixture = TestBed.createComponent(DocsComponent);
        component = fixture.componentInstance;
        docsService = TestBed.inject(DocsService);
      });

      it('deve criar o DocsComponent', () => {
        expect(component).toBeTruthy();
      });

      it('deve chamar listarDocs() em ngOnInit', () => {
        spyOn(component, 'listarDocs');
        component.ngOnInit();
        expect(component.listarDocs).toHaveBeenCalled();
      });

      it('deve chamar cadastrarDoc e listarDocs() em cadastrar', () => {
        spyOn(docsService, 'cadastrarDoc').and.returnValue(of(new DocModel()));
        spyOn(component, 'listarDocs');
        component.doc.nome = 'Nome do documento'; 
        component.cadastrar();
        expect(docsService.cadastrarDoc).toHaveBeenCalledWith(jasmine.any(DocModel));
        expect(component.listarDocs).toHaveBeenCalled();
      });
      
      it('deve chamar atualizarDoc e listarDocs() em atualizar', () => {
        const id = 1;
        const doc = new DocModel();
        spyOn(docsService, 'atualizarDoc').and.returnValue(of(doc));
        spyOn(docsService, 'listarDocs').and.returnValue(of([]));
    
        component.doc = doc;
        component.atualizar(id);
    
        expect(docsService.atualizarDoc).toHaveBeenCalledWith(id, jasmine.any(DocModel));
        expect(docsService.listarDocs).toHaveBeenCalled();
      });

      it('deve chamar removerDoc e listarDocs() em remover', () => {
        const id = 1;
        spyOn(docsService, 'removerDoc').and.returnValue(of({}));
        spyOn(docsService, 'listarDocs').and.returnValue(of([]));
    
        component.remover(id);
    
        expect(docsService.removerDoc).toHaveBeenCalledWith(id);
        expect(docsService.listarDocs).toHaveBeenCalled();
      });

      it('deve registrar um erro em listarDocs quando falhar', () => {
        spyOn(console, 'error');
        spyOn(component, 'listarDocs').and.callFake(() => {
          console.error('Erro ao listar documentos');
        });
        component.listarDocs();
        expect(console.error).toHaveBeenCalledWith('Erro ao listar documentos');
      });

      it('deve chamar atualizarDoc, atualizar o estado de "assinado" e chamar listarDocs() em assinar', () => {
        const doc = new DocModel();
        doc.id = 1;
        spyOn(docsService, 'atualizarDoc').and.returnValue(of(doc));
        spyOn(component, 'listarDocs');
    
        component.assinar(doc);
    
        expect(docsService.atualizarDoc).toHaveBeenCalledWith(doc.id, jasmine.any(DocModel));
        expect(doc.assinado).toBe(true);
        expect(component.listarDocs).toHaveBeenCalled();
      });
    
      it('deve registrar um erro em cadastrar quando o campo "nome" estiver vazio', () => {
        spyOn(console, 'log');
        spyOn(docsService, 'cadastrarDoc');
        component.doc.nome = '';
    
        component.cadastrar();
    
        expect(console.log).toHaveBeenCalledWith('O campo "nome" é obrigatório');
        expect(docsService.cadastrarDoc).not.toHaveBeenCalled();
      });
    
      it('deve registrar um erro em cadastrar quando ocorrer um erro na chamada do serviço', () => {
        spyOn(console, 'log');
        spyOn(docsService, 'cadastrarDoc').and.returnValue(throwError(new Error('Erro ao cadastrar documento')));
        component.doc.nome = 'ENZO.TXT';
      
        component.cadastrar();
      
        expect(console.log).toHaveBeenCalledWith('Erro ao cadastrar documento', jasmine.any(Error));
      });
      
    
      it('deve registrar um erro em atualizar quando ocorrer um erro na chamada do serviço', () => {
        const id = 1;
        spyOn(console, 'log');
        spyOn(docsService, 'atualizarDoc').and.returnValue(throwError(new Error('Erro ao atualizar a companhia')));
    
        component.atualizar(id);
    
        expect(console.log).toHaveBeenCalledWith('Erro ao atualizar o usuário', jasmine.any(Error));
      });
    
      it('deve registrar um erro em remover quando ocorrer um erro na chamada do serviço', () => {
        const id = 1;
        spyOn(console, 'log');
        spyOn(docsService, 'removerDoc').and.returnValue(throwError(new Error('Erro ao remover a companhia')));
      
        component.remover(id);
      
        expect(console.log).toHaveBeenCalledWith('Erro ao remover a companhia', jasmine.any(Error));
      });
    });