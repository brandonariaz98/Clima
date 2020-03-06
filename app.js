

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng( argv.direccion )
 //   .then( console.log);
    
/*clima.getClima( 18.030001, -96.900002)
    .then( console.log )
    .catch( console.log );
*/

const getInfo = async( direccion ) => {
    try{
        const corrds = await lugar.getLugarLatLng( direccion );        
        const temp = await clima.getClima( corrds.lat, corrds.lng);
        return `El clima de ${ corrds.direccion} es de ${ temp }.`;

    }catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }    
}

getInfo( argv.direccion )
    .then(console.log )
    .catch(console.log);