const editorTarea = require("./editorTarea");
const main = require("./main");
const prompt = require("prompt-sync")();

function detalleTarea(detalle, tareas)
{
    let i = detalle - 1;
    let editor;
    while(editor !== 0 || editor !== 1)
    {        
    console.log("\n--- Detalle de la tarea ---");
    console.log(`\nTítulo: ${tareas[i].titulo}`);
    console.log(`Descripción: ${tareas[i].descripcion}`);
    console.log(`Estado: ${tareas[i].estado}`);
    console.log(`Fecha de creación: ${tareas[i].fechaCreacion}`);
    console.log(`Dificultad: ${tareas[i].dificultad}`);
    console.log(`Fecha de vencimiento: ${tareas[i].vencimiento}`);

        editor = parseInt(prompt("\nSi desea editar la tarea presione 1 o presione 0 para volver: "));

            if (editor == 1)
            {
                editorTarea(i, tareas);
            }
            else if (editor == 0)
            {
                return;
            }
            else
            {
                console.log("\nOpción no válida, intente de nuevo.");
            }
    }
}
module.exports = detalleTarea;