
(question,yes,no)=>{
    if(confirm(question)) yes()

    else no();
}


//    var obj = {name:'name', age:'21', funct: ()=>{
//        console.log(this.name, this.age);
//    }
//    }

//    obj.funct();
// let f,l;
//     var obj = {fname: 'fname', lname : 'lname', age : '21'};
// let {fname,lname, ...rest} = obj;
// console.log(rest);
// let a,b,c;

let a,b,c;

function pr(){
console.log(this.name, this.age);
}

var obj = {name:"xyz",age:"21"};
input = 'a';
let k = pr.bind(obj);
k();

// var vowels = 'aeiou';
// let consonant = 'b';
// if(vowels.includes(input)){
//     console.log('That was a vowel');
// }

// else{
//     console.log('That was not a vowel');
// }

// pr();

var ar = [1,2,3,4,5,6,7,8,9];
var newAr = [];
ar.forEach((e, i , array)=>{
newAr.push(e);
})

// console.log(newAr);

for(let c of newAr){
console.log(c);
    }


for(let c of newAr){
console.log(c);
}

var arr = ['a', 'b', 'c'];

// destructuring

const [x, y,z, ...rest] = arr;

console.log(x, y,z,rest);
console.log(newAr.reverse());

