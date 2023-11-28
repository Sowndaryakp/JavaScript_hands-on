// A
// BC
// DEF

for (let z = 1; z <= 3; z++) {
    let charCode = 65; 
    for (let i = 1; i <= z; i++) {
        process.stdout.write(String.fromCharCode(charCode) + " ");
        charCode++;
    }
    console.log("");
}

// A
// BB
// CCC
for (let z = 1; z <= 3; z++) {
    let charCode = 65 + z - 1; 
    for (let i = 1; i <= z; i++) {
        process.stdout.write(String.fromCharCode(charCode));
    }
    console.log("");
}

// A
// AB
// ABC

for (let z = 1; z <= 3; z++) {
    let charCode = 65; 
    for (let i = 1; i <= z; i++) {
        process.stdout.write(String.fromCharCode(charCode));
        charCode++;
    }
    console.log("");
}

// A B C D E
// B C D E
// C D E
// D E
// E

for (let i = 0; i < 5; i++) {
    let charCode = 65 + i; // ASCII code for 'A' plus the current iteration
    for (let j = i; j < 5; j++) {
        process.stdout.write(String.fromCharCode(charCode) + " ");
        charCode++;
    }
    console.log("");
}

// A A A A A
// B B B B
// C C C
// D D
// E
for (let i = 0; i < 5; i++) {
    let charCode = 65 + i; // ASCII code for 'A' plus the current iteration
    for (let j = 0; j < 5 - i; j++) {
        process.stdout.write(String.fromCharCode(charCode) + " ");
    }
    console.log("");
}

