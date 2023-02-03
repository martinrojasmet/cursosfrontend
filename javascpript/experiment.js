const timesToRepeat = 4;
const character = "a";

let i = 0;
let string = "";

while (i < timesToRepeat) {
    string += character
    i++;
};

for (n=0; n < timesToRepeat; n++){
    string+=character;
}

console.log(string);