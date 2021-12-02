//Crie um arquivo js e nele Crie duas classes, uma classe de para Pessoa e outra para Cliente. 
//Crie um objeto de cada classe e imprima seus valores.

class Pessoa{
    nome;
    sobrenome;
    idade;
}

class Cliente{
    nome;
    sobrenome;
    empresa;
}

const p = new Pessoa();
p.nome = "Karolina";
p.sobrenome = "Eugenio";
p.idade = 33;

console.log(p);
console.log(p.nome, p.sobrenome, p.idade);

const c = new Cliente();
c.nome = "Attekita";
c.sobrenome = "Famosa";
c.empresa = "Itaú";

console.log(c);
console.log(c.nome, c.sobrenome, c.empresa);


