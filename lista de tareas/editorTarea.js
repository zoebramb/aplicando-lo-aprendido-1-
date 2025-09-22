const prompt = require("prompt-sync")();

function editorTarea(i, tareas)
{
    let nuevoTitulo = prompt("\nIngrese el nuevo título de la tarea (deje vacío para no cambiar): ");
    let nuevoDescripcion = prompt("Ingrese la nueva descripción (deje vacío para no cambiar): ");
    let nuevoEstado = prompt("Ingrese el nuevo estado (pendiente, en curso, terminada) o deje vacío para no cambiar: ");
    let nuevoVencimiento = prompt("Ingrese la nueva fecha de vencimiento (ej: 2025-09-30) o deje vacío para no cambiar: ");
    let nuevaDificultad = prompt("Ingrese nueva dificultad (1=fácil, 2=medio, 3=difícil) o deje vacío para no cambiar: ");

     if (nuevaDificultad === "1")
        {
            nuevaDificultad = "facil";
        }
        else if (nuevaDificultad === "2")
        {
            nuevaDificultad = "medio";
        }
        else if (nuevaDificultad === "3")
        {
            nuevaDificultad = "dificil";
        }


    tareas[i].titulo = nuevoTitulo || tareas[i].titulo;
    tareas[i].descripcion = nuevoDescripcion || tareas[i].descripcion;
    tareas[i].estado = nuevoEstado || tareas[i].estado;
    tareas[i].vencimiento = nuevoVencimiento || tareas[i].vencimiento;
    tareas[i].dificultad = nuevaDificultad || tareas[i].dificultad;

    console.log("\nTarea actualizada con éxito:", tareas[i]);

}
module.exports = editorTarea;