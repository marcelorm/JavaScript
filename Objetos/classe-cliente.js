class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.genero = genero
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre", "andre@email.com", "654654654654", "masculino", 100)

andre.exibirSaldo()

console.log(andre)