var nameElement = document.getElementById('name'),
    portElement = document.getElementById('portfolio'),
    blogElement = document.getElementById('blog'),
    bioElement  = document.getElementById('bio'),
    contactElement  = document.getElementById('contact'),
    gamesElement = document.getElementById('games');

var nameANIM, portBUTTON, blogBUTTON, bioBUTTON, contactBUTTON, gamesBUTTON;


nameANIM = loadAnimation(nameElement, 'svg', true, false, name_data);
portBUTTON = loadAnimation(portElement, 'svg', false, true, portfolio_data);
blogBUTTON = loadAnimation(blogElement, 'svg', false, true, blog_data);
bioBUTTON = loadAnimation(bioElement, 'svg', false, true, portfolio_data);
contactBUTTON = loadAnimation(contactElement, 'svg', false, true, contact_data);
gamesBUTTON = loadAnimation(gamesElement, 'svg', false, true, portfolio_data);


portBUTTON.stop();
blogBUTTON.stop();
bioBUTTON.stop();
contactBUTTON.stop();

portElement.onmouseenter=
function portAnimate_Enter(){
    portBUTTON.setSpeed(1);
    portBUTTON.setDirection(1);
    portBUTTON.playSegments([[portBUTTON.currentFrame,45],[45,300]],true);
}

portElement.onmouseleave=
function portAnimate_Exit(){
    portBUTTON.setDirection(-1);
    portBUTTON.setSpeed(2);
    portBUTTON.playSegments([[portBUTTON.currentFrame,0],[0,0]],true);
    portBUTTON.goToAndStop(0);
}


blogElement.onmouseenter=
function blogAnimate_Enter(){
    blogBUTTON.setSpeed(1);
    blogBUTTON.setDirection(1);
    blogBUTTON.playSegments([[blogBUTTON.currentFrame,45],[45,300]],true);
}

blogElement.onmouseleave=
function blogAnimate_Exit(){
    blogBUTTON.setDirection(-1);
    blogBUTTON.setSpeed(2);
    blogBUTTON.playSegments([[blogBUTTON.currentFrame,0],[0,0]],true);
    blogBUTTON.goToAndStop(0);
}


contactElement.onmouseenter=
function contactAnimate_Enter(){
    contactBUTTON.setSpeed(1);
    contactBUTTON.setDirection(1);
    contactBUTTON.playSegments([[contactBUTTON.currentFrame,45],[45,300]],true);
}

contactElement.onmouseleave=
function contactAnimate_Exit(){
    contactBUTTON.setDirection(-1);
    contactBUTTON.setSpeed(2);
    contactBUTTON.playSegments([[contactBUTTON.currentFrame,0],[0,0]],true);
    contactBUTTON.goToAndStop(0);
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