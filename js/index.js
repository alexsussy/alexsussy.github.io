var nameElement = document.getElementById('name'),
    portElement = document.getElementById('portfolio'),
    blogElement = document.getElementById('blog'),
    bioElement  = document.getElementById('bio'),
    contactElement  = document.getElementById('contact'),
    gamesElement = document.getElementById('games');

var nameANIM, portBUTTON, blogBUTTON, bioBUTTON, contactBUTTON, gamesBUTTON;


nameANIM = loadAnimation(nameElement, 'svg', true, false, name_data);
portBUTTON = loadAnimation(portElement, 'svg', false, false, portfolio_data);
blogBUTTON = loadAnimation(blogElement, 'svg', false, false, blog_data);
bioBUTTON = loadAnimation(bioElement, 'svg', false, false, portfolio_data);
contactBUTTON = loadAnimation(contactElement, 'svg', false, false, contact_data);
gamesBUTTON = loadAnimation(gamesElement, 'svg', false, false, portfolio_data);


portElement.onmouseenter=
function portAnimate_Enter(){
    portBUTTON.play();
    portBUTTON.setSpeed(1);
    portBUTTON.setDirection(1);
}

portElement.onmouseleave=
function portAnimate_Exit(){
    portBUTTON.play();
    portBUTTON.setDirection(-1);
    portBUTTON.setSpeed(2);
}


blogElement.onmouseenter=
function blogAnimate_Enter(){
    blogBUTTON.setSpeed(1);
    blogBUTTON.setDirection(1);
    blogBUTTON.play();
}

blogElement.onmouseleave=
function blogAnimate_Exit(){
    blogBUTTON.setDirection(-1);
    blogBUTTON.setSpeed(2);
    blogBUTTON.play();
}


contactElement.onmouseenter=
function contactAnimate_Enter(){
    contactBUTTON.setSpeed(1);
    contactBUTTON.setDirection(1);
    contactBUTTON.play();
}

contactElement.onmouseleave=
function contactAnimate_Exit(){
    contactBUTTON.setDirection(-1);
    contactBUTTON.setSpeed(2);
    contactBUTTON.play();
}


function loadAnimation(container, renderer, autoplay, loop, data) {
  var animData = {
    container: container,
    renderer: renderer,
    autoplay: autoplay,
    loop: loop,
    animationData: data
  };
  return bodymovin.loadAnimation(animData);
}