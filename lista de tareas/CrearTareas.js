const prompt = require("prompt-sync")();

    function crearTarea(tareas, cantidadTareas) 
{   //primero pedir los datos
    let titulo = prompt("Ingrese el título de la tarea: ");
    let descripcion = prompt("Ingrese la descripción (opcional):");
    let vencimiento = prompt("Ingrese la fecha de vencimiento (ej: 2025-09-30) o deje vacío:");
    let dificultad = prompt("Ingrese dificultad (1=fácil, 2=medio, 3=difícil). ");

        if (dificultad === "1")
        {
            dificultad = "facil";
        }
        else if (dificultad === "2")
        {
            dificultad = "medio";
        }
        else if (dificultad === "3")
        {
            dificultad = "dificil";
        }

    let tarea = //objeto de la tarea individual
    { 
        titulo: titulo,
        descripcion: descripcion || "Sin descripción",
        estado:"pendiente",
        fechaCreacion: new Date().toLocaleString(),
        vencimiento: vencimiento || "Sin fecha de vencimiento",
        dificultad: dificultad || "Fácil",
    }

console.log("Tarea guardada con exito:", tarea);

    //guardo la tarea en el array (manualmente para no usar push)

    tareas[cantidadTareas] = tarea;
    return cantidadTareas + 1;
    
}

module.exports = crearTarea; 