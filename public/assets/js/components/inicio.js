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
 title.append(logLab);
 
 header.append(title);
    
    return header;
}

 