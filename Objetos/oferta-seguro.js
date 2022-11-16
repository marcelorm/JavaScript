const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "126465431655",
    email: "andre@email.com",
    fones: ["55468654", "654326546543"],
    dependentes: [
        {
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"},
        {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"}
    ],
    saldo: 100,

    depositar: function(valor)
    {
        this.saldo += valor 
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(cliente);
   if (propsClientes.includes("dependentes"))
   {
    console.log(`Oferta de seguro de vida para ${obj.nome}`)
   }
}

console.log(Object.values(cliente))
oferecerSeguro(cliente)