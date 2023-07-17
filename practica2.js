

//Ajusta las funciones de crear y eliminar un contacto para 
//que puedan almacenar la siguiente información como objetos: id
//nombres
//apellidos
//teléfono
//ubicaciones
//    ciudad
//    dirección
//Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-2 y compártelo con nosotros. 👍🏼⬇️



const lista =[{
    nombres: 'Sebastian',
    apellidos: 'Salinas',
    telefono: 3133749518,
    cuidad:'Bogota',
    direccion:'cll 139 a # 101 b' 
}
,{
    nombres : "Juan",
    apellidos: 'Salas',
    telefono: 3135642780,
    cuidad:'Bogota',
    direccion:'cll 202 # 115' 


}
]


console.log(lista);
console.log(lista.nombres);

//nmp install prompt-sync para  sincronizar consola cmd
const prompt = require('prompt-sync')();



function agregar(objeto){
    let nombres_in = prompt('Introdusca los datos del nuevo contacto, introduzca los nombres: ');
    console.log('Ud entro:', nombres_in);
    let apellidos_in = prompt('Introduzca los apellidos: ');
    console.log('Ud entro:', apellidos_in);
    let telefono_in = prompt('Introdusca el telefono: ');
    console.log('Ud entro:', telefono_in);
    let cuidad_in = prompt('Introdusca la cuidad: ');
    console.log('Ud entro:', cuidad_in);
    let direccion_in = prompt('Introdusca la direccion ');
    console.log('Ud entro:', direccion_in);



    const newcontact = new Object()
    newcontact.nombres = nombres_in,
    newcontact.apellidos = apellidos_in,
    newcontact.telefono = telefono_in,
    newcontact.cuidad = cuidad_in,
    newcontact.direccion = direccion_in
    


    lista.push(newcontact);

    
}






function eliminar (objeto){
    console.log(objeto);
    let userInput = prompt('Introdusca el nombre : ');
    console.log('Ud entro:', userInput);


    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');

          
          const keys = Object.keys(objeto);
          console.log(keys); 
          


        let index = keys;
        let a = index.indexOf(userInput);
        console.log (a);


        if (index !== -1) {
            console.log('La lista contiene el string en la posicion:', index);
            lista.splice(a, 1);
            console.log('La nueva lista es ');
            console.log(objeto)
          } else {
            console.log('La lista no contiene el string!!!:', userInput);
          }
      } else {
        console.log('La entrada no fue correcta.');
      }
    
    return objeto;
}



//entrada de opciones del usuario///////////////////////////////


let opcion = prompt ('inserte el numero de la opcion que quiere: 1. Anadir contacto  2. Eliminar contacto 3. Imprimir contactos  ')



if(opcion==1){

    console.log('Ud ha elegido insertar un nuevo contacto: ');
    let nuevalista = agregar (lista);
    console.log('///////////////////La nueva lista es: ////////////////////////////////////////');
    console.log(nuevalista);

}else if (opcion==2){
    console.log('Ud ha elegido la opcion de eliminar un contacto');
    let nuevalista= eliminar(lista);
}
else if (opcion==3){
    console.log('Imprimir contacto');
    console.log(lista);
    console.log(lista.nombres);

}else{
    console.log('Opcion incorrecta')
}


