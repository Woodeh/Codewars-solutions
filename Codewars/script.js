
//List Filtering

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(element => typeof element === 'number')
  }

//Sum of Digits / Digital Root
function digitalRoot(n) {
    nNumber = n.toString().split("").reduce((acc,item) => acc = Number(acc) + Number(item), 0);
    if(nNumber >= 10) {
      return digitalRoot(nNumber);
    }
    return nNumber;
  }
  
  //Isograms
  function isIsogram(str){
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    
    return true;
  }

  //Stop gninnipS My sdroW!
  function spinWords(sentence){
    const sentenceArray = sentence.split(' ');
    let result = '';
    sentenceArray.map((str, i) => {
      if (str.length >= 5){
        sentenceArray[i] = str.split('').reverse().join('');
      } else {
        sentenceArray[i] = str;
      }
    result = sentenceArray.join(' ');
    });
  return result;
  }


  //Changing letters

  function swap (string) {
    let example = string.split('').map(item => 'aeiou'.includes(item) ? item.toUpperCase() : item).join('');

    return example;
  }

  //Detect Pangram
  function isPangram(string){
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split("").every(function(x) {
      return string.indexOf(x) !== -1;
    });
  }


 //Get the Middle Character
 function getMiddle(str) {
    let position;
    let length;
  if(str.length % 2 === 1) {
    position = str.length / 2;
    length = 1;
  } else { 
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substr(position,length);
}


//String repeat
function repeatStr (n, s) {
    return s.repeat(n);
  }