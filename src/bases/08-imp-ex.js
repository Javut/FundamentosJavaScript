import heroes, {owners}  from '../data/heroes';

console.log("Hola Mundo")

const getHeroeById = (id) => heroes.find( (heroe) => heroe.id ===  id);      
    
getHeroeById(1) 

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner )

console.log(getHeroesByOwner('DC'))
