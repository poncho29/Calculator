const valorAnterior = document.getElementById("valor-anterior");
const valorActual = document.getElementById("valor-actual");
const botones = document.querySelectorAll(".numero");
const btnOperadores = document.querySelectorAll(".operador");

const display = new Display(valorActual, valorAnterior);

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.agregarNumero(boton.innerHTML);
  });
});

btnOperadores.forEach((boton) => {
  boton.addEventListener("click", () => display.operar(boton.value));
});
