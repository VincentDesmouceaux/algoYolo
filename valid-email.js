const email = "nono@lereacteur.io";
let valid = false;

for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    valid = true;
  }
}

// En utilisant indexOf() :

if (email.indexOf("@") !== -1) {
  valid = true;
}

console.log(valid);
