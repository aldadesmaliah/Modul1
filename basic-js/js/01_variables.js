console.log("------ Variables ------");

//var
for (var i =0; i <5; i++){
    console.log(i);
}
console.log(i);

//var
function looping(){
    for (var i = 0;i< 5; i++){
        console.log(i);
    }
}
looping();
console.log(i);

//let
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// Let
for (let i = 0; i < 5; i++) {
    console.log(i);
}
if (true) {
    let i = 100;
    console.log("i =",i);
}

// Const
let phi = 3.14;
phi = 3.147;
console.log(phi);
