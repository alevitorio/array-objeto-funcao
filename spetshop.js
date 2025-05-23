const petShop = {
  pets: [
    {
      nome: "Rex",
      tipo: "cachorro",
      idade: 5,
      vacinado: true,
      historicoServicos: ["Banho"],
    },
    {
      nome: "Mimi",
      tipo: "gato",
      idade: 2,
      vacinado: false,
      historicoServicos: ["Consulta"],
    },
    {
      nome: "Toby",
      tipo: "cachorro",
      idade: 3,
      vacinado: false,
      historicoServicos: [],
    },
  ],
  servicos: ["Banho", "Tosa", "Vacinação", "Consulta"],
  listarPets: function () {
    // seu código aqui
    console.log("--------------- Lista de Pets --------------");
    for (let index = 0; index < this.pets.length; index++) {
      console.log(`Nome:${this.pets[index].nome}\Especie:${this.pets[index].tipo}\nIdade:${this.pets[index].idade}\n----------------------------------------------
            `);
    }
  },
  vacinarPet: function (nome) {
    console.log(nome);
    let indexPet = -1;
    for (let index = 0; index < this.pets.length; index++) {
      if (this.pets[index].nome == nome) {
        indexPet = index
      }
    }
   
    if (indexPet<0) {
        console.log("Faça o cadastro desse animal ele não existe")
    } 
    this.pets[indexPet].vacinado = true
    this.pets[indexPet].historicoServicos[ this.pets[indexPet].historicoServicos.length] = "Vac. anti rabica"

    console.log("Resumo do animal")
    console.log(this.pets[indexPet])
   
  },
  atenderPet: function (nome) {
    // seu código aqui
  },
  relatorio: function () {
    // seu código aqui
  },
};

// petShop.listarPets();
petShop.vacinarPet("Mimi");
