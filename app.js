
//running node in repl

let n = 5;

for (let i = 0; i < n; i++) {
    console.log(i);
}



function fac(n) {
    if (n<=1) return 1;
    return n*fac(n-1);
}

console.log(fac(5));


// process is default object that gives information about many things of code.
// process.argv is used to give arguments to process so we can do any action
let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log(`Hello & Welcome ${process.argv[i]}`);
}