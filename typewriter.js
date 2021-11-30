const sentence = "hello there from lighthouse labs";
let arr = sentence.split('');

let start = 0;

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
    if (i === (arr.length - 1)) {
      process.stdout.write('\n');
    }
  }, (start += 50));
}