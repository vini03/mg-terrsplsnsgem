console.log('Site M.G Terraplanagem carregado');
function enviarWhatsApp() {

let nome = document.querySelector('input[type="text"]').value;
let telefone = document.querySelector('input[type="tel"]').value;
let projeto = document.querySelector('textarea').value;

let mensagem =
`Olá, gostaria de solicitar um orçamento.

Nome: ${nome}
Telefone: ${telefone}

Projeto:
${projeto}`;

let url =
`https://wa.me/5511991687036?text=${encodeURIComponent(mensagem)}`;

window.open(url, '_blank');

}
