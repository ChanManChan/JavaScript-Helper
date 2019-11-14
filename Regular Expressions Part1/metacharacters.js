let re;
//Literal Characters
re=/hello/;
re=/hello/i;
//Metacharacter Symbols
re=/^h/i;  //Must start with
re=/d$/i;  //Must end with
re=/ world$/i;
re=/^hello$/i; //Must begin and end with
re=/h.llo/i; //Matches any ONE character ('.' can be any character only at that index)
re=/h*llo/i; //Matches any character 0 or more times
re=/gra?e?y/i;  //Optional character
re=/gra?e?y\?/i;  //Escape character

//Brackets[] - Character Sets
re=/gr[ae]y/i;  //Must be an 'a' or 'e'
re=/[GF]ray/;  //Must be 'G' or 'F'
re=/[^GF]ray/i; //Match anything except a 'G' or 'F'
re=/[A-Z]ray/;  //Match any uppercase letter
re=/[a-z]ray/; //Match any lowercase letter
re=/[A-Za-z]ray/; //Match any letter
re=/[0-9][0-9]ray/; //Match any digit

//Braces {} - Quantifiers
re=/Hello/i;
re=/Hel{2}o/i;  //must occur exactly {m} amount of times
re=/Hel{2,4}o/i;  //must occur between {m,n} range
re=/Hel{2,}o/i;  //must occur at leat {m} times

//Parentheses () - Grouping
re=/^([0-9]x){3}$/;

//Shorthand Character Classes
re=/\w/; //Word character - alphanumeric character or underscore(_)
re=/\w+/; //One or more Word character - alphanumeric character or underscore(_)...'!' does not match ;; '()' does not match ...etc etc
re=/\W/; //Non-Word character...'!' matches ...etc etc
re=/\d+/; //Match any digit
re=/\D+/; //Match any Non-digit
re=/\s/;  //Match whitespace char (including 'Tab')
re=/\S+/; //Matches non whitespace char
re=/Hell\b/i; //Word boundary (do not search for substrings instead search for an atomic word itself)

//Assertions
re=/x(?=y)/; //Match 'x' only if followed by 'y'
re=/x(?!y)/; //Match 'x' only if NOT followed by 'y'


//String to match
const str='askxyalkxymlkasdnklaxylkamsdk';

//Log Results
const result=re.exec(str);
console.log(result);

function reTest(re,str){
  if(re.test(str)){
    console.log(`${str} matches the ${re.source}`);
  }else{
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re,str);