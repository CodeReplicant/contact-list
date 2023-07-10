
//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
//Crea una función para añadir un nuevo contacto a una lista
//Crea una función para borrar un contacto existente de la lista
//Crea una función para imprimir en consola los contactos presentes en la lista
//Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️



let milista = ['marcela mar','federico barbaroja','genkis khan','juana la loca']
const prompt = require('prompt-sync')();

function agregar (array){
    let n = array.lenght; 
    let userInput = prompt('Introdusca un nuevo contacto: ');
    console.log('Ud entro:', userInput);
    array.push(userInput);
    return array;
}

function eliminar (array){
    console.log(array);
    let userInput = prompt('Introdusca el # contacto o el nombre : ');
    console.log('Ud entro:', userInput);


    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');
        let index = array.indexOf(userInput);
        if (index !== -1) {
            console.log('La lista contiene el string en la posicion:', index);
            array.splice(index, 1);
            console.log('La nueva lista es ');
            console.log(array)

          } else {
            console.log('La lista no contiene el string!!!:', userInput);
          }

      } else {
        console.log('La entrada no fue correcta.');
      }

    
    return array;
}



let opcion = prompt ('inserte el numero de la opcion que quiere: 1. Anadir contacto  2. Eliminar contacto 3. Imprimir contactos')



if(opcion==1){

    console.log('Ud ha elegido insertar un nuevo contacto: ');
    let nuevalista = agregar (milista);
    console.log('///////////////////La nueva lista es: ////////////////////////////////////////');
    console.log(nuevalista);

}else if (opcion==2){
    console.log('Ud ha elegido la opcion de eliminar un contacto');
    let nuevalista= eliminar(milista);
}
else if (opcion==3){
    console.log('Imprimir contacto');
    console.log(milista);

}else{
    console.log('Opcion incorrecta')
}








