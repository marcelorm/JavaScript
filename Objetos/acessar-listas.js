const cliente = {
    nome: "André",
    idade: 36,
    cpf: "126465431655",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//const chave = "nome"

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))