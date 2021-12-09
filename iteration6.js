//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//Recuerda que puedes usar la función .includes() para comprobarlo.


const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]


let toyId = []

for(let properties of toys) {
    if(properties.name.includes("gato")) {
     toyId.push(properties.id)
    }
}
 console.log(toyId)



 for(let id of toyId) {
      toys.splice(toys.indexOf(id),1)
 }
  console.log(toys)







