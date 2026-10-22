let compras = [];

let opcao;

do {
    opcao = prompt(
        "=== LISTA DE COMPRAS ===\n" +
        "1 - Adicionar item\n" +
        "2 - Remover último item\n" +
        "3 - Exibir lista\n" +
        "4 - Excluir item pelo índice\n" +
        "5 - Quantidade de itens\n" +
        "0 - Sair"
    );

    switch (opcao) {

        case "1":
            let item = prompt("Digite o nome do item:");
            
            if (item != "") {
                compras.push(item); // adiciona item
                alert("Item adicionado!");
            } else {
                alert("Digite um nome válido.");
            }
            break;

        case "2":
            if (compras.length > 0) {
                let removido = compras.pop(); // remove último
                alert("Removido: " + removido);
            } else {
                alert("A lista está vazia.");
            }
            break;

        case "3":
            let mensagem = "Lista de Compras:\n";

            for (let i = 0; i < compras.length; i++) {
                mensagem += i + " - " + compras[i] + "\n";
            }

            if (compras.length == 0) {
                mensagem += "Nenhum item cadastrado.";
            }

            alert(mensagem);
            break;

        case "4":
            let indice = Number(prompt("Digite o índice para excluir:"));

            if (indice >= 0 && indice < compras.length) {
                delete compras[indice]; // exclui posição
                alert("Item excluído!");
            } else {
                alert("Índice inválido.");
            }
            break;

        case "5":
            alert("Quantidade de itens: " + compras.length);
            break;

        case "0":
            alert("Programa encerrado!");
            break;

        default:
            alert("Opção inválida.");
    }

} while (opcao != "0");