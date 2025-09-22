const editorTarea = require("./editorTarea");

const prompt = require("prompt-sync")();

function detalleTarea(detalle, tareas)
{
    let i = detalle - 1;
        
   console.log("\n--- Detalle de la tarea ---", tareas[i]);

    let editor;
    do
    {
        editor = prompt("\nSi desea editar la tarea presione 1 o presione 0 para volver: ");

            if (editor === "1")
            {
                editorTarea(i, tareas);
            }
    } while (editor !== "0");

}
module.exports = detalleTarea;