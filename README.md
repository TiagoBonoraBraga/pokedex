# pokedex

 - Projeto Pokedex do aluno Tiago Bonora Braga -  modulo 2 do curso de Desenvolvimento Full stack Blue EdTech 2022.

 - Para add novos Pokemons utitlize o banco de pokemons https://www.pokemon.com/br/pokedex/

                     Olá colecionador de Pokemons, Bem Vindo A Pokédex

- Para inicializar nossa Pokédex será preciso usa o sistema de organização MVC.

1 - crie as pastas para organização do projeto.

  - pasta public contendo: - css - style.css
                           - img - imagens usadas no projeto
                           - js  - script.js

  - pasta views contendo:  - index.ejs - para manipular o html
  - arquivo na pasta raiz  - index.js

2 - instalar no terminal do VSCode - npm init - para iniciar o detalhamento do projeto e abrir o package.json
                                              - no arquivo package.json trocar o script "test" por:
                                                "start": "node index.js",
                                                "dev": "nodemon index.js"

                                   - npm i nodemon - para obter a atualização em tempo real do projeto
                                   - npm i express - para obter um servidor localhost
                                                   - entrar no site npmjs.com/package/express e pegar o codigo para 
                                                     iniciar o projeto

                                                     const express = require("express);
                                                     const app = express();

                                                     app.get('/', (req, res) =>{
                                                         res.send('hello World');
                                                     });

                                                     app.listem(3000);

                                   - npm i ejs - para instalar o .ejs

3 - para rodar coloque no terminal do VSCODE - npm run dev
                                             - em abra a porta 3000 htt://localhost:3000 no navegador

4 - copie o codigo do meu  GitHub.com: ogait-ashtar no repositorio pokedex.

5 - ou acesse o link do hiroku para colecionar seus pokemons - https://pokedex-mvc.herokuapp.com/

6 - Possibilidades - Cadastrar seus pokemons
                   - deletar seus pokemon
                   - Editar seus pokemons

                               \--/ Diretos por Ogait Ashtar \--/
             



