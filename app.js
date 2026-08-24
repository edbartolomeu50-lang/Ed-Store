let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({
    nome: nome,
    preco: preco
  });

  atualizarCarrinho();
}

function atualizarCarrinho() {
  const contador = document.getElementById("contadorCarrinho");
  const lista = document.getElementById("listaCarrinho");
  const totalElemento = document.getElementById("totalCarrinho");

  if (contador) {
    contador.textContent = carrinho.length;
  }

  if (!lista || !totalElemento) return;

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>O seu carrinho está vazio.</p>";
    totalElemento.textContent = "0 Kz";
    return;
  }

  let total = 0;

  lista.innerHTML = "";

  carrinho.forEach(function(produto, index) {
    total += produto.preco;

    const item = document.createElement("div");

    item.className = "item-carrinho";

    item.innerHTML = `
      <div>
        <strong>${produto.nome}</strong>
        <p>${produto.preco.toLocaleString("pt-PT")} Kz</p>
      </div>

      <button onclick="removerDoCarrinho(${index})">
        🗑️
      </button>
    `;

    lista.appendChild(item);
  });

  totalElemento.textContent =
    total.toLocaleString("pt-PT") + " Kz";
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function abrirCarrinho() {
  document.getElementById("telaCarrinho").style.display = "block";
  atualizarCarrinho();
}

function fecharCarrinho() {
  document.getElementById("telaCarrinho").style.display = "function filtrarProdutos(categoria) {
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(function(produto) {
    if (produto.dataset.categoria === categoria) {
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  });
}

function mostrarTodos() {
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(function(produto) {
    produto.style.display = "block";
  });
}
