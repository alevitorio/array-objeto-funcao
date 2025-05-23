Perfeito! Aqui vai uma nova versão dos exercícios, **sem usar métodos de array** como `.map()`, `.filter()`, `.reduce()` etc. Eles são ótimos para alunos que estão aprendendo lógica com foco no uso de **laços, condições, funções, objetos e arrays básicos**:

---

## 📘 **Funções**

### 1. Função que retorna o dobro de um número

```js
function dobro(n) {
  return n * 2;
}
console.log(dobro(4)); // 8
```

### 2. Função que verifica se um número é positivo, negativo ou zero

```js
function verificaNumero(n) {
  if (n > 0) return "Positivo";
  else if (n < 0) return "Negativo";
  else return "Zero";
}
console.log(verificaNumero(-3)); // Negativo
```

---

## 🧱 **Objetos**

### 3. Criar um objeto carro com marca, modelo e ano

```js
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};
console.log(carro.marca); // Toyota
```

### 4. Criar uma função que recebe um objeto pessoa e imprime uma saudação

```js
function saudacao(pessoa) {
  console.log("Olá, " + pessoa.nome + "! Seja bem-vindo(a).");
}

const pessoa = {
  nome: "Lucas"
};

saudacao(pessoa); // Olá, Lucas! Seja bem-vindo(a).
```

---

## 📚 **Arrays (sem métodos)**

### 5. Criar um array de 5 números e imprimir cada um

```js
const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < 5; i++) {
  console.log(numeros[i]);
}
```

### 6. Calcular a média de 4 notas usando um `for`

```js
function mediaNotas(notas) {
  let soma = 0;
  for (let i = 0; i < 4; i++) {
    soma = soma + notas[i];
  }
  return soma / 4;
}

const notas = [7, 8, 6, 9];
console.log(mediaNotas(notas)); // 7.5
```

---

## 🧠 **Desafio com array e objeto (sem métodos)**

### 7. Dado um array de alunos com nome e nota, imprimir apenas os nomes dos aprovados (nota >= 7)

```js
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Bianca", nota: 9 }
];

function mostrarAprovados(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nota >= 7) {
      console.log(lista[i].nome);
    }
  }
}

mostrarAprovados(alunos); // Ana, Bianca
```

---

Se quiser, posso organizar isso em **PDF ou README** com espaço para respostas, ou criar uma versão com **enunciados apenas** para uso em sala. Deseja isso?
