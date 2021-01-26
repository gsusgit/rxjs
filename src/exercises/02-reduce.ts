import { from } from 'rxjs';
import { reduce, filter } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  // Regular way

  let sum = 0;

  for (let i = 0; i < datos.length; i++) {
      const element = datos[i];
      if (typeof element != "string") {
          sum += element;
      }
  }

  console.log(sum);

  from(datos).pipe(
    // Trabajar aquí
    filter<any>(value => !isNaN(value)),
    reduce((acc, val) => acc + val)
  ).subscribe( console.log ) // La salida debe de ser 32




})();

		