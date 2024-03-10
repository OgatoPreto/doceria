function redirecionarParaLink(url) {
    window.location.href = url;
};

const imgClicavel = document.getElementById('imgClicavel');
const logoImg = document.getElementById('idLogoImg');

imgClicavel.addEventListener('click', function(){
  logoImg.classList.toggle('otter');
  setTimeout(function() {
    if (logoImg.classList.contains('otter')) {
      imgClicavel.src = "img/logo3.jpg";
    } else {
      imgClicavel.src = "img/logo.jpeg";
    }
  }, 650);
});

const divClicavel = document.getElementById('divClicavel');
const apareceu = document.getElementById('apareceu');

divClicavel.addEventListener('click', function(){
  apareceu.classList.toggle('show');
});

const footer = document.querySelector('.footer');

// Adiciona um ouvinte de evento para detectar quando a animação da div #apareceu estiver completa
apareceu.addEventListener('transitionend', function() {
    // Obtém a altura total da div #principal após a animação
    const alturaPrincipal = document.getElementById('principal').offsetHeight;

    // Define a posição do footer para que ele fique no final da div #principal após a animação
    footer.style.top = alturaPrincipal + 'px';
});