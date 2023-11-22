/* -------------------------- BARRA DE NAVEGAÇÃO -------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel");
    const slides = document.querySelectorAll(".slide");
    const indicadoresContainer = document.querySelector(".indicadores");
  
    let index = 0;
  
    // Crie os indicadores
    slides.forEach((_, i) => {
      const indicador = document.createElement("div");
      indicador.classList.add("indicador");
      indicadoresContainer.appendChild(indicador);
  
      indicador.addEventListener("click", () => {
        index = i;
        atualizarCarrossel();
      });
    });
  
    const indicadores = document.querySelectorAll(".indicador");
  
    function atualizarCarrossel() {
      carrossel.style.transform = `translateX(${-index * 100}%)`;
  
      // Atualize a classe ativa do indicador
      indicadores.forEach((indicador, i) => {
        i === index
          ? indicador.classList.add("ativo")
          : indicador.classList.remove("ativo");
      });
    }
  
    // Função para avançar o carrossel automaticamente
    function avancarSlide() {
      index = (index + 1) % slides.length;
      atualizarCarrossel();
    }
  
    // Defina o intervalo para avançar o carrossel a cada 3 segundos
    setInterval(avancarSlide, 3000);
  });

/* -------------------------- CATEGORIAS -------------------------- */

document.getElementById("categoria_roupas").addEventListener("click", function() {
    window.location.href = "categoria_roupas.html";
});

document.getElementById("categoria_shapes").addEventListener("click", function() {
    window.location.href = "categoria_shapes.html";
});

document.getElementById("categoria_tenis").addEventListener("click", function() {
    window.location.href = "categoria_tenis.html";
});

document.getElementById("categoria_bones").addEventListener("click", function() {
    window.location.href = "categoria_bones.html";
});

/* -------------------------- CADASTRO/LOGIN -------------------------- */

function showLogin() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("signup-section").style.display = "none";
}

function showSignup() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("signup-section").style.display = "block";
}

function redirectToIndex() {
    window.location.href = "index.html"; 
    
    return false;
}

/* -------------------------- CARRINHO DE COMPRAS -------------------------- */

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