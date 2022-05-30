require("dotenv").config();//para o hiroko 
const express = require("express");

const app = express();
const path = require("path"); // biblioteca do express para linkar path e guarda no app abaixo

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));// achar os arquivos estaticos de js e css da pasta public para linkar o css e script
app.use(express.urlencoded());//pega as info de um body nesse ex o form q vem do ejs transformando em .json

const pokedex = [
    {
        id: 1,
        nome:"Bulbasaur",
        descricao: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        tipo: "Grass",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },

    {
        id: 2,
        nome: "Charmander",
        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        tipo: "Fire",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",

    },

    {
        id: 3,
        nome: "Squirtle",
        descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        tipo: "Water",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",

    },


];

//rotas

let pokemon = undefined;

app.get("/", (req, res) =>{//é o read do crud   
    res.render("index", { pokedex, pokemon });//estou pegando os dados da array e renderizando na pg
});

//post é create do crud
app.post("/create", (req, res) => { //recebe os dados do form pela rota /add metodo post
    const pokemon = req.body;//vai receber a requisição do body e colocar na variavel pkemon que vai ser cadastrado
    pokemon.id = pokedex.length + 1; // add o id nos novos pokemons, recebe o tamanhp da array mais 1
    pokedex.push(pokemon);  //vai empurrar o pokemon novo na array
    res.redirect("/"); // vai rendirecionar as info para "/ que vai renderizar para index a pokedex atualizada e colocar na rote principal o pokemon novo
});

app.get("/detalhes/:id", (req, res) => {
    const id = +req.params.id;
    pokemon = pokedex.find((pokemon) => pokemon.id === id);  
    res.redirect("/");
});

//update
app.post("/update/:id", (req, res) =>{ 
    const id = +req.params.id - 1;    
    const newPokemon = req.body;
    newPokemon.id = id + 1;
    pokedex[id] = newPokemon;
    pokemon = undefined;
    res.redirect("/");
});

app.listen(port, () =>
    console.log(`Rodando em http://localhost:${port}`));