import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocModel } from './docs/doc.model';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private http: HttpClient) { }

  listarDocs() : Observable<any>{
    return this.http.get("http://localhost:8000/doc/")
  }

  cadastrarDoc(doc: DocModel) : Observable<any> {
    return this.http.post("http://localhost:8000/doc/", doc);
  }

  atualizarDoc(id: any, doc: DocModel) : Observable<any> {
    return this.http.put("http://localhost:8000/doc/".concat(id) + "/", doc);
  }
  

  removerDoc(id: any){
    return this.http.delete("http://localhost:8000/doc/".concat(id));
  }

}
