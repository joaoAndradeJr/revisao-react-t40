# Revisão React Turma 40 - Trybe

Esta aplicação tem carater de revisão de conteúdo e pode não estar finalizada ao final do momento de revisão.

## Para utilizar siga os passos abaixo

#### 1 - Clone o repositório com o comando `git clone git@github.com:joaoAndradeJr/revisao-react-t40.git`
#### 2 - Instale as dependencias com o comando `npm install`
#### 3 - Inicie a aplicação com o comando `npm run dev`

### Fique à vontade para enviar atualizações através de PR's

# O que vamos desenvolver?

1. A rota raiz `/` deverá renderizar uma tela de login. A tela deverá ter 3 inputs e 1 botão. O 1º deverá recerber o nome da pessoa, o 2º o email da pessoa e o 3º a senha da pessoa. O botão só deverá estar habilitado quando todos os campos forem preenchidos e validados.

2. Após o login salve os dados da pessoa no localstorage na chave `user` e mude a rota para `/movies`.

3. A rota `/movies` deve renderizar uma tela de filmes. Os filmes devem ser recebidos da "api" `movieAPI`. Mostre todos os filmes com suas respectivas caracteristicas.

4. Ao clicar em cada filme a pessoa deverá ser encaminhada para ver os detalhes do filme na rota `/movie/:id`.

5. Na rota `/movie/:id` você deverá receber o id do filme pelo parâmetro da rota e buscar seus detalhes na "api" `movieAPI`;

6. Crie uma página de edição de filmes que deverá ser renderizada na rota `/movie/edit/:id`. Essa página deverá conter um formulário que deverá vir preenchido com as informações do filme a ser editado. Essas informações deveram ser recuperadas da "api" `movieAPI`. Essa tela também deverá ter um botão para excluir o filme que está sendo editado.

7. Crie uma página de adição de filmes que deverá ser renderizada na rota `/movie/add`. Essa página deverá conter um formulário para o cadastro das informações do filme. O botão de cadastro do filme deverá estar desabilitado até que todas as informações tenham sido preenchidas.
