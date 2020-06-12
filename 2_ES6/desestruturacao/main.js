//MODO CONVENCIONAL
/*
const usuario = {
    nome: 'Tayse',
    idade:32,
    endereco: {
        cidade:'Poa',
        estado:'RS'
    },
};

const nome = usuario.nome
const idade = usuario.idade
const estado = usuario.endereco.estado

console.log(nome)
console.log(idade)
console.log(estado)
*/

//DESESTRUTURAÇÃO COM FUNÇÕES
const usuario = {
    nome: 'Tayse',
    idade:32,
    endereco: {
        cidade:'Poa',
        estado:'RS'
    },
};

const usuario2 = {
    nome: 'Theo',
    idade:4,
    endereco: {
        cidade:'Poa',
        estado:'RS'
    },
};
/*
const{ nome, idade, endereco:{estado} } = usuario

console.log(nome)
console.log(idade)
console.log(estado)
*/

function mostraNome({ nome, idade }){
    return console.log(nome, idade)
}
mostraNome(usuario)
mostraNome(usuario2)