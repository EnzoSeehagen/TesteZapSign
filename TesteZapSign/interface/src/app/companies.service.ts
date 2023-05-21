import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyModel } from './companies/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  listarCompanhias() : Observable<any> {
    return this.http.get("http://localhost:8000/company/");
  }


  cadastrarCompany(company: CompanyModel) : Observable<any> {
    return this.http.post("http://localhost:8000/company/", company);
  }

  atualizarCompany(id: any, company: CompanyModel) : Observable<any> {
    return this.http.put("http://localhost:8000/company/".concat(id) + "/", company);
  }

  removerCompany(id: any){
    return this.http.delete("http://localhost:8000/company/".concat(id));
  }
}
