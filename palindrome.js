const s = "racecar";

const reverse = s.split('').reverse().join('');

function palindrome(reverse){
    if(s === reverse){
        return true;
      }else{ 
        return false;
      }
}

console.log(palindrome(reverse))

