const Libros = {
    LibroUno: {
        titulo : 'Lo que el viento se llevo (Gone with the wind)',
        autor : 'Desconocido',
        añoPublicacion : 1940,
        descripcion : 'Cuenta la historia de ...'
    },                                                     // Creacion de objetos con parametros

    LibroDos: {
        titulo : 'Cronica de una muerte anunciada',
        autor : 'Gabriel Garcia Marquez',
        añoPublicacion : 1981,
        descripcion : 'La historia cuenta la ...'
    }
}

const numerosDos = [20,5,2,4,3];

const suma = numerosDos.reduce ((acumulador, valorActual) => {
    return acumulador + valorActual;
})
                                                                     // Metodo reduce, el cual nos arroja un solo valor luego de realizar una operacion con todos los elementos
const resta = numerosDos.reduce ((acumulador, valorActual) => {
    return acumulador - valorActual;
})

console.log(suma);

console.log(resta);

const sumaDos = numerosDos.forEach((numeroActual) => {      // Metodo for each (recorre cada uno de los elementos de un arreglo realizando un cambio en cada 1)
    console.log(numeroActual+numeroActual);
})

const librosArray = [Libros.LibroUno, Libros.LibroDos]

const showBooks = librosArray.forEach((libros) =>{
    console.log(libros);
})

const manipularObjetos = librosArray.forEach((libros) =>{
    libros.añoPublicacion = 2001;
    console.log(libros);
})

const numerosMap = numerosDos.map((valor) =>{     // Metodo similar al for each, el cual recorre todos los elementos de el arreglo y les realiza un cambio
    return valor*valor*valor;
})

console.log(numerosMap);

const nombres = ['Juan', 'Camilo', 'Pablo'];

const manipularNombres = nombres.map((nombre) =>{       // Agrega un apellido
    return nombre += " Perez"
})

console.log(manipularNombres);

const manipularNombresDos = nombres.map((nombre) =>{   // Indica que alguien ingreso a un juego
    return `${nombre} se unio al juego`;
})

console.log(manipularNombresDos);

const manipularNombresTres = nombres.map((nombre) =>{
    return `${nombre} tiene: ${nombre.length} letras`;   // nombre.length arroja el tamaño de cada elemento
})

console.log(manipularNombresTres);

const carroNuevo = (marca, model, color, values) =>{
    return {
        marca: marca,       
        modelo: model,                                     // metodo que recibe parametro para creacion de objeto
        color: color,
        valores: values
    }

}

console.log(carroNuevo('Mazda', 2013, 'Rojo', 50000000));       // crear un objeto con parametros enviados a un metodo


// Creacion de clases en JS

class cancion{

     //Constructor con los parametros
    constructor(){
        this.title;
        this.autor;
    }
     

    // metodos
    reproducir(){
        console.log("La cancion se esta reproduciento")

    }

    detenerReproduccion(){
        console.log("Se detuvo la reproduccion");
    }

    informacion(title, autor){
        console.log(`titulo: ${title}, autor ${autor}`)
    }
}

    // instancia de la clase
const miCancion = new cancion();
    // Uso de los metodos de la clase cancion con la nueva instancia
miCancion.reproducir();
miCancion.detenerReproduccion();
miCancion.informacion('Do not resucitate','Like moths to flames');
miCancion.informacion('Demolisher','Slaughter to prevail');




    // Herencia
// Clase padre
class medios{
    constructor(informacion){
        this.yearPublication = informacion.yearPublication;
        this.nombre = informacion.nombre;
    }

    fecha(){
        console.log(`Año de publicacion: ${this.yearPublication}`)
    }
    
}

// Clase Hija - Heredada
class song extends medios{   // extends es la palabra que nos indica que la clase usa herencia
    constructor(datosCancion){
        super(datosCancion)  // super nos permite usar las funciones de un objeto padre
        this.artista = datosCancion.artista;
        this.nombre = datosCancion.nombre;
    }

    reproducir(){
        console.log(`Artista: ${this.artista},\nTitulo: ${this.nombre}`)
    }

}


const miCancionDos = new song({
    artista:  "Slaughter to prevail",
    nombre: "Bonebreaker",
    yearPublication: 2021
})

miCancionDos.reproducir();
miCancionDos.fecha();
