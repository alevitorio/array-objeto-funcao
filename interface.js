import petShop from "./spetshopComentado.js";
import readlineSync from "readline-sync";

function menu() {
  let opcao;

  do {
    console.clear();
    console.log("🐾 PETSHOP ALEDEV 🐾\n");
    console.log("1️⃣  Listar pets");
    console.log("2️⃣  Aplicar vacina");
    console.log("3️⃣  Registrar consulta");
    console.log("4️⃣  Dar banho");
    console.log("5️⃣  Ver tabela de serviços");
    console.log("6️⃣  Ver caixa");
    console.log("7️⃣  Cadastrar novo pet");
    console.log("0️⃣  Sair\n");

    opcao = readlineSync.question("👉 Escolha uma opção: ");

    switch (opcao) {
      case "1":
        petShop.listarPets();
        break;

      case "2":
        const nomeVacina = readlineSync.question("🐶 Nome do pet para vacinar: ");
        petShop.vacina(nomeVacina);
        break;

      case "3":
        const nomeConsulta = readlineSync.question("🐱 Nome do pet para consulta: ");
        petShop.consulta(nomeConsulta);
        break;

      case "4":
        const nomeBanho = readlineSync.question("🛁 Nome do pet para banho: ");
        petShop.banho(nomeBanho);
        break;

      case "5":
        petShop.tabela();
        break;

      case "6":
        petShop.caixa();
        break;

      case "7":
        const nomeNovo = readlineSync.question("🐾 Nome do novo pet: ");
        const tipoNovo = readlineSync.question("📛 Tipo (ex: cachorro, gato): ");
        const idadeNovo = readlineSync.question("🎂 Idade: ");
        petShop.cadastro(nomeNovo, tipoNovo, idadeNovo);
        break;

      case "0":
        console.log("👋 Encerrando o sistema. Até logo!");
        break;

      default:
        console.log("❌ Opção inválida!");
    }

    if (opcao !== "0") {
      readlineSync.question("\n🔁 Pressione ENTER para voltar ao menu...");
    }

  } while (opcao !== "0");
}

menu();
