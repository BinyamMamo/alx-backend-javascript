/*
 * Task 1. Using Process stdin
 * # mandatory
 *
 * Create a program that will be
 * executed through command line
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (INPUT) => {
  process.stdout.write(`Your name is: ${INPUT.toString().trim()}\n`);
  process.exit();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
