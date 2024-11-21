// write your code in this directory
// #1
for (let g = 1; g < 11; g++) {
    console.log(g);
}

// #2
for (let i = 10; i > 0; i--) {
    console.log(i);
}
// #3
// let sum = 0; // cvladi shevqmenit da mivaniwet mnishvneloba
// for (let i = 1; i <= 50; i++) { // i = 1,  50 jer xdeba operacia da is yovel jerze 1 emateba
//     sum += i; // xolo bolos jams emateba titoeuli momatebuli
// }
//    console.log(sum);

//    #4
for (let i = 0; i < 10; i += 2) {
    console.log(i); // 5 sheshvla moxdeba i=0 i=2 i=4 i=6 i=8
}
// #5
//break steitmeenti aris loopis shemadgeneli nawili da sheuzlia lupidan gamoiyvanos operacia
// mag  for (let i = 0; i < 100; i++) {
// if (i === 10) {  break;  gomova loopidan roca i iqneba 10}
// }
//console.log(i); }

// 6
for (let f = 0; f < 20; f++) {
    if (f % 2 === 1) {
      continue;  // Skip loop for kent numbers
    }
    console.log(f); }

// 7
let randomNumber;
do {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
} while(randomNumber !==27 );

//8

for (let d = 0; d < 100; d++) {
    if (d % 3 === 0 && d % 5 === 0 ) {
        console.log("fizzBuzz");
    }
    else if (d === 3){
        console.log("fizz");
    }
    else if(d === 5){
        console.log("Buzz");
    }
    else {
        console.log(d);
    }
}

// 9

// for (let w = 0; w < 100; w++) {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log(randomNumber)
// }

//10

let sum = 0;
for (let r = 2; r <= 1000; r += 2) {
    sum += r;
}
console.log(sum);

//   11

let jami = 0;
for (let t = 1; t <= 1000; t++) {
    if (t % 3 === 0 || t % 5 === 0) {
        sum += t;
    }
} console.log(jami);

// 12
let jamii = 0;
for (let t = 1; t <= 1000; t++) {
    if (t % 3 === 0 && t % 5 === 0) {
        sum += t;
    }
} console.log(jamii);





