# 🐾 Sistema PetShop (JavaScript)

Este projeto simula o funcionamento de um sistema básico de PetShop utilizando **JavaScript puro**, com foco no gerenciamento de pets, serviços, histórico e vendas. A base foi criada para posterior integração com um front-end em HTML/CSS.

---

## ✅ Requisitos Funcionais

- O sistema deve permitir listar todos os pets cadastrados.
- O sistema deve permitir aplicar vacinas aos pets.
- O sistema deve permitir registrar consultas veterinárias.
- O sistema deve permitir registrar serviços de banho.
- O sistema deve registrar cada serviço prestado no histórico do pet.
- O sistema deve calcular e exibir o total de vendas realizadas.
- O sistema deve apresentar uma tabela com os serviços disponíveis.

---

## 📌 Regras de Negócio

- Cada **pet** possui:
  - `nome`: string
  - `tipo`: string (ex: cachorro, gato)
  - `idade`: número
  - `vacinado`: boolean
  - `historicoServicos`: array de strings com serviços realizados

- O serviço **"Banho"** só pode ser realizado se o pet estiver vacinado.
- A **"Consulta"** automaticamente vacina o pet ao ser registrada.
- Cada serviço realizado deve ser:
  - Registrado no histórico do pet com data.
  - Registrado como uma venda (nome do pet, descrição do serviço, valor).

- Tabela de serviços:
  - Banho: R$40
  - Tosa: R$50
  - Vacinação: R$80
  - Consulta: R$100

---

## 🚫 Requisitos Não Funcionais

- O sistema não deve usar bancos de dados, persistência em arquivos ou frameworks.
- O sistema deve ser executado diretamente no console (Node.js ou navegador).
- O código deve ser simples e comentado, focado em fins educacionais.
- O sistema não utiliza métodos de array mais avançados (como `filter`, `map`) para manter a didática.

---

## ⚙️ Funcionalidades

| Função         | Descrição |
|----------------|-----------|
| `listarPets()` | Lista todos os pets. |
| `vacina(nome)` | Aplica vacina ao pet e registra no histórico. |
| `banho(nome)`  | Dá banho em pet vacinado e registra no histórico. |
| `consulta(nome)` | Registra consulta e marca como vacinado. |
| `caixa()`      | Exibe todas as vendas e o total arrecadado. |
| `tabela()`     | Mostra os serviços e seus preços. |

---

## 🧪 Exemplos de Uso

```js
petShop.listarPets();
petShop.vacina("Toby");
petShop.banho("Toby"); // Agora está vacinado, pode!
petShop.consulta("Mimi");
petShop.caixa();
