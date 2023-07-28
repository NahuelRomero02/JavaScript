// concat() se encarga de enlazar dos o mas cadenas

let cadena='hola mundo';
let cadena2='hola programando'

let restultado=cadena.concat(cadena2);

document.write(restultado + '<br>');

// strartsWith() verifica si un caracter comienza con el mismo caracter de otra cadena, devuelve T o F.

let cadena3='free Como andas';


let resultado2=cadena3.startsWith('free');

document.write(resultado2 + '<br>');

// endWith() verifica si una cadena termina de la misma manera que el caracter introducido

let cadena5='todo bien'

let resultado3=cadena5.endsWith('bie')

document.write(resultado3 + '<br>')

// includes() verifica si una cadena[caracter] esta en otra cadena

let cadena6='hola mundo mundo mu';
let cadena7='mu';

let resultado4=cadena6.includes(cadena7)

document.write(resultado4 + '<br>')

// indexOf() devuelve la posicion del caracter -> lastIndexOf() el ultimo 

let restultado5=cadena6.indexOf(cadena7)
let restultado6=cadena6.lastIndexOf(cadena7)

document.write(restultado5  + '<br>')
document.write(restultado6  + '<br>')

// padStart() rellena con caracteres mandados por parametros padEnd() lo mismo pero al final 
let frase='abc';
let frase2='abc';
let result=frase.padStart(8,'as');
let result2=frase.padEnd(8,'def');
document.write(result + '<br>');
document.write(result2 + '<br>');

// repeat() repite los caracteres las veces enviadas por parametros
let frase3=' holas';
let res=frase3.repeat(3);

document.write(res + '<br>')

// split() divide la cadena como le pidamos
let f='ohla mundo todo correct';
let res2=f.split(",");

document.write(`${res2[2]}<br>`)

//subString() ENVIAMOS POR PARAMETROS EL INDICE PARA QUE INICIE Y TERMINE

let f1='ABCDEF';
let res3=f1.substring(1,3);

document.write(`${res3}<br>`)

// toLowerCase() minuscula toLocaleUpperCase() mayusucla
let f2='Holaa';
let res4=f2.toLocaleLowerCase();
let res5=f2.toLocaleUpperCase()
document.write(`${res4}<br>`)
document.write(`${res5}<br>`)

//toString() retorna un string

let f3=['hola','mundo'];
let res6=f3.toString();

document.write(`${res6}<br>`)

// trim() elimina los espacios en blanco trimEnd() elimina los espacios del final trimStar()elimina los del final
let f4='hola como estas';
let res7=f4.trim();

document.write(`${res7}<br>`)










