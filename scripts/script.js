const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const logo = document.querySelector('li.logo');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    if(enlaces.classList.contains('activado')){
        logo.style.display = 'block';
    }else{
        logo.style.display = 'none';
    }
    // Si el documento es 'index.html' posiciono los enlaces a un 'top' diferente al resto de páginas ya que el 'index.html' no tiene overflow en vertical
    // if (window.location.pathname === '/index.html'){
    //     enlaces.style.top = '8vh';
    // }

    ham.classList.toggle('rotar');
    // Escuchar el evento de transición
    ham.addEventListener('transitionend', function() {
        // Eliminar la clase que realiza la transformación
        ham.classList.remove('rotar');
    
        // Aplicar la clase de Bootstrap u otra clase deseada
        ham.classList.toggle('bi-x-lg');
    }, { once: true });
});

window.addEventListener('DOMContentLoaded', function() {
    // Verificar si el documento cargado es 'index.html'
    if (window.location.pathname === '/index.html') {
      // Desactivar la barra de desplazamiento vertical
      document.body.style.overflowY = 'hidden';
  
      // Ajustar la altura del contenido al 100vh
      document.body.style.height = '100vh';
    }
});