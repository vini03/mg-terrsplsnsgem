
function enviarWhatsApp() {

let nome = document.getElementById("nome").value;
let telefone = document.getElementById("telefone").value;
let projeto = document.getElementById("projeto").value;


let mensagem =
`Olá, gostaria de solicitar um orçamento.

Nome: ${nome}

Telefone: ${telefone}

Descrição do Serviço:
${projeto}`;

let link =
`https://wa.me/5511991687036?text=${encodeURIComponent(mensagem)}`;

window.open(link, "_blank");
}
