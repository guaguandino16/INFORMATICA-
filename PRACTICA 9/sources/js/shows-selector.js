document.addEventListener('DOMContentLoaded', function() {
  const showsNav = document.getElementById('shows-nav');
  
  if (showsNav) {
    const items = showsNav.querySelectorAll('li');
    
    items.forEach((item, index) => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover clase selected de todos
        items.forEach(li => li.classList.remove('selected'));
        
        // Agregar clase selected al clickeado
        this.classList.add('selected');
        
        // Obtener el enlace
        const link = this.querySelector('a');
        if (link) {
          // Efecto de fade out con clase
          showsNav.classList.add('fade-out');
          
          // Después de la animación, navegar solo cuando termine la opacidad
          showsNav.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'opacity') {
              window.location.href = link.href;
            }
          }, { once: true });
        }
      });
      
      // Seleccionar el primer item por defecto
      if (index === 0) {
        item.classList.add('selected');
      }
    });
  }

});