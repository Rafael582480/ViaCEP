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

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp => resp.json())
    .then(dados => {
        if(dados.erro) {
            document.querySelector("#saida").textContent = "CEP nao encontrado"
        } else {
            document.querySelector("#saida").textContent += JSON.stringify(dados, null, 2)
        }
    })


})