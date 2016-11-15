var nameElement = document.getElementById('name'),
    portElement = document.getElementById('portfolio'),
    blogElement = document.getElementById('blog'),
    bioElement  = document.getElementById('bio'),
    contactElement  = document.getElementById('contact');

var nameANIM, portBUTTON, blogBUTTON, bioBUTTON, contactBUTTON;

nameANIM = loadAnimation(nameElement, 'svg', true, true, name_data);
portBUTTON = loadAnimation(portElement, 'svg', false, true, portfolio_data);
blogBUTTON = loadAnimation(blogElement, 'svg', false, false, portfolio_data);
bioBUTTON = loadAnimation(bioElement, 'svg', false, false, portfolio_data);
contactBUTTON = loadAnimation(contactElement, 'svg', false, false, portfolio_data);

portBUTTON.stop();

portElement.onmouseenter = portAnimate_Enter;
portElement.onmouseleave = portAnimate_Exit;

function portAnimate_Enter(){
    portBUTTON.setSpeed(1);
    portBUTTON.setDirection(1);
    portBUTTON.playSegments([[0,45],[46,300]],true);
}

function portAnimate_Exit(){
    portBUTTON.setSpeed(2);
    portBUTTON.setDirection(-1);
    portBUTTON.playSegments([portBUTTON.currentFrame,0], true);
    portBUTTON.addEventListener('loopComplete', portLoopComplete);
}

function portLoopComplete(){
    portBUTTON.removeEventListener('loopComplete', portLoopComplete);
    portBUTTON.stop();
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