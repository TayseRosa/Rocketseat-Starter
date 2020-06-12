var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('listTodos')) || []
//Renderizar o todo em tela dentro a lista
function renderTodos(){
    //Excluir o conteudo da lista e adicionar o novo todo
    listElement.innerHTML = ''
    
    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        //Link de exclusao
        var linkElement = document.createElement('a')
        linkElement.setAttribute('href','#')

        //indexOf - Pesquisar dentro do array a posição do texto
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')')

        var linkText = document.createTextNode(' Excluir')
        linkElement.appendChild(linkText)

        //Inserindo o texto do array ToDos dentro da li
        todoElement.appendChild(todoText);

        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement);
    }
}
renderTodos()

//***Adicionar ToDos***//
//Ouvir o clique do botao
//Recuperar o valor do input, 
//Adicionar como novo iten no array e renderizar 
function addTodo(){
    //Recuperar o valor do input, 
    var todoText = inputElement.value
    //Adicionar como novo iten no array
    todos.push(todoText)
    //Apagar o texto atual do input
    inputElement.value = ''
    //Renderizar a lista novamente com o novo item do array
    renderTodos()
    saveToStorage()
}
//Adicionar o item ao ouvir o click do botao
buttonElement.onclick = addTodo;

//Remover ToDos
function deleteToDo(pos){
    //Splice - remove uma quantidade de itens do array baseado na posição que a gente passar
    todos.splice(pos, 1)//posição, numero de itens a ser removido, no caso 1 item
    renderTodos();
    saveToStorage();
}

//Armazenar os dados dos ToDos mesmo apos fechar e abrir a pagina
function saveToStorage(){
    localStorage.setItem('listTodos', JSON.stringify(todos))//stringify - transforma o vetor em uma string
}