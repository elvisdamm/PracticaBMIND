function enviar() {
    let valido = true;
    let formulario = document.forms.formulario;
    let nombre = formulario.name;
    let ape = formulario.ape;
    let usu = formulario.usu;
    let condiciones = formulario.condiciones;

    var filterNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if (!filterNombre.test(nombre.value)) {
        alert('Nombre invalido');
        valido = false;
    }

    if (!filterNombre.test(ape.value)) {
        alert('Apellido invalido');
        valido = false;
    }

    var filterUsu = /^[A-Za-z0-9]+$/;
    if (!filterUsu.test(usu.value)) {
        alert('Formato de usuario invalido');
        valido = false;
    }

    if (!condiciones.checked) {
        alert('Debe aceptar las condiciones');
        valido = false;
    }

    if (valido) {
        ver_valores();
    }
}


function ver_valores() {
    var num = [];
    for (let i = 1; i <= 5; i++) {
        num[i] = document.getElementById(i).value;
    }
    var ventana = window.open('', '', 'width=500, height=300');
    ventana.document.write("<table>");
    ventana.document.write("<tr>");
    ventana.document.write("<th>Nombre</th>");
    ventana.document.write("<th>" + num[1] + "</th>");
    ventana.document.write("</tr>");
    ventana.document.write("<tr>");
    ventana.document.write("<th>Apellidos</th>");
    ventana.document.write("<th>" + num[2] + "</th>");
    ventana.document.write("</tr>");
    ventana.document.write("<tr>");
    ventana.document.write("<th>Usuario</th>");
    ventana.document.write("<th>" + num[3] + "</th>");
    ventana.document.write("</tr>");
    ventana.document.write("<tr>");
    ventana.document.write("<th>Contraseña</th>");
    ventana.document.write("<th>" + num[4] + "</th>");
    ventana.document.write("</tr>");
    ventana.document.write("<tr>");
    ventana.document.write("<th>Comentarios</th>");
    ventana.document.write("<th>" + num[5] + "</th>");
    ventana.document.write("</tr>");
    ventana.document.write("</table>");
}



function evento() {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        event: "custom_click"
    })
}
