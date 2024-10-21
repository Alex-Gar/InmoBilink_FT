document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  cAPICardsPropiedades();
}

async function cAPICardsPropiedades() {
  try {
    const url = "/api/info/propiedades";
    const resultado = await fetch(url);
    const propiedades = await resultado.json();
    cardsPropiedades(propiedades);
  } catch (error) {
    console.log(error);
  }
}

function cardsPropiedades(propiedades) {
  propiedades.forEach((propiedad) => {
    const {
      propiedad_id,
      precio,
      oferta,
      precio_oferta,
      disponible,
      metros_cuadrados,
      alberca,
      juegos_infantiles,
      areas_deportivas,
      seguridad,
      jardin,
      elevador,
      wc,
      estacionamientos,
      habitaciones,
      terraza,
      balcon,
      cuarto_servicio,
      agua,
      electricidad,
      internet,
      telefono,
      cable,
      amueblada,
      estado,
      municipio,
      localidad,
      colonia,
      calle,
      no_exterior,
      no_interior,
      img1,
      tipo_propiedad_nombre,
      finalidad_nombre,
    } = propiedad;

    if (disponible == 1) {
      const propiedadElement = document.createElement("a");
      propiedadElement.href = `/propiedad?id=${propiedad_id}`;
      propiedadElement.classList.add("propiedad");

      let htmlContent = `
                <div class="propiedad_img">
                    <picture>
                        <img loading="lazy" src="../build/img/imgDb/${img1}" alt="${img1}" width="600" height="400">
                    </picture>
                    </div >
                    <div class="propiedad_informacion">
                        <div class="cabecera_info contenedor">
                            <div class="titulo_barra">
                                <hr>
                                    <h3 id="tipoPropiedad">${tipo_propiedad_nombre}</h3>
                            </div>
                            <p id="idPropiedad">ALP${propiedad_id}</p>
                        </div>
                        <div class="info_ubic">
                            <div class="info_orga">
                                <div class="ubicacion">
                                    <h4>${estado}, ${municipio}, ${localidad}</h4>
                                    <p>${colonia}, ${calle}</p>
                                </div>
                            </div>
                            <div class="finalidad">
                                <div class="precio">`;
      if (oferta == 1) {
        htmlContent += `
                                    <div class="precios">
                                        <div class="price-container">
                                            <p class="txt_right precio-oferta"> $${precio}</p > 
                                        </div>
                                        <div class="precio">
                                        <p class="txt_right"> $${precio_oferta}</p >
                                        </div> 
                                    </div> `;
      } else {
        htmlContent += `   <div class="precio">
                 <h4><span>$${precio}</span></h4>
                 </div>`;
      }
      htmlContent += ` </div>
                                <div class="">${finalidad_nombre}</div>
                            </div>
                        </div>
                        <div class="contenedor">
                        <hr>
                            <div class="cuerpo_info">
                                ${
                                  habitaciones
                                    ? `<p id='m2'><span>${habitaciones}</span> Habitaciones</p>`
                                    : ""
                                }
                                ${
                                  estacionamientos
                                    ? `<p id='m2'><span>${estacionamientos}</span> Aparcamiento</p>`
                                    : ""
                                }
                                ${
                                  wc
                                    ? `<p id='m2'><span>${wc}</span> Baños</p>`
                                    : ""
                                }
                                ${
                                  metros_cuadrados
                                    ? `<p id='m2'><span>${metros_cuadrados}</span> Metros²</p>`
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            `;
      propiedadElement.innerHTML = htmlContent;
      document.querySelector("#card_propiedad").appendChild(propiedadElement);
    }
  });
}
