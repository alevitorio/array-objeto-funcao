const petShop = {
  pets: [
    {
      nome: "Rex",
      tipo: "cachorro",
      idade: 5,
      vacinado: true,
      historicoServicos: ["Banho - 01/31/22"],
    },
    {
      nome: "Mimi",
      tipo: "gato",
      idade: 2,
      vacinado: false,
      historicoServicos: ["Consulta - 11/09/22"],
    },
    {
      nome: "Toby",
      tipo: "cachorro",
      idade: 3,
      vacinado: false,
      historicoServicos: [],
    },
  ],

  servicos: [
    { descricao: "Banho", valor: 40.00 },
    { descricao: "Tosa", valor: 50.00 },
    { descricao: "Vacinação", valor: 80.00 },
    { descricao: "Consulta", valor: 100.00 }
  ],
  vendas: [],

  buscaNome: function (nome) {
    let indexPet = -1;
    for (let index = 0; index < this.pets.length; index++) {
      if (this.pets[index].nome == nome) {
        indexPet = index
      }
    }

    if (indexPet < 0) {
      console.log("Faça o cadastro desse animal ele não existe")
      return
    }
    return indexPet
  },

  listarPets: function () {
    // seu código aqui
    console.log("--------------- Lista de Pets --------------");
    // for (let index = 0; index < this.pets.length; index++) {
    //   console.log(`Nome:${this.pets[index].nome}\nEspecie:${this.pets[index].tipo}\nIdade:${this.pets[index].idade}\n----------------------------------------------
    //         `);
    // }
    console.table(this.pets)
  },

  vacina: function (nome) {
    const hoje = new Date();
    const id = this.buscaNome(nome)
    this.pets[id].vacinado = true
    this.pets[id].historicoServicos[this.pets[id].historicoServicos.length] = this.servicos[2].descricao + " - " + hoje.toLocaleDateString()
    this.servicos[2].nome = this.pets[id].nome
    return this.servicos[2]

  },

  consulta: function (nome) {
    const hoje = new Date();
    const id = this.buscaNome(nome);
    this.pets[id].vacinado = true
    this.pets[id].historicoServicos[this.pets[id].historicoServicos.length] = this.servicos[3].descricao + " - " + hoje.toLocaleDateString()

    return this.servicos[3]
  },

  banho: function (nome) {
    const hoje = new Date();
    const id = this.buscaNome(nome);
    this.pets[id].vacinado = true
    this.pets[id].historicoServicos[this.pets[id].historicoServicos.length] = this.servicos[0].descricao + " - " + hoje.toLocaleDateString()
    return this.servicos[0]

  },

  caixa: function (nome, servico) {
    const id = this.buscaNome(nome)
    const item = this[servico](nome)
    

    const venda = {
    nome: this.pets[id].nome, // aqui garante que o nome do animal está certo
    descricao: item.descricao,
    valor: item.valor
  };
  this.vendas[this.vendas.length] = venda
    console.clear()
    console.table(this.vendas);
    let total = 0;
    for (let i = 0; i < this.vendas.length; i++) {
      total += this.vendas[i].valor
    }
    console.info("Total - R$", total)

  },

  tabela: function () {
    console.table(this.servicos)
  }

};



petShop.caixa("Mimi", "consulta")
petShop.caixa("Mimi", "consulta")
petShop.caixa("Mimi", "consulta")
petShop.caixa("Mimi", "consulta")
petShop.caixa("Mimi", "banho")
petShop.caixa("Mimi", "vacina")
petShop.caixa("Mimi", "banho")
