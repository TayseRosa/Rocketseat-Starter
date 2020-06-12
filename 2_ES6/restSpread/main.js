//REST
function soma(a,b, ...params){
    return params
}
console.log(soma(1,2, 3,4,5,6))

//SPREAD
const usuario1 = {
    nome: 'Tayse',
    idade: 32, 
    empresa: 'wpdev'
};

const usuario2 = {...usuario1, nome: 'Tayse2'}
console.log(usuario2)