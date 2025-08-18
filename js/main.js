const equaH = (a,b) => a==100 || b==100 ||(a + b)==100;
console.log(equaH(100.0));
console.log(equaH(0,100));
console.log(equaH(10,0));
console.log(equaH(50,50));

const getFilExtension = (str)  =>  str.slice
(str.lastIndexOf ('.'));
console.log(getFilExtension('index.html'));
console.log(getFilExtension('index.html'));

const moveCharForward = (str) => str.split('')
.map(char => String.fromCharCode
    (char.charCodeAt(0) +1))
.join('')
console.log(moveCharForward('kasam'))

const dateFormat = (date = new Date()) => {
    const days = date.getDate() ;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return    `${days}/${months}/${years}`; 
}
console.log(dateFormat());


const addstr = (str) => 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3)
console.log(addstr('abcccdf123')); 

const extracts =(str)  => str.slice(0, str.length/2)
console.log(extracts('kasam'))
const evend = (arr) => arr.filter(num=> num%2==0) .length 
console.log(evend([1,23,3,4,5]))
console.log(evend([1,23,3,,5]))
console.log(evend([1,23,2,4,5]))

const largest = (arr) => Math.max(...arr.filter(num => num%2==0))
console.log(largest([1,2,3,4,5]))