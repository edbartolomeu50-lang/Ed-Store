let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({
    nome: nome,
    preco: preco
  });

  alert("🛒 " + nome + " foi adicionado ao carrinho!");

  atualizarContador();
}

function atualizarContador() {
  const contador = document.getElementById("contadorCarrinho");

  if (contador) {
    contador.textContent = carrinho.length;
  }
}

function abrirCarrinho() {

  if (carrinho.length === 0) {
    alert("🛒 O carrinho está vazio.");
    return;
  }

  let total = 0;
  let mensagem = "🛒 SEU CARRINHO\n\n";

  carrinho.forEach(function(produto) {

    mensagem +=
      "• " +
      produto.nome +
      " — " +
      produto.preco +
      " Kz\n";

    total += produto.preco;
  });

  mensagem +=
    "\n💰 TOTAL: " +
    total +
    " Kz";

  alert(mensagem);
}
