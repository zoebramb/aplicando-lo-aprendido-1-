const prompt = require("prompt-sync")();
const detalleTarea = require ("./detalleTarea");
const crearTarea = require ("./CrearTareas");

function menuVerTareas(tareas, cantidadTareas) 
{
    let opcionVer;
     while (opcionVer !== "0")
    {
        console.log("\n--- Ver tareas ---");
        console.log("1. Todas");
        console.log("2. Pendientes");
        console.log("3. En curso");
        console.log("4. Terminadas");
        console.log("0. Volver al menú anterior");
        opcionVer = prompt("\nSeleccione una opción: ");
        
        switch (opcionVer) 
        {
             case "1":
                if (cantidadTareas === 0)
                {
                    console.log("\nNo hay tareas para mostrar.");
                    return;
                }
                else
                {
                    console.log("\nLista de tareas:");
                    let i = 0;
                    for (let tarea of tareas)
                    {
                        console.log(`[${i+1}]`, tarea.titulo);
                        i++;
                    }
                     console.log("\nEstas son sus tareas. Desea ver el detalle de alguna?");
                    let detalle;
                do {
                    detalle = parseInt(prompt("Ingrese el número de la tarea o presione 0 para volver: "));

                        if (detalle > 0 && detalle <= cantidadTareas) 
                        {
                            detalleTarea(detalle, tareas);
                        }
                        else if (detalle !== 0) 
                        {
                            console.log("Número inválido, intente de nuevo.");
                        }

                    } while (detalle !== 0);   
                }   
                break;
            case "2":
                mostrarPorEstado(tareas, cantidadTareas, "pendiente");
                break;
            case "3":
                mostrarPorEstado(tareas, cantidadTareas, "en curso");
                break;
            case "4":
                mostrarPorEstado(tareas, cantidadTareas, "terminada");
                break;
             case "0":
                    break;
                default:
                    console.log("\nOpción no válida, intente de nuevo.");
        }
    }   
}

function mostrarPorEstado(tareas, cantidadTareas, estado) 
{
    if (cantidadTareas === 0) 
    {
        console.log("\nNo hay tareas para mostrar.");
        return;
    }

    console.log(`\nLista de tareas ${estado}:`);
    let i = 0;
    let hay = false;

    for (let tarea of tareas) 
    {
        if (tarea.estado === estado) {
            console.log(`[${i + 1}]`, tarea.titulo);
            hay = true;
        }
        i++;
    }

    if (!hay) 
    {
        console.log(`\nNo hay tareas en estado "${estado}".`);
    }
    else 
    {
        console.log("\nEstas son sus tareas. Desea ver el detalle de alguna?");
        let detalle;
        do {
            detalle = parseInt(prompt("Ingrese el número de la tarea o presione 0 para volver: "));

                if (detalle > 0 && detalle <= cantidadTareas) 
                {
                    detalleTarea(detalle, tareas);
                }
                    else if (detalle !== 0) 
                {
                    console.log("Número inválido, intente de nuevo.");
                }

            } while (detalle !== 0);       
    }   
}

module.exports = menuVerTareas;

