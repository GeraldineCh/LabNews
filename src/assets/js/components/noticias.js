'use strict';

const Noticias = (update) => {
 
 const noticias = $('<section class="mywhite col-xs-12"></section>');
 const noticia1= $('<div id="noticia1" class="col-xs-5"></div>');
 const noticia11= $('<div id="noticia11"></div>');
 const contenedor1 = $('<div class="gray-bg"></div>')
 const texto1 = $('<p>El método de la <span class="lab-yellow">Universidad de Stanford</span> para mejorar las calificaciones</p>');
 const noticia2= $('<div id="noticia2" class="col-xs-3"></div>');
 const noticia22= $('<div id="noticia22"></div>');
 const contenedor2 = $('<div class="gray-bg"></div>')
 const texto2 = $('<p>Estas son las mejores <span class="lab-yellow">tech startups</span> del mundo</p>');
 const noticia3= $('<div id="noticia3" class="col-xs-3"></div>');
 const noticia33= $('<div id="noticia33"></div>');
 const contenedor3 = $('<div class="gray-bg"></div>')
 const texto3 = $('<p>Voluntarios por la <span class="lab-yellow">educación</span> la combinación perfecta</p>');
 
 
 contenedor1.append(texto1);
 noticia1.append(noticia11);
 noticia1.append(contenedor1);
 
 contenedor2.append(texto2);
 noticia2.append(noticia22);
 noticia2.append(contenedor2);
 
 contenedor3.append(texto3);
 noticia3.append(noticia33);
 noticia3.append(contenedor3);
 
 noticias.append(noticia1);
 noticias.append(noticia2);
 noticias.append(noticia3);

 
    return noticias;
}

 