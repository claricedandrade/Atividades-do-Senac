var bebida = prompt("Digite a bebida desejada:");

        switch (bebida) {
            case "Água":
                document.write("Preço:3,00");
                break
            case "Refrigerante":
                document.write("Preço:5,00");
                break
            case "Suco":
                document.write("Preço:4,00");
                break
            case "Cerveja":
                document.write("Preço:8,00");
                break
            case "Vinho":
                document.write("Preço:8,00");
                break
            default:
                document.write("Bebida indisponível");
                }