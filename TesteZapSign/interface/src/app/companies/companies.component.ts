import { Component } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { CompanyModel } from './company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {

  company: CompanyModel = new CompanyModel();
  companies: Array<any> = new Array();

  constructor(private companiesService : CompaniesService) { }

  ngOnInit() {
    this.listarCompanhias();
  }

  listarCompanhias() {
    this.companiesService.listarCompanhias().subscribe(
      companies => {
        this.companies = companies;
      }, err => {
        console.log('Erro ao listar os usuários', err);
      }
    );
  }

  cadastrar(){
    console.log(this.company)
    this.companiesService.cadastrarCompany(this.company).subscribe(company => {
      this.company = new CompanyModel();
      this.listarCompanhias();
    }, err => {
      console.log('Erro ao cadastrar companhia', err)

    })
  }

  atualizar(id: number){
    
    this.companiesService.atualizarCompany(id, this.company).subscribe(company => {
      this.company = new CompanyModel();
      this.listarCompanhias();
    }, err => {
      console.log('Erro ao atualizar o usuário', err)

    })
  } 

  remover(id: number){
    this.companiesService.removerCompany(id).subscribe(company => {
      this.company = new CompanyModel();
      this.listarCompanhias();
    }, err => {
      console.log('Erro ao remover a companhia', err)

    })
  }

}
