console.log("Hello World");
let city;

console.log(city); // undefined
let isDisplayed = true;

let type = typeof isDisplayed;

console.log(type); // boolean
const isWindowOpen = false;

if (isWindowOpen === true) {
  console.log("La fenêtre est ouverte");
}
const n = 9;

if (n === 0) {
  console.log("n vaut 0");
} else if (n > 10) {
  console.log("n est strictement supérieur à 10");
} else {
  console.log("n n'est pas égal à 0 et n'est pas strictement supérieur à 10");
}

let i = 0; // Initialise une variable qui fera office de compteur. Nous choisissons d'appeler cette variable `i`, mais nous pourrions choisir n'importe quel nom

const limit = 3;

console.log("Avant la boucle");

// `while` signifie `tant que`
// Cette boucle sera exécutée tant que `i` est inférieur ou égal à `limit`
while (i <= limit) {
  // Les 2 accolades délimitent un bloc de code à répéter.
  console.log(i);
  i = i + 1; // L'incrémentation de la variable `i` est indispensable pour que le `while` puisse atteindre la fin de la répétition, sinon vous rentrez dans une boucle infinie
}

console.log("Après la boucle");

console.log("Début du script");
for (let i = 30; i < 33; i++) {
  // affiche les nombres de 0 a 9
  console.log(i);
}
// console.log("Fin du script");
