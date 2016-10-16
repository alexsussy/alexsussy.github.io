var nameElement = document.getElementById('name'),
    portElement = document.getElementById('portfolio');

var nameANIM, portANIM;

nameANIM = loadAnimation(nameElement, 'svg', true, true, name_data);

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
