var nameElement = document.getElementById('name'),
    portElement = document.getElementById('portfolio'),
    blogElement = document.getElementById('blog'),
    bioElement  = document.getElementById('bio'),
    contactElement  = document.getElementById('contact');

    

var nameANIM, portBUTTON, blogBUTTON, bioBUTTON, contactBUTTON;

nameANIM = loadAnimation(nameElement, 'svg', true, true, name_data);
portBUTTON = loadAnimation(portElement, 'svg', false, false, portfolio_data);
blogBUTTON = loadAnimation(blogElement, 'svg', false, false, portfolio_data);
bioBUTTON = loadAnimation(bioElement, 'svg', false, false, portfolio_data);
contactBUTTON = loadAnimation(contactElement, 'svg', false, false, portfolio_data);


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