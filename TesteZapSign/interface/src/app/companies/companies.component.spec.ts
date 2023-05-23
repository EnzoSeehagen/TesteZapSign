import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CompaniesComponent } from './companies.component';
import { CompaniesService } from '../companies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CompanyModel } from './company.model';

describe('CompaniesComponent', () => {
    let component: CompaniesComponent;
    let fixture: ComponentFixture<CompaniesComponent>;
    let companiesService: CompaniesService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [CompaniesComponent],
          imports: [HttpClientTestingModule],
          providers: [CompaniesService]
        }).compileComponents();
      });

    beforeEach(() => {
        fixture = TestBed.createComponent(CompaniesComponent);
        component = fixture.componentInstance;
        companiesService = TestBed.inject(CompaniesService);
    });

    it('deve criar o CompaniesComponent', () => {
        expect(component).toBeTruthy();
      });


    it('deve chamar listarCompanies() em ngOnInit', () => {
    spyOn(component, 'listarCompanhias');
    component.ngOnInit();
    expect(component.listarCompanhias).toHaveBeenCalled();
  });  

  it('deve chamar cadastrarCompany e listarCompanhias() em cadastrar', () => {
    const company = new CompanyModel();
    spyOn(companiesService, 'cadastrarCompany').and.returnValue(of(company));
    spyOn(companiesService, 'listarCompanhias').and.returnValue(of([]));

    component.company = company;
    component.cadastrar();

    expect(companiesService.cadastrarCompany).toHaveBeenCalledWith(jasmine.any(CompanyModel));
    expect(companiesService.listarCompanhias).toHaveBeenCalled();
  });

  it('deve chamar atualizarCompany e listarCompanhias() em atualizar', () => {
    const id = 1;
    const company = new CompanyModel();
    spyOn(companiesService, 'atualizarCompany').and.returnValue(of(company));
    spyOn(companiesService, 'listarCompanhias').and.returnValue(of([]));

    component.company = company;
    component.atualizar(id);

    expect(companiesService.atualizarCompany).toHaveBeenCalledWith(id, jasmine.any(CompanyModel));
    expect(companiesService.listarCompanhias).toHaveBeenCalled();
  });

  it('deve chamar removerCompany e listarCompanhias() em remover', () => {
    const id = 1;
    spyOn(companiesService, 'removerCompany').and.returnValue(of({}));
    spyOn(companiesService, 'listarCompanhias').and.returnValue(of([]));

    component.remover(id);

    expect(companiesService.removerCompany).toHaveBeenCalledWith(id);
    expect(companiesService.listarCompanhias).toHaveBeenCalled();
  });

  it('deve registrar um erro em listarCompanhias quando falhar', () => {
    spyOn(companiesService, 'listarCompanhias').and.returnValue(throwError('Erro ao listar as companhias'));
    spyOn(console, 'log');
    component.listarCompanhias();
    expect(console.log).toHaveBeenCalledWith('Erro ao listar as companhias');
  });
  
});



  
    