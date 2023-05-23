import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocModel } from './docs/doc.model';

@Injectable({
  providedIn: 'root'
})
export class DocsService {
  constructor(private http: HttpClient) { }

  listarDocs(): Observable<DocModel[]> {
    return this.http.get<DocModel[]>("http://localhost:8000/doc/");
  }

  cadastrarDoc(doc: DocModel): Observable<DocModel> {
    return this.http.post<DocModel>("http://localhost:8000/doc/", doc);
  }

  atualizarDoc(id: any, doc: DocModel): Observable<DocModel> {
    return this.http.put<DocModel>("http://localhost:8000/doc/" + id + "/", doc);
  }

  removerDoc(id: any): Observable<any> {
    return this.http.delete("http://localhost:8000/doc/" + id);
  }
}
