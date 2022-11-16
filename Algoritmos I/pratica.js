const livros = [
    {
        nome: "JavaScript",
        preco: 25
    }, 
    {
        nome: "PHP",
        preco: 15
    }, 
    {
        nome: "Java",
        preco: 30
    }, 
    {
        nome: "Elixir",
        preco: 50
    }, 
    {
        nome: "Go",
        preco: 45
    }, 
    {
        nome: "Python",
        preco: 20
    }
];

function gnomeSort(livros) 
{
    function moveBack(i) 
  {
        for(livros; i > 0 && livros[i-1] > livros[i]; i--)
        {
            var t = livros[i];
            livros[i] = livros[i-1];
            livros[i-1] = t;
        }
    }
    for (var i = 1; i < livros.length; i++) 
    {
        if (livros[i-1] > livros[i]) moveBack(i);
    }
    return livros;
}
 
console.log("Original Array Elements"); 
console.log(livros); 
console.log("Sorted Array Elements"); 
console.log(gnomeSort(livros));
