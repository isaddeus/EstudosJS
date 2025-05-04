// EXERCÍCIO 1  5/4/2025

let nome = prompt("Qual é o seu nome?")
let idade = Number("Qual é a sua idade?")

if (idade < 18) {
    console.log("Usuário menor de idade. Acesso negado.");

} 
else if (idade >= 60) {
    console.log("Usuário idoso. Acesso liberado.");
} 
else {
    console.log("Usuário maior de idade. Acesso liberado.");
} 


let pergunta = prompt("Você deseja saber quantos anos faltam para você completar 100 anos? (sim/não)")
if (pergunta === "sim") {
    let anosFaltando = 100 - idade
    console.log("Faltam" + anosFaltando + "anos para você completar 100 anos.");
} else if (pergunta === "não") {
    console.log("Você preferiu não saber.")
}

// EXERCÍCIO 2
switch ("Em qual dia da semana estamos?") {
    case "domingo" :
        console.log("Hoje é domingo, pé de caximbo.")
        break;
    case "segunda-feira" :
        console.log("Hoje é o pior dia da semana (segunda-feira).")
        break;
    case "terça-feira" :
        console.log("Hoje é terça-feira.") 
        break;
    case "quarta-feira" :
        console.log("Hoje é quarta-feira.")
        break;
    case "quinta-feira":
        console.log("Hoje é quinta-feira.")
        break;
    case "sexta-feira":
        console.log("Sextou!")
        break; 
    case "sábado":
        console.log("Hoje é sábado.")
        break;
    default:
        console.log("Dia inválido.")
        break;
}