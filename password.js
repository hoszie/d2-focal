// if 'a' should print '4'
// if 'e' should print '3'
// if 'o' should print '0'
// if 'l' should pring '1'

// OUTPUT: hello => h3110

let arg = process.argv.slice(2);

const obfuscate = function(str) {
  let obfStr = '';
  const specLetter = ['a', 'e', 'o', 'l'];

  for (let i = 0; i < str.length; i ++) {
    if (specLetter[0] === str[i]) {
      obfStr += '4';
    } else if (str[i] === specLetter[1]) {
      obfStr += '3';
    } else if (str[i] === specLetter[2]) {
      obfStr += '0';
    } else if (str[i] === specLetter[3]) {
      obfStr += '1';
    } else {
      obfStr += str[i];
    }
  }
  return obfStr;
}

for (let i = 0; i < arg.length; i ++) {
  console.log(obfuscate(arg[i]));
}
