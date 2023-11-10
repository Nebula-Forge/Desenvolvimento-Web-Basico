// Lista de URLs de imagens
var images = ["assets/sitebg.png", "assets/sitebg2.png", "assets/sitebg3.png"];

// Índice atual da imagem
var currentIndex = 0;

// Seleciona a seção de cabeçalho
var headerSection = document.querySelector('.header');

// Função para alterar o plano de fundo
function changeBackground() {
    // Altera o plano de fundo da seção de cabeçalho
    headerSection.style.backgroundImage = "linear-gradient(rgba(144, 12, 63, 0.7), rgba(144, 12, 63, 0.7)), url('" + images[currentIndex] + "')";
    
    // Atualiza o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % images.length;
}

// Chama a função para alterar o plano de fundo em um intervalo de 5 segundos (5000 milissegundos)
setInterval(changeBackground, 5000);

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se há um fragmento na URL (por exemplo, #login ou #signup)
    var fragment = window.location.hash.substr(1);

    // Se o fragmento for login ou signup, exibe a seção correspondente
    if (fragment === "login") {
        showLogin();
    } else if (fragment === "signup") {
        showSignup();
    } else {
        // Se nenhum fragmento estiver presente, exibe o padrão (login)
        showLogin();
    }
});

function showLogin() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("signup-section").style.display = "none";
}

function showSignup() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("signup-section").style.display = "block";
}