// function takes a num and rolls a dice randomly that many times to console. 

/*
- generate random number (from 1-6) and save to array
*/

let arg = process.argv.slice(2);

const rollDice = function(num) {
  let res = [];
  for (let i = 0; i < num; i ++){
    let dice = Math.floor(Math.random() * 6) + 1;
    res.push(dice);
  }
  return res.join(', ');
}

for (let i = 0; i < arg.length; i ++) {
  console.log(`Rolled ${arg[i]} dice: ${rollDice(arg[i])}`);
}

