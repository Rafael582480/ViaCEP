// no click do bottao

const btn = document.querySelector("#buscar")

btn.addEventListener("click", function() {
    // pegar o valor do input
    const cep = document.querySelector("#cep").value.trim()

    // Se a pessoa nao digitou nada
    if(!cep) {
        alert("Digite um CEP!")
        return
    }
    // requisiçao



})