// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas
// compruébalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

function approved(param) {
  for (i = 0; i < param.length; i++) {
    let contador = 0;
    if (param[i].T1) {
      contador += 1;
    }
    if (param[i].T2) {
      contador += 1;
    }
    if (param[i].T3) {
      contador += 1;
    }
    if (contador >= 2) {
        param[i].isApproved = true
      } else {
        param[i].isApproved = false
      }  
  }
  return param
}

let resultado = approved(alumns)
console.log(resultado)