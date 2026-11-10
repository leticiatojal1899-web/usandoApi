//lignguagem de programação;

const url = "viacep.com.br/ws/01001000/json/"

//fetch => Pega os Dados da Api
//then => decide o que eu vou fazer com a resposta do fetch
fetch(url)
    .then(resposta => resposta.json())
    .then(data => {
        console.log(data)
    })
function bucarApi(url) {
    fetch(url)
        .then(resposta => resposta.json())
        .then(data => {
            if (data.erro) {
                console.log("cep não encontrado")
            }
            else {
                console.log(data)
            }
        })
}
buscaApi("https://jsonplaceholder.typicode.com/posts");
buscaApi("https://jsonplaceholder.typicode.com/comments	");
buscaApi("https://jsonplaceholder.typicode.com/albums");
buscaApi("https://jsonplaceholder.typicode.com/photos");
buscaApi("https://jsonplaceholder.typicode.com/todos");
buscaApi("https://jsonplaceholder.typicode.com/users");





