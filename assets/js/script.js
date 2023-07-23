let segundosUno = document.querySelector(".seg");
let segundosDos = document.querySelector(".seg2");
let minutosUno = document.querySelector(".min");
let minutosDos = document.querySelector(".min2");
let horaUno = document.querySelector(".hr");
let horaDos = document.querySelector(".hr2");
let diaUno = document.querySelector(".dia");
let diaDos = document.querySelector(".dia2");
let title = document.querySelector(".flex-container");
let contadorS = 60;
let intervaloID; // Variable para almacenar el intervalo activo

function cuentaRegresiva() {
  let contadorM = 57;
  let contadorH = 23;
  let dias = 8;

  function actualizarContador() {
    if (contadorH === 0 && contadorM === 0 && contadorS === 0) {
      clearInterval(intervaloID);
      console.log("¡Cuenta regresiva terminada!");
    } else {
      // Actualizar los segundos
      contadorS--;
      if (contadorS < 0) {
        contadorS = 59;
        contadorM--;
      }
      // Actualizar los minutos
      if (contadorM < 0) {
        contadorM = 59;
        contadorH--;
      }

      // Mostrar los valores actualizados en los elementos
      segundosUno.textContent = padLeft(contadorS, 2);
      segundosDos.textContent = padLeft(contadorS, 2);
      minutosUno.textContent = padLeft(contadorM, 2);
      minutosDos.textContent = padLeft(contadorM, 2);
      horaUno.textContent = padLeft(contadorH, 2);
      horaDos.textContent = padLeft(contadorH, 2);
      diaUno.textContent = padLeft(dias, 2);
      diaDos.textContent = padLeft(dias, 2);
    }
  }

  // Detener el intervalo anterior, si lo hay
  clearInterval(intervaloID);

  // Iniciar el nuevo intervalo de la cuenta regresiva
  intervaloID = setInterval(actualizarContador, 1000);
}

title.addEventListener("mouseenter", () => {
  cuentaRegresiva();
});

title.addEventListener("mouseleave", (callback) => {
  function horas() {
    let fecha = new Date();
    let segundos = fecha.getSeconds();
    let minutos = fecha.getMinutes();
    let horas = fecha.getHours();
    let dias = fecha.getDay();

    // Mostrar los valores actualizados en los elementos
    segundosUno.textContent = padLeft(segundos, 2);
    segundosDos.textContent = padLeft(segundos, 2);
    minutosUno.textContent = padLeft(minutos, 2);
    minutosDos.textContent = padLeft(minutos, 2);
    horaUno.textContent = padLeft(horas, 2);
    horaDos.textContent = padLeft(horas, 2);
    diaUno.textContent = padLeft(dias, 2);
    diaDos.textContent = padLeft(dias, 2);

    if (segundos == "0") {
      minutosUno.classList.add("minutos");
      minutosDos.classList.add("minutos");
    }
    if (segundos == "10") {
      minutosUno.classList.remove("minutos");
      minutosDos.classList.remove("minutos");
    }
  }

  // Detener el intervalo cuando se sale del hover
  clearInterval(intervaloID);

  // Mostrar la hora actual al salir del hover
  intervaloID = setInterval(horas, 1000);
});

// Función para agregar ceros a la izquierda si es necesario
function padLeft(number, length) {
  return String(number).padStart(length, "0");
}
