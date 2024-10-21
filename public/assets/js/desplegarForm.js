document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});
function iniciarApp() {
  desplegarFormulario();
}

function desplegarFormulario() {
  const mostrarFormu = document.getElementById("mostrarFormularioBtn");
  mostrarFormu.addEventListener("click", function () {
    const formulario = document.getElementById("formularioContactanosOcultar");
    if (formulario) {
      // Verifica el estado actual del formulario y alterna la visibilidad
      if (
        formulario.style.display === "none" ||
        formulario.style.display === ""
      ) {
        formulario.style.display = "block";
      } else {
        formulario.style.display = "none";
      }
    }
  });
}
