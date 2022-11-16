const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "126465431655",
    email: "andre@email.com",
    fones: ["55468654", "654326546543"] 
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)