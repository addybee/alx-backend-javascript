console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const INPUT = process.stdin.read();
  if (INPUT !== null) {
    process.stdout.write(`Your name is: ${INPUT}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('important software is now closing\n');
});
