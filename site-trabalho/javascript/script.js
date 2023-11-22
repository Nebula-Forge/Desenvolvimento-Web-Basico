/* -------------------------- BARRA DE NAVEGAÇÃO -------------------------- */

// Aguarde até que o conteúdo da página esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  
  // Seleciona o elemento do carrossel e os slides dentro dele
  const carrossel = document.querySelector(".carrossel");
  const slides = document.querySelectorAll(".slide");
  
  // Seleciona o container para os indicadores
  const indicadoresContainer = document.querySelector(".indicadores");

  // Inicializa o índice do slide
  let index = 0;

  // Crie os indicadores correspondentes aos slides
  slides.forEach((_, i) => {
    const indicador = document.createElement("div");
    indicador.classList.add("indicador");
    indicadoresContainer.appendChild(indicador);

    // Adiciona um ouvinte de evento para cada indicador, atualizando o carrossel ao ser clicado
    indicador.addEventListener("click", () => {
      index = i;
      atualizarCarrossel();
    });
  });

  // Obtém todos os indicadores após a criação
  const indicadores = document.querySelectorAll(".indicador");

  // Função para atualizar a exibição do carrossel e indicadores
  function atualizarCarrossel() {
    carrossel.style.transform = `translateX(${-index * 100}%)`;

    // Atualiza a classe 'ativo' do indicador correspondente ao slide atual
    indicadores.forEach((indicador, i) => {
      i === index
        ? indicador.classList.add("ativo")
        : indicador.classList.remove("ativo");
    });
  }

  // Função para avançar automaticamente para o próximo slide
  function avancarSlide() {
    index = (index + 1) % slides.length;
    atualizarCarrossel();
  }

  // Define um intervalo para avançar automaticamente o carrossel a cada 3 segundos
  setInterval(avancarSlide, 3000);
});


/* -------------------------- CATEGORIAS -------------------------- */

// Adiciona um ouvinte de evento para o clique na categoria "Roupas"
document.getElementById("categoria_roupas").addEventListener("click", function() {
  // Redireciona para a página correspondente à categoria "Roupas"
  window.location.href = "categoria_roupas.html";
});

// Adiciona um ouvinte de evento para o clique na categoria "Shapes"
document.getElementById("categoria_shapes").addEventListener("click", function() {
  // Redireciona para a página correspondente à categoria "Shapes"
  window.location.href = "categoria_shapes.html";
});

// Adiciona um ouvinte de evento para o clique na categoria "Tênis"
document.getElementById("categoria_tenis").addEventListener("click", function() {
  // Redireciona para a página correspondente à categoria "Tênis"
  window.location.href = "categoria_tenis.html";
});

// Adiciona um ouvinte de evento para o clique na categoria "Bonés"
document.getElementById("categoria_bones").addEventListener("click", function() {
  // Redireciona para a página correspondente à categoria "Bonés"
  window.location.href = "categoria_bones.html";
});

/* -------------------------- CADASTRO/LOGIN -------------------------- */

// Função para exibir a seção de login e ocultar a seção de cadastro
function showLogin() {
  document.getElementById("login-section").style.display = "block";
  document.getElementById("signup-section").style.display = "none";
}

// Função para exibir a seção de cadastro e ocultar a seção de login
function showSignup() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("signup-section").style.display = "block";
}

// Função para redirecionar para a página inicial (index.html)
function redirectToIndex() {
  // Redireciona para a página inicial
  window.location.href = "index.html"; 
  
  // Retorna false para evitar o envio do formulário (comportamento padrão do formulário)
  return false;
}

/* -------------------------- CARRINHO DE COMPRAS -------------------------- */

// Função para calcular o total do carrinho
function calcularTotal() {
  // Obter todos os elementos com a classe "item-price"
  var precos = document.getElementsByClassName("item-price");
  
  // Inicializar a variável total
  var total = 0;

  // Iterar sobre os elementos e somar os valores
  for (var i = 0; i < precos.length; i++) {
      // Extrair o valor do texto e converter para número
      var preco = parseFloat(precos[i].textContent.replace("R$ ", "").replace(",", "."));

      // Adicionar ao total
      total += preco;
  }

  // Atualizar o elemento com a classe "cart-total"
  document.querySelector(".cart-total").textContent = "Total: R$ " + total.toFixed(2);
}

// Função para exibir os itens do carrinho
function exibirCarrinho() {
  // Obter o carrinho armazenado localmente
  var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  // Obter elementos do DOM para atualização
  var cartItemsElement = document.getElementById('cart-items');
  var cartTotalElement = document.getElementById('cart-total');

  // Limpar o conteúdo atual do carrinho
  cartItemsElement.innerHTML = '';

  // Adicionar cada item ao carrinho
  carrinho.forEach(function (item) {
      var itemElement = document.createElement('div');
      itemElement.innerHTML = `
          <div class="item">
              <img src="${item.imagem}" alt="${item.nome}">
              <div class="item-details">
                  <div class="item-name">${item.nome}</div>
                  <div class="item-price">R$ ${item.preco.toFixed(2)}</div>
              </div>
          </div>
      `;
      cartItemsElement.appendChild(itemElement);
  });

  // Calcular o total do carrinho
  var total = carrinho.reduce(function (acc, item) {
      return acc + item.preco;
  }, 0);

  // Atualizar o total no carrinho
  cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

/* -------------------------- PÁGINAS DE PRODUTOS -------------------------- */

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nomeItem, precoItem, imagemItem) {
  // Crie um objeto representando o item
  var item = {
      nome: nomeItem,
      preco: precoItem,
      imagem: imagemItem
  };

  // Obtenha o carrinho do armazenamento local ou inicialize um array vazio
  var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  // Adicione o novo item ao carrinho
  carrinho.push(item);
  
  // Atualize o carrinho no armazenamento local
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Feedback visual no topo da página
  var feedback = document.getElementById('feedback');
  feedback.textContent = `${nomeItem} adicionado ao carrinho.`;
  feedback.classList.add('show');

  // Remova a classe de feedback após 2 segundos
  setTimeout(() => {
      feedback.classList.remove('show');
      feedback.textContent = '';
  }, 2000);
}

// Adicione uma classe de animação ao elemento "item"
item.classList.add('item-added');

// Remova a classe após a animação (depois de 1 segundo neste exemplo)
setTimeout(() => {
    item.classList.remove('item-added');
}, 1000);
