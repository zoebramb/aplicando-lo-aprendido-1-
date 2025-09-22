const prompt = require("prompt-sync")();

function buscarTarea(tareas, cantidadTareas)
{
let buscador = prompt("\nIngrese el título de la tarea que desea buscar: ");
let encontrado = false;
let i =1;
    for (let tarea of tareas)
    {
        let tituloMin = tarea.titulo.toLowerCase();
        let buscadorMin = buscador.toLowerCase();

    if (tituloMin.includes(buscadorMin))
    {
        console.log(`\nTarea encontrada [${i}]:`, tarea);
        i++;
        encontrado = true;
    }
    }
    if (!encontrado)
    {
        console.log("\nNo se encontraron tareas con ese título.");
    }
}
module.exports = buscarTarea;