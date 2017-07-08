'use strict';
const root = $('.root');
const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
    /*wrapper.append(Header());
    wrapper.append(Noticias());*/
 wrapper.append(Mundo());
 
  
	root.append(wrapper);
}

const update = function (){
  render(root);
};

$( function() {
	/*$.getJSON("./api/backup.json", function (result) {
	});*/
		const root = $('.root');
		render(root);
});