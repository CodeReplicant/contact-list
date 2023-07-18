

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

},{
    nombres : "Ricardo",
    apellidos: 'Moran',
    telefono: 3204587780,
    cuidad:'Bogota',
    direccion:'cll 145 # 120' 

},{
    nombres : "Jose",
    apellidos: 'Ramirez',
    telefono: 3207895290,
    cuidad:'Bogota',
    direccion:'cll 89 # 152' 

}






]


console.log(lista);
//                                                                                          console.log(lista[1]);

//nmp install prompt-sync para  sincronizar consola cmd
const prompt = require('prompt-sync')();



function agregar(Objeto){
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













function editar (objeto){
    console.log(objeto);
    let userInput = prompt('Introdusca el nombre del sojeto : ');
    console.log('Ud entro:', userInput);


    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');

        for (let i_1=0;i_1<objeto.length;i_1++){

            if(objeto[i_1].nombres==userInput){


                
                let nombres_in = prompt('Introdusca los datos del contacto, introduzca los nombres: ');
                console.log('Ud entro:', nombres_in);
                let apellidos_in = prompt('Introduzca los apellidos: ');
                console.log('Ud entro:', apellidos_in);
                let telefono_in = prompt('Introdusca el telefono: ');
                console.log('Ud entro:', telefono_in);
                let cuidad_in = prompt('Introdusca la cuidad: ');
                console.log('Ud entro:', cuidad_in);
                let direccion_in = prompt('Introdusca la direccion ');
                console.log('Ud entro:', direccion_in);

                objeto[i_1].nombres=nombres_in;
                objeto[i_1].apellidos=apellidos_in;
                objeto[i_1].telefono=telefono_in;
                objeto[i_1].cuidad=cuidad_in;
                objeto[i_1].direccion=direccion_in;




            return objeto;
            }else{}

        }

    }else {
    console.log('La entrada es erronea, ejecute denuevo e inserte el string adecuado!!!:', userInput);
    }
    return objeto;
} 









function eliminar (objeto){
    console.log(objeto);
    let userInput = prompt('Introdusca el nombre : ');
    console.log('Ud entro:', userInput);


    if (typeof userInput === 'string') {
        console.log('La entrada es un string.');

        for (let i_0=0;i_0<objeto.length;i_0++){//localisa el valor de la propiedad nombres en toda la lista

            if(objeto[i_0].nombres==userInput){
            objeto.splice(i_0, 1);
            console.log('La nueva lista es ');
            return objeto;
            }else{}

        }

    }else {
    console.log('La entrada es erronea, ejecute denuevo e inserte el string adecuado!!!:', userInput);
    }
    return objeto;
} 
    

//entrada de opciones del usuario///////////////////////////////


let opcion = prompt ('inserte el numero de la opcion que quiere:   1. Anadir contacto    2. Eliminar contacto   3. Editar contacto  4. Imprimir contactos  ')



if(opcion==1){

    console.log('Ud ha elegido insertar un nuevo contacto: ');
    let nuevalista = agregar (lista);
    console.log('//////////////////////////////La nueva lista es: ////////////////////////////////////////');
    console.log(nuevalista);

}else if (opcion==2){
    console.log('Ud ha elegido la opcion de eliminar un contacto');
    let nuevalista= eliminar(lista);
    console.log(nuevalista)
}else if (opcion==3){
    console.log('Ud ha elegido editar un contacto contacto');
    let nuevalista = editar(lista);
    console.log(nuevalista);
}
else if (opcion==4){
    console.log('Imprimir contacto');
    console.log(lista);
}else{
    console.log('Opcion incorrecta')
}


