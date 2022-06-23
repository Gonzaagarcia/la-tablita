window.onload = paginaCargada;

function paginaCargada() {
    let boton = document.getElementById("enviar");
    boton.onclick = validarForm;
}

function validarForm() {
    let email = document.getElementById("inputCorreoElectronico");
    if(email.value == "")
    {
      alert("Ingrese su email");
      return;
    }
    let direccion = document.getElementById("inputDireccion");
    if(direccion.value == "")
    {
      alert("Ingrese su dirección");
      return;
    }
    let pedido = document.getElementById("inputPedido");
    if(pedido.value == "")
    {
      alert("Ingrese su pedido");
      return;
    }
    let formulario = document.getElementById("retorno");
    formulario.submit();
}