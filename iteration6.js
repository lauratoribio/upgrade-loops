//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//Recuerda que puedes usar la función .includes() para comprobarlo.


const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    let palabra = "gato"

//    for(let propreties of toys) {
//        let i = 0
//        if(propreties[i].name.indexOf(palabra)) {
//         toys.splice(i,1)
//        }
//    }
    
//     console.log(toys)



for (let property of toys){
    for(let i = 0; i < toys.length; i++) {
    if (property[i].indexOf(palabra) == true) {
        toys.splice(i,1)
     }
   }
}
console.log(toys)
