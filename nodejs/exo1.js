/*
== == == == == == == == == ==
Ecrire la fonction qui permet l'exécution suivante :

const addSix = createBase(6);
console.log(addSix(10)); // prints 16
console.log(addSix(21)); // prints 27
== == == == == == == == == ==
*/

const createBase = (numBase) => (numToAdd) => numBase + numToAdd;

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));