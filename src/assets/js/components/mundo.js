'use strict';

const Mundo = (update) => {
 
 const mundo = $('<section class="mywhite col-xs-12"></section>');
 
 const mundo1= $('<div id="mundo1" class="col-xs-5"></div>');
 const mundo11= $('<div id="mundo11"></div>');
 const contenedor1 = $('<div class="gray-bg"></div>')
 const texto1 = $('<p>El método de la <span class="lab-yellow">Universidad de Stanford</span> para mejorar las calificaciones</p>');
 
 const mundo2= $('<div id="mundo2" class="col-xs-3"></div>');
 const mundo22= $('<div id="mundo22"></div>');
 const contenedor2 = $('<div class="gray-bg"></div>')
 const texto2 = $('<p>Estas son las mejores <span class="lab-yellow">tech startups</span> del mundo</p>');
 
 const mundo3= $('<div id="mundo3" class="col-xs-3"></div>');
 const mundo33= $('<div id="mundo33"></div>');
 const contenedor3 = $('<div class="gray-bg"></div>')
 const texto3 = $('<p>Voluntarios por la <span class="lab-yellow">educación</span> la combinación perfecta</p>');
 
 
 contenedor1.append(texto1);
 mundo1.append(mundo11);
 mundo1.append(contenedor1);
 
 contenedor2.append(texto2);
 mundo2.append(mundo22);
 mundo2.append(contenedor2);
 
 contenedor3.append(texto3);
 mundo3.append(mundo33);
 mundo3.append(contenedor3);
 
 mundo.append(mundo1);
 mundo.append(mundo2);
 mundo.append(mundo3);

 
    return mundo;
}

 