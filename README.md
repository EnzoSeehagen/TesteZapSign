Para utilização da aplicação, siga estes passos:

Passo 1 - Ative a venv


   No terminal da IDE, utilize o comano   source venv/bin/activate    para ativar a venv ;



Passo 2 - Inicie o servidor local do Django


   Com o ambiente virtual ativo, agora você precisará subir o servidor local do Django. Para isto, digite no terminal da IDE o seguinte comando:  ' python manage.py runserver'  ( sem aspas ) - E aguarde a finalização. Após isso, o servidor ficará ativo na porta 8000;


Passo 2 - Inicie o servidor local do Angular


   Abra um novo terminal na IDE, e navegue até o diretório 'TesteZapSign/interface', com o diretório da aplicação Angular aberto, digite o seguinte comando no terminal :  ' ng serve '  E aguarde a finalização. Após isso, o servidor ficará ativo na porta 4200;


Faça os testes!


   Abra um novo terminal na IDE, e navegue até o diretório 'TesteZapSign/interface', com o diretório da aplicação Angular aberto, digite o seguinte comando no terminal :  ' ng test ' E aguarde a finalização. Após isso, será mostrado no termianl os testes executados;

   Abra um novo terminal na IDE, e navegue até o diretório 'TesteZapSign', com o diretório aberto, digite o seguinte comando no terminal :  ' pytest '  E aguarde a finalização. Após isso, será mostrado no termianl os testes executados.

  
  Testes E2E


    Para a criação dos testes E2E foi escolhido a utilização do Selenium IDE. Todos os arquivos de configuração para testes automatizados estão em formato JSON e podem ser encontrados dentro das pastas 'test_E2E', localizadas nas pastas 'users', 'docs' e 'companies'. Lá estarão disponíveis os arquivos '.side', contendo uma estrutura de dados com informações sobre os testes a serem executados, incluindo seus nomes, comandos e comentários relacionados.