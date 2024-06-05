const filmes = [
    { titulo: "Tropa de Elite", genero: "Ação" },
    { titulo: "Capitão Fantástico", genero: "Drama" },
    { titulo: "O Poderoso Chefão", genero: "Crime" },
    { titulo: "O Menino do Pijama Listrado", genero: "Drama" },
    { titulo: "High School Musical", genero: "Musical" },
    { titulo: "O Senhor dos Anéis: Sociedade do Anel", genero: "Fantasia" },
    { titulo: "Clube da Luta", genero: "Drama" },
];

let contagemGeneros = {};

filmes.forEach(filme => {
    if (contagemGeneros[filme.genero]) {
        contagemGeneros[filme.genero]++;
    } else {
        contagemGeneros[filme.genero] = 1;
    }
});

for (let genero in contagemGeneros) {
    console.log(`Existem ${contagemGeneros[genero]} filmes no gênero ${genero}.`);
}