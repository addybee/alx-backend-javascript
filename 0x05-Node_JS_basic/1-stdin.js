// procees input from stdin

console.log('Welcome to Holberton School, what is your inputName?');

process.stdin.on('readable', () => {
  const inputName = process.stdin.read();
  if (inputName !== null) {
    process.stdout.write(`Your name is: ${inputName}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('important software is now closing\n');
});
