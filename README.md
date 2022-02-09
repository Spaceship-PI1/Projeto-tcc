<h1 align="center">Dory 🐟</h1>

<div align="center">
  <a href="*"><img title="Dory" src="cover.svg" /></a>
</div>

## :computer: Projeto
Dory é uma aplicação web que tem como objetivo ajudar os alunos de Sistemas e Mídias Digitais da UFC a encontrarem um professor orientador para seu TCC.


## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Token](https://jwt.io/introduction)
- [Nodemailer](https://nodemailer.com/about/)

## :pushpin: Requisitos

<table>
  <tr>
    <td>
      <strong>Código/Funcionalidade</strong>
    </td>
    <td>
      <strong>Descrição</strong>
    </td>
    <td>
      <strong>Codificação</strong>
    </td>
  </tr>
  <tr>
    <td>RF G001 / Cadastrar</td>
    <td>
      O aluno/professor precisa se cadastrar e inserir informações como nome,
      sobrenome, e-mail, senha e tipo de perfil para ter acesso a aplicação.
    </td>
    <td>Diretório: src/app/controllers/authController.js. Linha: 18 até 55.</td>
  </tr>
  <tr>
    <td>RF G002 / Autenticar (login)</td>
    <td>
      O aluno/professor precisa colocar o e-mail e a senha que foram cadastrados
      para acessar a aplicação.
    </td>
    <td>Diretório: src/app/controllers/authController.js. Linha: 58 até 87</td>
  </tr>
  <tr>
    <td>RF G003 / Esquecer senha</td>
    <td>
      O aluno/professor precisa informar o seu e-mail para ser enviado um token
      de recuperação de senha.
    </td>
    <td>Diretório: src/app/controllers/authController.js. Linha: 89 até 160</td>
  </tr>
  <tr>
    <td>RF G004 /Resetar senha</td>
    <td>
      O aluno/professor precisa pegar o token de resetar a senha e informar o
      seu email, o token recebido, a nova senha e a confirmação da nova senha no
      respectivo formulário dentro da aplicação.
    </td>
    <td>
      Diretório: src/app/controllers/authController.js. Linha: 162 até 211
    </td>
  </tr>
  <!--
  <tr>
    <td>RF G005 / Sair da aplicação</td>
    <td>
      O aluno/professor pode clicar no botão de sair para realizar o logout da
      aplicação
    </td>
    <td>Sem diretório</td>
  </tr>
  <tr>
    <td>RF G006 / Pesquisar professores</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF G007 / Pesquisar Área de pesquisa</td>
    <td></td>
    <td></td>
  </tr>
-->
  <tr>
    <td>RF G008 / Filtrar por Área de Pesquisa</td>
    <td></td>
    <td></td>
  </tr>
 <!--
  <tr>
    <td>RF G009 / Filtrar Professores por Disponibilidade</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF G010 / Filtrar Professores por Preferência de Modalidade</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF G011 / Filtrar TCC por Modalidade</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF G012 / Filtrar TCC por Semestre</td>
    <td></td>
    <td></td>
  </tr>
 -->
 <tr>
    <td>RF G013 / Visualizar Lista de Professores</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF G014 / Visualizar Lista de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <!--
  <tr>
    <td>RF G015 / Visualizar Lista de Solicitações de Orientação</td>
    <td></td>
    <td></td>
  </tr>
  -->
  <tr>
    <td>RF G016 / Visualizar Meu Perfil</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF G017 / Visualizar Perfil do Professor</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF G018 / Visualizar um TCC</td>
    <td></td>
    <td></td>
  </tr>
<!--
  <tr>
    <td>RF A001 / Cadastrar foto de perfil</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF A002 / Cadastrar descrição “Sobre você”</td>
    <td>O aluno precisa informar uma breve descrição sobre ele</td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 5 até 31.</td>
  </tr>
-->
  <tr>
    <td>RF A003 / Cadastrar interesses em pesquisa</td>
    <td>
      O aluno precisa informar quais áreas ele tem interesse, por exemplo,
      ilustração, animação, etc
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 5 até 31.</td>
  </tr>
  <tr>
    <td>RF A004 / Cadastrar tema do TCC</td>
    <td>
      O aluno pode cadastrar o tema do TCC dele, caso ele já tenha definido, ou
      ele pode cadastrar uma lista de possíveis temas, ou simplesmente não
      informar seu tema
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 5 até 31.</td>
  </tr>
  <tr>
    <td>RF A005 / Cadastrar modalidade do TCC</td>
    <td>
      O aluno precisa escolher uma das 3 modalidades de TCC: artigo científico,
      monografia ou relatório técnico. Mas se ele ainda estiver em dúvida, tem a
      opção de “Não sei ainda”
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 5 até 31.</td>
  </tr>
  <tr>
    <td>RF A006 / Cadastrar estágio de desenvolvimento do TCC</td>
    <td>
      O aluno precisa dizer o estágio de escrita do TCC dele, se ele começou a
      escrever na disciplina de TCC 1, ou se ele já estava escrevendo por estar
      sendo acompanhado por outro orientador, ou se ele estava escrevendo por
      conta próprio ou se ainda não escreveu nada
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 5 até 31.</td>
  </tr>
  <tr>
    <td>RF A007 / Cadastrar pretensão de defesa do TCC</td>
    <td>
      O aluno precisa informar qual semestre ele pretende defender o TCC dele,
      por exemplo, 2022.2
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 5 até 31.</td>
  </tr>
  <tr>
    <td>RF A008 / Editar perfil</td>
    <td></td>
    <td></td>
  </tr>
  <!--
  <tr>
    <td>RF A009 / Solicitar Orientação</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF A010 / Excluir Solicitação de Orientação</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF A011 / Salvar Rascunho da Proposta de Solicitação</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF A012 / Visualizar Resposta da Solicitação</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P001 / Cadastrar foto do perfil</td>
    <td></td>
    <td></td>
  </tr>
-->
  <tr>
    <td>RF P002 / Cadastrar descrição da sua forma de orientação</td>
    <td>
      O professor pode dizer em algumas palavras a forma que ele costuma
      orientar
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 33 até 60.</td>
  </tr>
  <tr>
    <td>RF P003 / Cadastrar disponibilidade para orientação</td>
    <td>
      O professor precisa informar a disponibilidade de orientação dele, se está
      disponível, indisponível ou a disponibilidade está em análise
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 33 até 60.</td>
  </tr>
  <tr>
    <td>RF P004 / Cadastrar preferência de modalidade do TCC</td>
    <td>
      O professor pode informar as suas modalidades de TCC que ele tem
      preferência por orientar
    </td>
    <td>
      Diretório: src/app/controllers/editController.js. Linha: 33 até 60.v
    </td>
  </tr>
  <tr>
    <td>RF P005 / Cadastrar áreas de pesquisa</td>
    <td>
      O professor precisa informar as suas áreas de pesquisa, como animação,
      ilustração, etc
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 33 até 60.</td>
  </tr>
  <tr>
    <td>RF P006 / Cadastrar projetos de pesquisa/extensão</td>
    <td>
      O professor pode informar quais projetos de pesquisa ou projetos de
      extensão ele participa ou já participou, e informar o período que
      participou do projeto
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 33 até 60.</td>
  </tr>
  <tr>
    <td>RF P007 / Cadastrar disciplinas que lecionou</td>
    <td>
      O professor pode informar as disciplinas que ele já lecionou e leciona,
      por exemplo, História do Design
    </td>
    <td>Diretório: src/app/controllers/editController.js. Linha: 33 até 60.</td>
  </tr> 
  <tr>
    <td>RF P008 / Editar Perfil</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P009 / Cadastrar Orientando do Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P010 / Cadastrar Tema do TCC do Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P011 / Cadastrar Descrição do TCC do Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P012 / Cadastrar palavras-chaves do TCC do Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P013 / Cadastrar Modalidade do TCC do Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P014 / Cadastrar semestre de defesa do TCC do Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P015 / Cadastrar link do PDF do TCC do Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P016 / Editar Portfólio de TCCs</td>
    <td></td>
    <td></td>
  </tr>
  <!--
  <tr>
    <td>RF P017 / Responder Solicitação de Orientação</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RF P018 / Visualizar Uma Solicitação de Orientação</td>
    <td></td>
    <td></td>
  </tr>
-->
  <tr>
    <td>RF P019 / Visualizar Perfil do Aluno</td>
    <td></td>
    <td></td>
  </tr>
</table>


## :bulb: Como instalar

```sh
npm install
```

## :running_woman: Como executar

```sh
npm run dev
```

## :memo: Licença

Este projeto está sob a licença MIT. Veja o [LICENSE](https://img.shields.io/badge/License-ISC-yellow.svg) para maiores informações.

---

Feito com 💜 by [Spaceship](https://github.com/Spaceship-PI1)
