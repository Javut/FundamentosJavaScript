


//Template String en JS 
const nombre = 'Jaider';
const apellido = 'Vergara';


const nombreCompleto = `${nombre} ${apellido} ${1+5}`

console.log(nombreCompleto); 

function getSaludo(nombre, apellido){
  return 'Hola' + " " + nombre + " " + apellido + " " + 'Bienvenido';

}

console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`)