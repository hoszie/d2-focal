/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...

/*
- join array elements into a string separated by a comma.
- create str var
- push array elements to str
*/

const joinListed = function(arr) {
  let str = '';
  if (arr.length === 0) {
    return "";
  }
  for (let i = 0; i < arr.length; i ++) {
    if (arr.length === 0) {
      return '';
    }
    str += (arr[i] + ', ');
    var res = str.substring(0, str.length - 2);
  }
  return res;  
}
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinListed(conceptList);
console.log(joinListed([]));
console.log(`Today I learned about ${concepts}.`);
