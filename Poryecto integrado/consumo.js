//Pasos paras consumis apis desde el frontend


//1. Construir o declarar la direccciín del servidor
//El cliente o frontend se comunica con el backedn o servidor
//2. construir la conexion hacia el api que 
// llamamos peticion
//3. inplementar la conexion 
export async function namconsumir API(datos){}
let url="localhost:8080/registro"
let peticion={
    metohd:"POST",
    body:JSON.stringify(datos)

} //JSON
let =await fetch(url,peticion)
return await respuesta.json()



