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

/* tabs para cambiar de pestaña */
function openInfo(tabName) {
  var i;
  var x = document.getElementsByClassName("info");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
/*  */

/* modo noche cambiando variables de colores */

/* function toggleDarkMode() {
  const root = document.documentElement;
  const currentMode = root.getAttribute("data-mode");

  if (currentMode === "dark") {
    root.setAttribute("data-mode", "light");
    root.style.setProperty("--backgroundcolor", "#e6e6e6");
    root.style.setProperty("--cardscolor", "#f5f5f5");
    root.style.setProperty("--fontcolor", "#3c3c3f");
    root.style.setProperty("--bluecolor", "#1565C0");
    root.style.setProperty("--red", "#C62828");
  } else {
    root.setAttribute("data-mode", "dark");
    root.style.setProperty("--backgroundcolor", "#1f1f1f");
    root.style.setProperty("--cardscolor", "#262626");
    root.style.setProperty("--fontcolor", "#ececec");
    root.style.setProperty("--bluecolor", "#64b5f6");
    root.style.setProperty("--red", "#e57373");
  }
} */

/*  */

/* modo oscuro guardando en el local storage */

document.addEventListener("DOMContentLoaded", function () {
  // Aplicar el modo oscuro si está guardado en el localStorage
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    enableDarkMode();
  }
});

function toggleDarkMode() {
  const currentMode = localStorage.getItem("darkMode") === "true";
  localStorage.setItem("darkMode", !currentMode);
  if (!currentMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function enableDarkMode() {
  const root = document.documentElement;
  root.setAttribute("data-mode", "dark");
  root.style.setProperty("--backgroundcolor", "#1f1f1f");
  root.style.setProperty("--cardscolor", "#262626");
  root.style.setProperty("--fontcolor", "#ececec");
  root.style.setProperty("--bluecolor", "#64b5f6");
  root.style.setProperty("--red", "#e57373");
}

function disableDarkMode() {
  const root = document.documentElement;
  root.setAttribute("data-mode", "light");
  root.style.setProperty("--backgroundcolor", "#e6e6e6");
  root.style.setProperty("--cardscolor", "#f5f5f5");
  root.style.setProperty("--fontcolor", "#3c3c3f");
  root.style.setProperty("--bluecolor", "#1565C0");
  root.style.setProperty("--red", "#C62828");
}

/*  */