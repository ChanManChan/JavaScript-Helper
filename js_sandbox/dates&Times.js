let val;
const today=new Date();
let birthday=new Date('03-18-1995 11:30:00');
birthday=new Date('September 10 1981');
birthday=new Date('3/18/1995');


val =today.getMonth(); //<-- month indices starts from zero onwards
val=today.getDate();
val=today.getDay(); //<--numerical representation of days
val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();
val=today.getTime();

birthday.setMonth(3);
birthday.setDate(12);
birthday.setFullYear(2000);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(30);

console.log(birthday);