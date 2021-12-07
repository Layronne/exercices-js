// comme exercice avant on declare une variable qui demande un numéro et attend une reponse
// ensuite une condition si le numero donne est plus grand que 0 on affiche 1
// si il est inferieur a 0 alors il nous donne -1
// si il est egale a 0 il nous donne 0

let takeNumber = prompt('donnez moi un numéro','');

if (takeNumber > 0) {
      alert("1")
} else if (takeNumber < 0){
      alert("-1")
} else {
      alert("0")
}