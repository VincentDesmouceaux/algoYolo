const str = "je m'apelle vincent";
let counter = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "e") {
    counter++;
  }
}

console.log(counter);
