/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var nuevoarreglo=[];
 
   for(var ele in objeto){
      nuevoarreglo.push([ele, objeto[ele]]);
   }
   return nuevoarreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
var total=0; 
var letra;
var valida;
var array=[];
var objeto={};

for (var i = 0; i < string.length; i++) {
    
    letra= string[i].toString();
    valida= array.includes(letra);
    if(valida == false){
        total=0;
  for (var j = 0; j < string.length; j++) {
    if (string[i] == string[j]) {
        total+= 1;
    }
  }
   
  objeto[letra]=total;
}
  
}

return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   
   var datosMay="";
   var datosMin="";
   for(i=0; i < string.length; i++){
      if(string[i] === string[i].toLowerCase()){
          datosMin += string[i];
      }else{
          datosMay += string[i];
      }
   }
   return datosMay + datosMin;
      
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   
   var datosMay="";
   for(i=0 ; i < frase.length ; i++){
      datosMay += frase[i];
   }
   var strReverse =  datosMay.split("").reverse().join("").split(" ").reverse();; 

   return strReverse.join(" ");

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var dato =numero.toString();

   if(dato.length >= 2){
   
      let array= dato.split("");
      let reverse= array.reverse().join("");
  
      if(dato === reverse){
          return "Es capicua";
      }else{
          return "No es capicua";
      }
  }


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   array= string.split("");
   arraynuevo=[];
   for(i=0 ; i < array.length; i++){
      if(array[i]==="a" ||  array[i]==="b" || array[i]==="c")
      {
          continue;
      }
      else{
          arraynuevo.push(array[i]);
      }
  }
  
 return arraynuevo.join("");

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort((a,b) =>  a.length - b.length);


}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var nuevo=[];

   for(i=0; i < array1.length; i++)
   {
       for(j=0; j < array2.length; j++)
       {
           if(array1[i]== array2[j]){
               if(!nuevo.includes(array1[i]))
               nuevo.push(array1[i]);
           }
       }
   }

   return nuevo;
   
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
