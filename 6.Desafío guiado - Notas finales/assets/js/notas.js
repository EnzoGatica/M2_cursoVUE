const ramos = {
  html: [],
  css: [],
  javaScript: [],
};

function solicitarNotas(ramo) {
  for (let i = 1; i <= 3; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i} de ${ramo}`));
    while (isNaN(nota) || nota < 1 || nota > 7) {
      nota = parseFloat(
        prompt(
          `Nota no válida. Ingrese la nota ${i} de ${ramo} (debe ser un número entre 1 y 7)`
        )
      );
    }
    ramos[ramo].push(nota);
  }
}

function calcularPromedio(notas) {
  let suma = notas.reduce((a, b) => a + b, 0);
  return (suma / notas.length).toFixed(2);
}

solicitarNotas("html");
solicitarNotas("css");
solicitarNotas("javaScript");

function actualizarTabla(ramo) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`nota${i}-${ramo}`).textContent =
      ramos[ramo][i - 1];
  }
  document.getElementById(`promedio-${ramo}`).textContent = calcularPromedio(
    ramos[ramo]
  );
}

actualizarTabla("html");
actualizarTabla("css");
actualizarTabla("javaScript");
