'use strict';

const Header = (update) => {
 const header = $('<header></header>');
 
 const title = $('<form class="form-inline center navbar-fixed-top"></form>');
 const title2 = $('<div class="container-fluid"></div>');
 const title3 = $('<div class="form-inline"></div>');
 const title4 = $('<div class="form-group navbar-left"></div>');
 const title5 = $('<div class="form-group"></div>');
 const search = $('<span class="glyphicon glyphicon-search" aria-hidden="true"></span>');
 const user = $('<span>SEARCH</span>');
 const menu = $('<img src="assets/img/menu.png" href="#" class="img-header" alt="">');
 const message = $('<span>SECTIONS</span>');
 const facebook = $('<img src="assets/img/fb.png" href="#" class="img-header" alt="">');
 const twitter = $('<img src="assets/img/fb.png" href="#" class="img-header" alt="">');
 const linkedin = $('<img src="assets/img/in.png" href="#" class="img-header" alt="">');
 const line = $('<br><hr>');
 
 const logLab = $('<div class="container-fluid center-block"></div>');
 const laboratoria = $('<img src="assets/img/logoicon.png" href="#" class="img-header" alt="">');
 const bajada = $('<br><span>Lunes, Junio 12 de 2017</span><span class="separador-header">|</span><img src="assets/img/cloud.png" href="#" class="img-header" alt=""><span>22°</span>');
 
 const navYellow = $('<nav class="navbar navbar-default nb-yellow"></nav>');
 const contenedor = $('<div class="container-fluid"></div>');
 const contenido = $('<div class="collapse navbar-collapse" id="nv1"></div>');
 const lista = $('<ul class="nav navbar-nav"></ul>');
 const elemento1 = $('<li><a href="#">Lo último</a></li>');
 const elemento2 = $('<li><a href="#">Opinión</a></li>');
 const elemento3 = $('<li><a href="#">Cultura</a></li>');
 const elemento4 = $('<li><a href="#">Perú</a></li>');
 const elemento5 = $('<li><a href="#">Tecnología</a></li>');
 const elemento6 = $('<li><a href="#">Mundo</a></li>');
 const elemento7 = $('<li><a href="#">Economía</a></li>');
 const elemento8 = $('<li><a href="#">Lifestyle</a></li>');
 const elemento9 = $('<li><a href="#">Deporte</a></li>');
 
 const imagen = $('<div class="inicio-imagen"></div>');
 const texto = $('<div class="inicio-texto"></div>');
 const titular1 = $('<h3>MIT BUSCA ESTUDIANTES DE TODO EL MUNDO QUE QUIERAN ESTUDIAR GRATIS</h3>');
 const parrafo1 = $('<p>Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquiera podrá hacerlo.</p>');
 
 
    
 title4.append(menu);
 title4.append(message);
 title4.append(search);
 title4.append(user);
 
 title5.append(facebook);
 title5.append(twitter);
 title5.append(linkedin);
 
 title3.append(title4);
 title3.append(title5);
 title3.append(line);
 
 title2.append(title3);
 title.append(title2);
 
 logLab.append(laboratoria);
 logLab.append(bajada);
 
 navYellow.append(contenedor);
 contenedor.append(contenido);
 contenido.append(lista);
 lista.append(elemento1);
 lista.append(elemento2);
 lista.append(elemento3);
 lista.append(elemento4);
 lista.append(elemento5);
 lista.append(elemento6);
 lista.append(elemento7);
 lista.append(elemento8);
 lista.append(elemento9);
 
 imagen.append(texto);
 texto.append(titular1);
 texto.append(parrafo1);
 
 title.append(logLab);
 title.append(navYellow);
 title.append(imagen);
 
 header.append(title);
    
    return header;
}

 