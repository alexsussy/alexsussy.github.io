var nameElement = document.getElementById('name'),
    portElement = document.getElementById('portfolio'),
    blogElement = document.getElementById('blog'),
    bioElement  = document.getElementById('bio'),
    contactElement  = document.getElementById('contact');

var nameANIM, portBUTTON, blogBUTTON, bioBUTTON, contactBUTTON;


nameANIM = loadAnimation(nameElement, 'svg', true, false, name_data);
portBUTTON = loadAnimation(portElement, 'svg', false, true, portfolio_data);
blogBUTTON = loadAnimation(blogElement, 'svg', false, true, blog_data);
bioBUTTON = loadAnimation(bioElement, 'svg', false, true, portfolio_data);
contactBUTTON = loadAnimation(contactElement, 'svg', false, true, contact_data);

portBUTTON.stop();
blogBUTTON.stop();
bioBUTTON.stop();
contactBUTTON.stop();

portElement.onmouseenter=
function portAnimate_Enter(){
    portBUTTON.setSpeed(1);
    portBUTTON.setDirection(1);
    portBUTTON.playSegments([[portBUTTON.currentFrame,45],[46,300]],false);
}

portElement.onmouseleave=
function portAnimate_Exit(){
    portBUTTON.setDirection(-1);
    portBUTTON.setSpeed(2);
    portBUTTON.playSegments([[portBUTTON.currentFrame,0],[0,0]],false);
    portBUTTON.goToAndStop(0);
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