// Looping a triangle


// Ex 1
let tag = "";
let counter = 0;

/*while (counter <= 7) {
    tag = tag + "#";
    counter = counter + 1;
    console.log(tag);
}*/

for (; counter <= 50; counter = counter + 1) {
    if (counter <= 25) {
        tag = tag + "#";
        console.log(tag);
    }
    if (counter >= 26) {
        tag = tag.slice(0, -1);
        console.log(tag);
    }
    
}

// Ex 2
