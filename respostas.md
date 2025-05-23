Claro! Aqui estão alguns **exercícios práticos de JavaScript** envolvendo **funções**, **objetos** e **arrays**, separados por tema e com dificuldade progressiva:

---

## 📘 **Funções**

### 1. Função que soma dois números

```js
function somar(a, b) {
  return a + b;
}
console.log(somar(3, 5)); // 8
```

### 2. Função que retorna se um número é par ou ímpar

```js
function parOuImpar(num) {
  return num % 2 === 0 ? "Par" : "Ímpar";
}
console.log(parOuImpar(7)); // Ímpar
```

### 3. Função que calcula o fatorial de um número

```js
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120
```

---

## 🧱 **Objetos**

### 1. Criar um objeto `aluno` com nome, idade e curso

```js
const aluno = {
  nome: "João",
  idade: 17,
  curso: "Programação Web"
};
console.log(aluno.nome); // João
```

### 2. Adicionar uma função dentro do objeto

```js
aluno.apresentar = function() {
  return `Olá, meu nome é ${this.nome} e eu estudo ${this.curso}.`;
};
console.log(aluno.apresentar());
```

### 3. Criar uma função que receba um objeto pessoa e retorne uma saudação

```js
function cumprimentar(pessoa) {
  return `Olá, ${pessoa.nome}!`;
}

const pessoa = { nome: "Maria" };
console.log(cumprimentar(pessoa)); // Olá, Maria!
```

---

## 📚 **Arrays**

### 1. Criar um array com 5 frutas e exibir a terceira

```js
const frutas = ["maçã", "banana", "laranja", "uva", "melancia"];
console.log(frutas[2]); // laranja
```

### 2. Adicionar e remover elementos do array

```js
frutas.push("abacaxi"); // adiciona no final
frutas.shift(); // remove o primeiro
console.log(frutas);
```

### 3. Criar uma função que receba um array de números e retorne a média

```js
function calcularMedia(numeros) {
  const soma = numeros.reduce((acc, n) => acc + n, 0);
  return soma / numeros.length;
}

console.log(calcularMedia([10, 7, 8, 6])); // 7.75
```

---

## 💡 Desafio Integrado (Funções + Objetos + Arrays)

> Crie uma função que receba um array de objetos representando alunos com nota, e retorne os nomes dos aprovados (nota >= 7):

```js
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Bianca", nota: 9 }
];

function aprovados(lista) {
  return lista
    .filter(aluno => aluno.nota >= 7)
    .map(aluno => aluno.nome);
}

console.log(aprovados(alunos)); // ['Ana', 'Bianca']
```

---

Se quiser, posso gerar uma **folha de exercícios com enunciados e espaço para resposta** ou preparar um **quiz estilo Kahoot** com base nesses temas. Deseja isso?
