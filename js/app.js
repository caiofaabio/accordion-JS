//console.log("Olá Mundo");


// DOM (Document Object Model)

// É uma interface que representa o HTML por meio de objetos.
// Com ela é possível manipular a estrutura, conteúdo, 
// estilo

document.querySelectorAll('.accordion-content').forEach(item =>{
    item.style.maxHeight = 0;
})


document.querySelectorAll('.accordion-button').forEach((button) =>{
    
    button.addEventListener('click', () => {
        
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if(button.classList.contains('active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }else{
            accordionContent.style.maxHeight = 0;
        }
    })
})



//JSON.parse()// transforma o texto JSON em objeto
//JSON.stringify();// quero transformar um objeto em JSON

/*const json = JSON.parse('{ "id": 1,"nome": "notebook dell","modelo": "gamer","quantidade": 5}')

console.log(json);

const caneta = {
    cor: 'azul',
    formato: 'triangular',
    tipo: 'desenho'
}
console.log(json);

const stringjson = JSON.stringify(caneta);

console.log(stringjson);*/

// api e http
//api= é a forma de voce interagir com servidores, aplicações. É uma forma de comunicação, requisição.
//http= é um protocolo para enviar e receber dados na web. temos alguns metodos

//get - pega a informação, método padrao e mais comum.
//post - cria usuarios, novos registos.
//put - atualizar informação
//delete - deletar informações
//head - puxa o cabeçalho

//AJAX
//é o uso do obejto XMLHttpRequest para se comunicar com os scripts do lado do servidor


/*var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/caiofaabio');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('Erro');
                }
            }
        }
    })
}

var xhr = new XMLHttpRequest(); //instanciando uma classe

minhaPromise()
.then(function(response){
    console.log(response);
})

.catch(function(error){
    console.log(erro);
})
*/


//promises
//são codigos que não vão influenciar na linha do tempo do JS.Basicamente, são funcoes que vao devolver o resultado de "sucesso" ou "erro"

//axios
//é um encapsulamento do XMHHttpRequest(). ele vai nos ajudar de fazer exatamente a mesma coisa que ja fazemos até aqui, do que de maneira mais facil

axios.get('https://api.github.com/users/caiofaabio')
.then(function(response){
    console.log(response);
})

.catch(function(error){
    console.log(erro);
})

//Modules JS
//é uma forma de exportar e importar módulos de código no JS. Tópico importantissimo para entender a dinamica de frameworks.











