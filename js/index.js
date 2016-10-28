var nameElement = document.getElementById('name'),
    portElement = document.getElementById('portfolio'),
    blogElement = document.getElementById('blog'),
    bioElement  = document.getElementById('bio');
    

var nameANIM, portBUTTON;

nameANIM = loadAnimation(nameElement, 'svg', true, true, name_data);
portBUTTON = loadAnimation(portElement, 'svg', false, false, portfolio_data);


portElement.addEventListener("mouseover", portOver);


function buttonOut(ev) {
    if (!checkIfChild(ev.target, button)) {
      buttonAnim.setDirection(-1);
      buttonAnim.play();
      document.removeEventListener('mouseover', buttonOut);
      button.addEventListener('mouseover', buttonOver);
    }
  }

function portOver(){
    portBUTTON.playSegments([0,45], true);
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