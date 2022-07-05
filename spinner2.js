process.stdout.write("hello from spinner1.js... \rheyyy\n");
let array = ["\r|   ",'\r/   ','\r-   ','\r\\   ',"\r|   ",'\r/   ','\r-   ','\r\\   ',"\r|   ",'\r/   ','\r-   ','\r\\   '];
let time = 0;
for (let a of array) {
setTimeout(() => {
  process.stdout.write(a);
}, time);
  time += 200
}

setTimeout(( )=> {
  process.stdout.write("\n")
} , time);