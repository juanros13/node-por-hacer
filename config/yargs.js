const descripcion = {
    demand: true,
    alias: 'd',
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Borre un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
        }
    })
    .help()
    .argv;

module.exports = {
    argv,
}