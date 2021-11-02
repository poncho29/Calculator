class Display {
  constructor(valorActual, valorAnterior) {
    this.valorActual = valorActual;
    this.valorAnterior = valorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActualCalc = "";
    this.valorAnteriorCalc = "";
    this.signos = {
      sumar: "+",
      restar: "-",
      multiplicar: "x",
      dividir: "%",
    };
  }

  borrar() {
    this.valorActualCalc = this.valorActualCalc.toString().slice(0, -1);
    this.mostrarValores();
  }

  borrarTodo() {
    this.valorActualCalc = "";
    this.valorAnteriorCalc = "";
    this.tipoOperacion = undefined;
    this.mostrarValores();
  }

  agregarNumero(num) {
    if (num === "." && this.valorActualCalc.includes(".")) return;
    this.valorActualCalc = this.valorActualCalc.toString() + num.toString();
    this.mostrarValores();
  }

  mostrarValores() {
    this.valorActual.textContent = this.valorActualCalc;
    this.valorAnterior.textContent = `${this.valorAnteriorCalc} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnteriorCalc);
    const valorActual = parseFloat(this.valorActualCalc);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActualCalc = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }

  operar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnteriorCalc = this.valorActualCalc || this.valorAnteriorCalc;
    this.valorActualCalc = "";
    this.mostrarValores();
  }
}
