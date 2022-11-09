function calcularMedia() {
    // cria referência aos elementos da página
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");
    // obtém os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    // calcula a média das notas
    var media = (nota1 + nota2) / 2;
    // apresenta a média (altera o conteúdo do elemento outMedia)
    outMedia.textContent = "Média das Notas: " + media;
    // cria a condição
    if (media >= 7) {
        
        outSituacao.innerHTML = "Parabéns " + nome + "! Você foi aprovado(a)!";
        outSituacao.style.color = "blue";
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção, " + nome + "!!!!!. Você está em Recuperação!";
        outSituacao.style.color = "green";
    } else {
        outSituacao.innerHTML = "Ops " + nome + "... Você foi <strong>reprovado(a)</strong>!";
        outSituacao.style.color = "red";
    }

}
// cria uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btResultado");
// registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click", calcularMedia);