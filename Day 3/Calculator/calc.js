let numBtns = document.querySelectorAll('.keypad');
let input = document.getElementById('val-input');
let clearBtn = document.getElementById('clearBtn');
let operatorBtns = document.querySelectorAll('.operators');
let answer = document.getElementById('equalsBtn');
let count = 0;

let operationInfo;
let ar = [];
let ar2 = [];
let sum = [];
let currentExpression ="";
let currentExpression2 = "";
let v="";
let opVal;


for(const btn of numBtns){
    btn.addEventListener('click', function(){
    
        
        if(count === 0){
            currentExpression += btn.value;
            input.value = currentExpression;
        }

        else{
            currentExpression2 = input.value + btn.value;
            input.value = currentExpression2;
            v += btn.value;
            ar2.push(Number(v));
        }
   
    })
}



for(const operator of operatorBtns){
    operator.addEventListener('click', function(){
        opVal = operator.value;
        
        
        if(count === 0){
            ar.push(Number(input.value));
            count = count + 1;
        }

        // else{
        //     ar2.push(Number(input.value));  
        // }

        input.value = input.value + opVal;
        
    })
}


answer.addEventListener('click', function(){
    switch(opVal){
        case '+':   console.log(ar[0] + ar2[ar2.length-1])
                    input.value = `${input.value} = ${ar[0] + ar2[ar2.length-1]}`;
                    // console.log(ar[i] + ar2[i]);
                        // sum.push = Number(ar[i]) + Number(ar2[i]);
                        // console.log(Number(ar[i]) + Number(ar2[i]));
                        // console.log(ar[i]);
                        // console.log(ar[i]);
                    // }
                    // input.value = `Result ${sum}`;
                    // console.log(sum);
                    // console.log(ar);

                    break;

        case '-':   console.log(ar[0] - ar2[ar2.length-1]);
                     input.value = `${input.value} = ${ar[0] - ar2[ar2.length-1]}`;
                    break;

        case '*':   console.log(ar[0] * ar2[ar2.length-1]);
                    input.value = `${input.value} = ${ar[0] * ar2[ar2.length-1]}`;
                    break;

        case '/':   console.log(ar[0] / ar2[ar2.length-1]);
                    input.value = `${input.value} = ${ar[0] / ar2[ar2.length-1]}`;
                    break;


        case '%':   console.log(ar[0] % ar2[ar2.length-1]);
                    input.value = `${input.value} = ${ar[0] % ar2[ar2.length-1]}`;
                    break;


        default: alert("Invalid Input");
                    break;
    }
})


clearBtn.addEventListener('click', function(){
    input.value = "0";
    currentExpression = "";
    currentExpression2 = "";
    v = "";
    ar.length = 0;
    ar2.length = 0;
    count = 0;
})
