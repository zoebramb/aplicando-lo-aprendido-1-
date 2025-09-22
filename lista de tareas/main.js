const prompt = require("prompt-sync")();
const crearTarea = require ("./CrearTareas");
const menuVerTareas = require("./menuVerTareas");
const buscarTarea = require("./buscarTarea");

    let tareas=[];//array para guardar todas las tareas
    let cantidadTareas=0;
    let opcion;

    
    
while (opcion != "4")
{
    console.log("1. Crear tarea\n2. Ver tareas\n3. Buscar Tarea\n4. Salir");

    opcion = prompt("\nSeleccione una opción: ");

    switch (opcion)
    {
        case "1":
            cantidadTareas = crearTarea(tareas, cantidadTareas); // ya que la func devuelve cant tareas, la guardo en donde va
            break;
        case "2":
            menuVerTareas(tareas, cantidadTareas);
        break;
        case "3":
            buscarTarea(tareas, cantidadTareas);
        break;
        case "4":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida, intente de nuevo.");
            break;
    }
    
}
