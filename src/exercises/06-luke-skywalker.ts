import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';
import { zip, of } from 'rxjs';

/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   C-3PO, llamando el endpoint:   /people/2/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Droid)
 */

// Respuesta esperada:
// Información sobre los droides en el universo de Star Wars
// Ejemplo de la data esperada
/*
 {
    "name": "Droid",
    "classification": "artificial",
    "designation": "sentient",
    "average_height": "n/a",
    "skin_colors": "n/a",
    "hair_colors": "n/a",
    "eye_colors": "n/a",
    "average_lifespan": "indefinite",
    "homeworld": null,
    "language": "n/a",
    "people": [
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/8/",
        "http://swapi.dev/api/people/23/"
    ],
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/4/",
        "http://swapi.dev/api/films/5/",
        "http://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-10T15:16:16.259000Z",
    "edited": "2014-12-20T21:36:42.139000Z",
    "url": "http://swapi.dev/api/species/2/"
}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {
    "name": "Droid",
    "classification": "artificial",
    "designation": "sentient",
    "average_height": "n/a",
    "skin_colors": "n/a",
    "hair_colors": "n/a",
    "eye_colors": "n/a",
    "average_lifespan": "indefinite",
    "homeworld": null,
    "language": "n/a",
    "people": [
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/8/",
        "http://swapi.dev/api/people/23/"
    ],
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/4/",
        "http://swapi.dev/api/films/5/",
        "http://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-10T15:16:16.259000Z",
    "edited": "2014-12-20T21:36:42.139000Z",
    "url": "http://swapi.dev/api/species/2/"
}
    personaje: {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "http://swapi.dev/api/planets/1/",
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/4/",
        "http://swapi.dev/api/films/5/",
        "http://swapi.dev/api/films/6/"
    ],
    "species": [
        "http://swapi.dev/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "http://swapi.dev/api/people/2/"
}
*/


(() =>{

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
    getRequest(`${SW_API}/people/2`).pipe(
        // Realizar los operadores respectivos aquí
        // SOLUCION MINIMA
        // switchMap(resp => getRequest(resp.species[0]))
        // SOLUCION EXTRA
        switchMap(resp => zip(of(resp), getRequest(resp.species[0]))),
        map(([personaje, especie]) => ({personaje, especie}))
    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log )           // ==
    // =======================================



})();

		
