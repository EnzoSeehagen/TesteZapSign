export class UserModel {
    email: string = '';
    senha: string = ''; // Anteriormente era 'password'
    data_ultima_redefinicao_senha: string = '';
    email_verificado: boolean = false;
    data_criacao: string = '';
    data_atualizacao: string = '';
    companhias_associadas: any[] = [];
    companhia_original: string = '';
    documentos_associados: any[] = [];
  }
  
  