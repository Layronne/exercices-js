/* je cree une variable javascriptname avec ma question et rien dans la barre de reponse
ensuite je creer une condition qui dit que si l'utilisateur ecris ECMAScript alors on lui 
dit que c'est la bonne reponse sinon on lui dit que c'est pas bon et on lui donne la reponse */

let javaScriptName = prompt('Quel est le nom officiel de JavaScript?','');

if (javaScriptName == "ECMAScript" ) {
      alert('Bonne réponse!')
} else {
      alert('Ne sait pas ? ECMAScript!')
}