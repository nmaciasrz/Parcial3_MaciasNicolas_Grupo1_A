/* 
Nicolas Macias
Grupo 1
Problema A: Aportes a seguridad social de un contratista por Orden de Prestación de Servicios (OPS)
*/

/* variables constantes */
const smmlv = 1750000;
const porentajeIbc = 0.4;
const salud = 0.125;
const pension = 0.16;
const fondoSolidaridad = 0.01;

/*entradas */
let honorarios = prompt("Ingrese el valor de los honorarios:");

let arl = prompt ("Ingrese su nivel de ARL 1, 2 O 3")

/* calcular imc de honorarios */

let ibc = honorarios*0.4;
if (ibc <= smmlv){ 
    ibc = smmlv
}


if (ibc> smmlv){ 
    ibc = smmlv*25
}

/*calcular salud y pension */

let calcularSalud = ibc*salud
let clalcularPension = ibc*pension

/*calcular fondo de solidaridad */

if (ibc>= (smmlv*4)) {

   let calcularFondo = ibc*fondoSolidaridad
   

}

else { calcularFondo=0}


/*seleccion de arl */

let nivelRiesgo = 0

switch (arl) { 

    case 1:
        nivelRiesgo = 0.0522*ibc
        break;

    case 2: 
         nivelRiesgo = 0.1044*ibc
        break;

    case 3: 
        nivelRiesgo =  0.2436*ibc

        default :

}

let calcularArl = ibc*arl

/*total de aportes */


let totalAportes= calcularSalud + clalcularPension + calcularFondo + calcularArl

/* neto contratistas*/

let netoContratistas = honorarios-totalAportes


/*salidas */


alert(
    "ibc:" + ibc + "aporte a salud" + calcularSalud +  "aporte a pension" + clalcularPension + "fondo de solidaridad"  + "ARL" + calcularArl + "total de aportes: " + totalAportes + "neto del contratista: " + netoContratistas
)



