let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento) {
    evento.preventDefault()
    

    let cajaNombres=document.getElementById("cajanombres")
    let cajaApellidos=document.getElementById("cajaapellidos")
    let cajaFechaNacimiento=document.getElementById("cajafechanacimiento")
    let cajaDireccion=document.getElementById("cajadireccion")
    let cajaTelefono=document.getElementById("cajatelefono")
    let datosDelFormulario={
        nombres:cajaNombres.value,
        apellidos:cajaApellidos.value,
        fechanacimiento:cajaFechaNacimiento.value,
        direccion:cajaDireccion.value,
        telefono:cajaTelefono.value,
        
        
    }

    Swal.fire({
  title: "Bienvenido!",
  text: "Has sido registrado!",
  icon: "success"
});


})