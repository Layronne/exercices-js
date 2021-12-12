let i = 0;
while (++i < 5) alert( i );
/*Ici le resultat sera 4 car le prefix renvois le nouvelle valeur et quand la 
boulce compare 5 < 5 elle s'arrete donc n'affiche pas 5 mais seulement 4*/ 

let i = 0;
while (i++ < 5) alert( i );

/*ici la boucle affichera 5 car le suffix renvoie l'ancienne valeur */