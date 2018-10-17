const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
var colors = require('colors');

console.log(argv);


let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':
        listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('==========================='.green);

        }
        //console.log('Mostrar todas la tares pro hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);


        //console.log('Actualiza ua tarea por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reonocido');

}