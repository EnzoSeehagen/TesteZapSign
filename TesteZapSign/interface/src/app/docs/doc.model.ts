export class DocModel {
  id: any;
  nome: string = '';
  data_criacao: Date = new Date();
  data_limite_assinatura: Date = new Date();
  assinado: boolean = false;
}
