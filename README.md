# 📚 JavaScript: Arrays, Objetos e Funções — Conceitos Detalhados para Iniciantes

---

## 🟡 **Array** — O que é?

Um **array** é uma lista organizada de valores, onde cada valor tem uma posição, chamada de **índice** (começa em 0).

Você pode imaginar um array como uma prateleira com várias caixas, cada caixa numerada.

### Como criar um array?

```js
// Usando colchetes []
const frutas = ["maçã", "banana", "laranja"];
```

### Como acessar valores?

```js
console.log(frutas[0]); // "maçã" — primeiro item (índice 0)
console.log(frutas[2]); // "laranja" — terceiro item (índice 2)
```

### O que pode conter dentro?

Qualquer tipo de dado! Números, textos, objetos, outros arrays, funções...

```js
const mistura = [10, "texto", true, { nome: "Ana" }, [1, 2, 3]];
```

---

## 🤖 **Objeto** — O que é?

Um **objeto** é uma coleção de **propriedades**, cada uma com um nome (chave) e um valor.

Imagine um cadastro: nome, idade, telefone, onde cada dado tem uma etiqueta (chave).

### Como criar um objeto?

```js
const pessoa = {
  nome: "Carlos",
  idade: 30
};
```

### Como acessar valores?

Usando a chave com ponto ou colchetes:

```js
console.log(pessoa.nome); // Carlos
console.log(pessoa["idade"]); // 30
```

### O que pode ser valor?

Qualquer coisa: números, textos, arrays, objetos, funções...

---

## ⚡ **Funções** — O que são?

Funções são blocos de código que executam uma tarefa específica. Você pode chamar (usar) essa função várias vezes, evitando repetir código.

### Como criar funções: principais formas

1. **Declaração de função (Function Declaration):**

```js
function digaOi() {
  console.log("Oi!");
}
```

* Pode ser chamada antes ou depois da declaração (hoisting).

2. **Expressão de função (Function Expression):**

```js
const digaTchau = function() {
  console.log("Tchau!");
};
```

* Aqui a função fica armazenada numa variável.
* Só pode ser chamada após a linha da declaração.

3. **Função Arrow (Arrow Function) — ES6+:**

```js
const soma = (a, b) => {
  return a + b;
};
```

* Sintaxe curta, especialmente útil para funções pequenas.
* Difere no comportamento do `this`.

### Como usar funções?

Você **chama** elas pelo nome seguido de parênteses:

```js
digaOi();        // Imprime "Oi!"
digaTchau();     // Imprime "Tchau!"
console.log(soma(3, 5)); // Imprime 8
```

### Funções podem ter parâmetros e retornar valores:

```js
function multiplicar(a, b) {
  return a * b;
}

const resultado = multiplicar(4, 5);
console.log(resultado); // 20
```

---

## 🧩 Como Arrays, Objetos e Funções se relacionam?

* Arrays guardam listas ordenadas de valores.
* Objetos guardam informações nomeadas.
* Funções manipulam esses dados, processam informações e executam tarefas.

Exemplo misturando tudo:

```js
const aluno = {
  nome: "Joana",
  notas: [7, 8, 9],
  media: function() {
    // soma as notas e divide pela quantidade
    let soma = 0;
    for(let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    return soma / this.notas.length;
  }
};

console.log(aluno.nome);      // Joana
console.log(aluno.media());   // 8
```

---

## 💡 Exercícios para fixar

1. Crie um array com 5 números.
2. Crie um objeto representando um carro (marca, modelo, ano).
3. Crie uma função que recebe um nome e imprime: `Olá, NOME!`
4. Crie uma função dentro de um objeto para mostrar alguma informação usando `this`.

---

## 📚 Links para documentações oficiais

* [Array - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Object - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [Function - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function)

