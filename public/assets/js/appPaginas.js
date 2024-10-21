//Burbuja de whatsApp
jQuery(document).ready(function ($) {
  $("#WABoton").floatingWhatsApp({
    phone: "+522821371363", // Número WhatsApp Business
    popupMessage: "Hola ¿Cómo podemos ayudarte?", // Mensaje pop up
    message: "Hola InmoBilink, ", // Mensaje por defecto
    showPopup: true, // Habilita el pop up
    headerTitle: "WhatsApp Chat", // Título del header
    headerColor: "#25D366", // Color del header
    buttonImage:
      '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" alt="Logo WhatsApp"/>', // Icono WhatsApp
    size: "70px", // Tamaño del icono
    //backgroundColor: '#00000', // Color de fondo del botón
    position: "right", // Posición del icono
    avatar: "https://www.w3schools.com/howto/img_avatar.png", // URL imagen avatar
    avatarName: "Inmobilink", // Nombre del avatar
    avatarRole: "Soporte", // Rol del avatar
    zIndex: "99999", //autoOpenTimeout: 3000,
  });
});
//Nav
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu() {
  nav.style.right = "0px";
  background_menu.style.display = "block";
}

function ocultar_menu() {
  nav.style.right = "-250px";
  background_menu.style.display = "none";
}
