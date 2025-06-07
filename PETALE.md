# 📚 Documentação do Sistema PetShop AleDev

---

## ✅ Requisitos Funcionais

1. **Cadastro de pets**

   * Permite registrar um novo pet com nome, tipo, idade e status de vacinação.

2. **Listagem de pets**

   * Mostra todos os pets cadastrados em formato de tabela.

3. **Aplicação de vacina**

   * Atualiza o status de vacinação de um pet.
   * Registra no histórico e no carrinho o serviço de vacinação.

4. **Registro de consulta**

   * Adiciona uma entrada de consulta no histórico e carrinho do pet.

5. **Banho**

   * Só pode ser realizado em pets vacinados.
   * Adiciona o serviço ao histórico e ao carrinho do pet.

6. **Visualização da tabela de serviços**

   * Exibe os serviços disponíveis com seus respectivos preços.

7. **Fechamento de caixa**

   * Mostra todos os pets que têm serviços pendentes no carrinho.
   * Calcula e exibe o total por pet.

8. **Interface de Menu**

   * Sistema interativo em terminal para selecionar ações.

---

## ⚙️ Regras de Negócio

1. **Banho depende de vacinação**

   * Pets não vacinados não podem tomar banho.
   * Mensagem de orientação é exibida ao tutor.

2. **Histórico de serviços**

   * Cada pet tem seu histórico atualizado com a data e descrição do serviço.

3. **Carrinho por pet**

   * Cada pet tem um carrinho próprio, onde os serviços prestados são registrados antes de serem cobrados no caixa.

4. **Vacinação é considerada automaticamente ao registrar consulta**

   * Toda consulta também marca o pet como vacinado.

5. **Não há duplicação de pets com o mesmo nome**

   * O nome do pet é utilizado como identificador único nas buscas.

6. **Serviço gera venda**

   * Cada serviço prestado é tratado como uma venda com descrição e valor, armazenado no carrinho.

---

## 📌 Requisitos Não Funcionais

1. **Interface em terminal (CLI)**

   * Utiliza `readline-sync` para entrada de dados via prompt.

2. **Modularidade**

   * O sistema está dividido entre a lógica (`spetshopComentado.js`) e a interface (`interface.js`), usando `import/export`.

3. **Compatibilidade**

   * Requer Node.js para execução.

4. **Feedback visual**

   * Utiliza `console.log`, `console.table` e emojis para tornar a experiência mais amigável.

5. **Persistência em memória**

   * Os dados são mantidos apenas durante a execução (sem banco de dados).

---

## 🧠 Conceitos Utilizados

### 🔁 Procedimento (Void)

Funções que **executam uma ação**, mas **não retornam** valores. Exemplo:

```js
listarPets: function () {
  console.table(this.pets);
}
```

### 🔄 Função com Retorno

Funções que **retornam um valor** após processar alguma lógica. Exemplo:

```js
buscaNome: function (nome) {
  let indexPet = -1;
  for (...) {
    if (...) indexPet = index;
  }
  return indexPet;
}
```

> 💡 O professor Alessandro irá abrir o VS Code na aula para mostrar passo a passo como essas funções funcionam, o que é um procedimento (void) e o que é uma função com retorno, explicando na prática como identificar e implementar cada tipo.

---

## 📁 Arquivos do Projeto

### `petshop.js`

Contém:

* A lógica principal do sistema.
* As listas de pets, serviços e vendas.
* Funções de cadastro, serviços e controle de caixa.

### `interface.js`

Contém:

* Menu de navegação no terminal.
* Entrada interativa de dados usando `readline-sync`.
* Conexão direta com o módulo `petShop`.

---
