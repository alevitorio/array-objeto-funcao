// Objeto principal do sistema PetShop
const petShop = {

  // Lista de pets cadastrados
  pets: [
    {
      nome: "Rex", // nome do animal
      tipo: "cachorro", // tipo do animal
      idade: 5, // idade em anos
      vacinado: true, // se está vacinado
      historicoServicos: ["Banho - 01/31/22"], // histórico de serviços
      carrinho: []
    },
    {
      nome: "Mimi",
      tipo: "gato",
      idade: 2,
      vacinado: false,
      historicoServicos: ["Consulta - 11/09/22"],
      carrinho: []
    },
    {
      nome: "Toby",
      tipo: "cachorro",
      idade: 3,
      vacinado: false,
      historicoServicos: [],
      carrinho:[]
    }
  ],



  // Lista de serviços oferecidos
  servicos: [
    { descricao: "Banho", valor: 40.00 },
    { descricao: "Tosa", valor: 50.00 },
    { descricao: "Vacinação", valor: 80.00 },
    { descricao: "Consulta", valor: 100.00 }
  ],

  // Lista de vendas realizadas
  vendas: [],

  //  cadastro do pet
  cadastro: function (nome, tipo, idade, vacinado = false) {
    this.pets[this.pets.length] = { nome, idade, tipo, vacinado, historicoServicos: [] }
    console.info("Cadastro", "O pet foi salvo com sucesso!");

    console.table(this.pets[this.pets.length - 1])

  },

  // Função para buscar o índice de um pet pelo nome
  buscaNome: function (nome) {
    let indexPet = -1; // começa com valor inválido
    for (let index = 0; index < this.pets.length; index++) {
      if (this.pets[index].nome == nome) {
        indexPet = index; // salva o índice se encontrou
      }
    }

    // Se não encontrou, mostra mensagem e encerra
    if (indexPet < 0) {
      console.log("Faça o cadastro desse animal, ele não existe");
      return;
    }

    // Retorna o índice do pet
    return indexPet;
  },

  // Função para listar todos os pets cadastrados
  listarPets: function () {
    console.log("--------------- Lista de Pets --------------");
    console.table(this.pets); // mostra tabela com dados dos pets
  },

  // Função para aplicar vacina em um pet
  vacina: function (nome) {
    const hoje = new Date(); // pega a data de hoje
    const id = this.buscaNome(nome); // busca o índice do pet

    this.pets[id].vacinado = true; // marca como vacinado

    // adiciona registro do serviço no histórico
    this.pets[id].historicoServicos[this.pets[id].historicoServicos.length] =
      this.servicos[2].descricao + " - " + hoje.toLocaleDateString();

    // Cria o objeto da venda
    const venda = {
      nome: this.pets[id].nome,
      descricao: this.servicos[2].descricao,
      valor: this.servicos[2].valor
    };
    this.vendas[this.vendas.length] = venda;
  },

  // Função para registrar uma consulta
  consulta: function (nome) {
    const hoje = new Date();
    const id = this.buscaNome(nome);

    this.pets[id].vacinado = true; // opcional, marca como vacinado

    this.pets[id].historicoServicos[this.pets[id].historicoServicos.length] =
      this.servicos[3].descricao + " - " + hoje.toLocaleDateString();
    // Cria o objeto da venda
    const venda = {
      nome: this.pets[id].nome,
      descricao: this.servicos[3].descricao,
      valor: this.servicos[3].valor
    };
    this.vendas[this.vendas.length] = venda;

  },

  // Função para registrar um banho
  banho: function (nome) {
    const hoje = new Date();
    const id = this.buscaNome(nome);

    if (!this.pets[id].vacinado) {
      console.info("Vacine seu pet para usar o serviço");

      return
    }

    this.pets[id].historicoServicos[this.pets[id].historicoServicos.length] =
      this.servicos[0].descricao + " - " + hoje.toLocaleDateString();
    // Cria o objeto da venda
    const venda = {
      nome: this.pets[id].nome,
      descricao: this.servicos[0].descricao,
      valor: this.servicos[0].valor
    };

    this.vendas[this.vendas.length] = venda;

  },

  // Função que registra a venda de um serviço no caixa
  caixa: function () {

    // console.clear(); // limpa o console
    if (this.vendas.length <= 0) { return console.log("Nenhuma venda encontrada!"); }

    console.table(this.vendas); // exibe as vendas

    // Calcula o total das vendas
    let total = 0;
    for (let i = 0; i < this.vendas.length; i++) {
      total += this.vendas[i].valor;
    }

    // Mostra o valor total
    console.info("Total - R$", total);
  },

  // Exibe a tabela de serviços disponíveis
  tabela: function () {
    console.table(this.servicos);
  }
};

// Testes chamando serviços no caixa


petShop.cadastro("Lilica", "cachorro", true, 5,)

// petShop.consulta('Mimi')
// petShop.consulta('Mimi')
petShop.banho('Lilica')
petShop.caixa()
// petShop.listarPets()





