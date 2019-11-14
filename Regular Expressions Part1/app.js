let re;
re=/hello/;
re=/hello/i;  //<-- 'i' makes it case insensitive
//re=/hello/g; //<--Global search (searches for all instances of 'hello' in this case)
console.log(re);
console.log(re.source);

//exec() - Return result in an array or null
//const result=re.exec('nandu hello world'); //<--three things we get are the expression, the index that it starts at and the actual string that we are matching it with
// const result=re.exec('world hello'); //<-- if we make it fail then we get 'null' because no match
// console.log(result);
// console.log(result[0]);
// console.log(result.index); //<-- starting index of the word 'hello'
// console.log(result.input);


//test() - Resturn true or false
//const result = re.test('Hello'); //<-- make it case insensitive...use flags alongside with the regular expression above 're'
//console.log(result);


//match() - Return result array or null
// const str='Hello There';
// const result=str.match(re); //<--opposite of how exec works
// console.log(result);

//search() - Returns the index of the first match if not found returns -1
// const str='there Hello';
// const result=str.search(re);
// console.log(result);

//replace() - Return new string with some or all matches of a pattern
const str='Hello there';
const newStr=str.replace(re,'Hi');
console.log(newStr);
