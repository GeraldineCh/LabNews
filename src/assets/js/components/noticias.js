'use strict';

const Noticias = (update) => {
 
 const noticias = $('<section class=""col-xs-12></section>');
 const noticia1= $('<div id="noticia1" class="col-xs-4"></div>');
 const contenedor1 = $('<div class="gray-bg"></div>')
 const texto1 = $('<p>El método de la <span class="lab-yellow">Universidad de Stanford</span> para mejorar las calificaciones</p>');
 
 
 noticia1.append(contenedor1);
 contenedor1.append(texto1);
 
 noticias.append(noticia1);
    
    return noticias;
}

 