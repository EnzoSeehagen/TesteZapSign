import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DocsComponent } from './docs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
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
        component.doc.nome = 'ENZO.TXT'; 
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
      
      
      
      
      
      
      
    });