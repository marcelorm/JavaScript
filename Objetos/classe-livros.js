class Livro {
    constructor(título, autor, editora, anoDeLançamento) {
        this.título = título
        this.autor = autor
        this.editora = editora
        this.anoDeLançamento = anoDeLançamento
    }
    anunciarTítulo() {
        console.log(`Título: ${this.título}`)
    }
    descreverTítulo() {
        console.log(`${this.título} é um livro de ${this.autor}, lançado pela editora ${this.editora} no ano de ${this.anoDeLançamento}.`)
    }
}

const críticaDoFascismo = new Livro("Crítica do Fascismo", "Alysson Leandro Mascaro", "Boitempo", 2022)
const blonde = new Livro("Blonde", "Bryce Carol-Oates", "Suma", "2020")
const assassinoDaLuaDasFlores = new Livro("Assassinos da Lua das Flores", "Susan Monday", "Leya", 2019)
críticaDoFascismo.descreverTítulo()
blonde.descreverTítulo()
assassinoDaLuaDasFlores.descreverTítulo()
