(function () {
  const graficaNoPropiedades = document.getElementById("graficaNoPropiedades");
  obtenerDatos();

  if (graficaNoPropiedades) {
    async function obtenerDatos() {
      const url = "/api/no/propiedades";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      new Chart(graficaNoPropiedades, {
        type: "doughnut",
        data: {
          labels: resultado.map((datos) => datos.etiqueta),
          datasets: [
            {
              label: "#",
              data: resultado.map((datos) => datos.valor),
              backgroundColor: [
                "rgba(255, 99, 132, 0.3)",
                "rgba(54, 162, 235, 0.3)",
              ],
              borderWidth: 0.5,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
})();
