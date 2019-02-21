// Dont need a shebag here as going to tell npm what to run the file with
// Exploration of npm scripts based on this great intro:
// https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

if (!process.argv[2] || !process.argv[3]) {
  console.log("You're missing a number, please give two numbers.")
}

else {
  console.log(`The sum of ${process.argv[2]} and ${process.argv[3]} is ${add(process.argv[2], process.argv[3])}`)
}
