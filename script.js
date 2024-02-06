function agregarTooltip(elementoId, textoTooltip) {
  const contenedor = document.getElementById(elementoId);

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerText = textoTooltip;
  document.body.appendChild(tooltip);

  contenedor.addEventListener('mousemove', (event) => {
    tooltip.style.display = 'block';
    tooltip.style.left = event.pageX + 10 +'px';
    tooltip.style.top = event.pageY + 10 +'px';
  });

  contenedor.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
}

agregarTooltip('elemento1', 'Ir a la información del conductor');
agregarTooltip('elemento2', 'Desvincular conductor');
agregarTooltip('driver-photo', 'Ampliar foto');

/* modificar fondo */
document.getElementById('cambiarImagen').addEventListener('click', function() {
  // Obtén el elemento al que deseas cambiar la imagen de fondo
  var miElemento = document.getElementById('body');
  // Cambia la propiedad background-image
  miElemento.style.backgroundImage = 'url(images/2.jpg)';
});

document.getElementById('cambiarImagen2').addEventListener('click', function() {
  // Obtén el elemento al que deseas cambiar la imagen de fondo
  var miElemento = document.getElementById('body');
  // Cambia la propiedad background-image
  miElemento.style.backgroundImage = 'url(images/1.jpg)';
});

document.getElementById('cambiarImagen3').addEventListener('click', function() {
  // Obtén el elemento al que deseas cambiar la imagen de fondo
  var miElemento = document.getElementById('body');
  // Cambia la propiedad background-image
  miElemento.style.backgroundImage = 'url(images/background2.png)';
});

document.getElementById('cambiarImagen4').addEventListener('click', function() {
  // Obtén el elemento al que deseas cambiar la imagen de fondo
  var miElemento = document.getElementById('body');
  // Cambia la propiedad background-image
  miElemento.style.backgroundImage = 'url(images/3.jpg)';
});


function openInfo(tabName) {
  var i;
  var x = document.getElementsByClassName("info");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}