# Exercícios de JavaScript: Funções, Objetos e Arrays (sem métodos)
---

## 📘 Funções

### 1. Função que retorna o dobro de um número

Crie uma função chamada `dobro` que receba um número como parâmetro e retorne seu dobro.

```js
function dobro(n) {
  // seu código aqui
}
```

### 2. Verifica se um número é positivo, negativo ou zero

Crie uma função chamada `verificaNumero` que receba um número e retorne:

* "Positivo" se for maior que zero
* "Negativo" se for menor que zero
* "Zero" se for igual a zero

```js
function verificaNumero(n) {
  // seu código aqui
}
```

---

## 🧱 Objetos

### 3. Criar um objeto carro

Crie um objeto chamado `carro` com as propriedades:

* `marca`
* `modelo`
* `ano`

Depois, imprima cada propriedade no console.

```js
const carro = {
  // seu código aqui
};
```

### 4. Função que recebe um objeto pessoa

Crie uma função `saudacao` que receba um objeto `pessoa` com a propriedade `nome`, e imprima no console:

```plaintext
"Olá, NOME! Seja bem-vindo(a)."
```

---

## 📚 Arrays (sem métodos)

### 5. Criar um array e imprimir os elementos

Crie um array com 5 números. Use um `for` para imprimir cada um deles.

### 6. Calcular média de notas

Crie uma função `mediaNotas` que receba um array com 4 notas e retorne a média.
Use apenas laço `for` e variáveis simples.

---

## 🧠 Desafio Final

### 7. Mostrar alunos aprovados

Dado um array de objetos, onde cada objeto representa um aluno com nome e nota:

```js
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Bianca", nota: 9 }
];
```

## 🐾 Projeto: PetShop

Crie um objeto chamado `petShop` que simule o funcionamento básico de um sistema de pet shop. O objeto deve conter:

* Um array chamado `pets` com pelo menos 3 pets (nome, tipo, idade, vacinado: true/false e um array `historicoServicos` com strings representando os serviços já feitos)
* Um array chamado `servicos` contendo os serviços oferecidos pelo pet shop (ex: "Banho", "Tosa", "Vacinação", "Consulta")
* Uma função `listarPets()` que imprime todos os pets cadastrados
* Uma função `vacinarPet(nome)` que vacina o pet se ele ainda não foi vacinado
* Uma função `atenderPet(nome)` que imprime uma mensagem de atendimento
* Uma função `relatorio()` que mostra quantos pets estão vacinados e quantos não estão

Exemplo de estrutura:

```js
const petShop = {
  pets: [
    { nome: "Rex", tipo: "cachorro", idade: 5, vacinado: true, historicoServicos: ["Banho"] },
    { nome: "Mimi", tipo: "gato", idade: 2, vacinado: false, historicoServicos: ["Consulta"] },
    { nome: "Toby", tipo: "cachorro", idade: 3, vacinado: false, historicoServicos: [] }
  ],
  servicos: ["Banho", "Tosa", "Vacinação", "Consulta"],
  listarPets: function() {
    // seu código aqui
  },
  vacinarPet: function(nome) {
    // seu código aqui
  },
  atenderPet: function(nome) {
    // seu código aqui
  },
  relatorio: function() {
    // seu código aqui
  }
};
```

Teste as funções chamando-as no final do seu código.

**Bons estudos!**


> ✉️ Dica: use `console.log()` para verificar seus resultados!

---

**Bons estudos!**
