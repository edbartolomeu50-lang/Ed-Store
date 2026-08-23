let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({
    nome: nome,
    preco: preco
  });

  atualizarCarrinho();

  alert("🛒 " + nome + " foi adicionado ao carrinho!");
}

function atualizarCarrinho() {
  const contador = document.getElementById("contadorCarrinho");

  if (contador) {
    contador.textContent = carrinho.length;
  }
}

function abrirCarrinho() {
  if (carrinho.length === 0) {
    alert("🛒 O seu carrinho está vazio.");
    return;
  }

  let texto = "🛒 SEU CARRINHO\n\n";
  let total = 0;

  carrinho.forEach((produto, index) => {
    texto +=
      (index + 1) +
      ". " +
      produto.nome +
      " — " +
      produto.preco.toLocaleString("pt-PT") +
      " Kz\n";

    total += produto.preco;
  });

  texto +=
    "\n💰 Total: " +
    total.toLocaleString("pt-PT") +
    " Kz";

  alert(texto);
}
