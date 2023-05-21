import { Component } from '@angular/core';
import { DocsService } from '../docs.service';
import { DocModel } from './doc.model';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent {

  doc: DocModel = new DocModel();
  docs: Array<any> = new Array();
  
  constructor(private docsService: DocsService) {}

  ngOnInit() {
    this.listarDocs();
  }

  listarDocs(){
    this.docsService.listarDocs().subscribe(docs => {
      this.docs = docs;
  }, err => {
    console.log("Erro ao listar documentos", err)
    })
  }


  cadastrar() {
    if (this.doc.nome) {
      this.docsService.cadastrarDoc(this.doc).subscribe(doc => {
        this.doc = new DocModel();
        this.listarDocs();
      }, err => {
        console.log('Erro ao cadastrar documento', err);
      });
    } else {
      console.log('O campo "nome" é obrigatório');
      
    }
  }

  atualizar(id: number){
    
    this.docsService.atualizarDoc(id, this.doc).subscribe(doc => {
      this.doc = new DocModel();
      this.listarDocs();
    }, err => {
      console.log('Erro ao atualizar o usuário', err)

    })
  } 

  remover(id: number){
    this.docsService.removerDoc(id).subscribe(doc => {
      this.doc = new DocModel();
      this.listarDocs();
    }, err => {
      console.log('Erro ao remover a companhia', err)

    })
  }

  assinar(doc: DocModel) {
    doc.assinado = true;
    this.docsService.atualizarDoc(doc.id, doc).subscribe(updatedDoc => {
      console.log('Documento assinado com sucesso', updatedDoc);
      this.listarDocs();
    }, err => {
      console.log('Erro ao assinar o documento', err);
    });
  }
}



