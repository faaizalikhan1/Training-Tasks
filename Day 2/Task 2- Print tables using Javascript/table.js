let btn = document.getElementById('submit-btn');
// outer = document.querySelector('.output-area');
let outer = document.querySelector('#table-data');
let titleTable = document.getElementById('title-table');

let table = document.getElementById('cbtable');
let op;
let firstNumber;
let secondNumber;
// let i;
// let j;
// let tableArray = [];

btn.addEventListener('click', ()=>{
    firstNumber = Number(document.getElementById('numberFirst').value);
    secondNumber = Number(document.getElementById('numberSecond').value); 
    
    // Input validations
    
    if(firstNumber > secondNumber){
        alert("The First number should be smaller than the Second one!");
    }

    if( isNaN(firstNumber) == true || isNaN(secondNumber) == true){
        alert("Invalid Input, Please enter a number");
    }

    if(firstNumber < 0 || secondNumber < 0){
        alert("Numbers can't be negative! Please enter a positive number");
    }

    else{
        printTable(firstNumber,secondNumber);
        cbookTable(firstNumber, secondNumber);
        titleTable.innerHTML = "";

        titleTable.innerHTML += `Table for the numbers between ${firstNumber} and ${secondNumber}` 
    }
   
})



// Function to print the table

function printTable(x,y){
    outer.innerHTML = "";
    for(i=x; i<=y; i++){

        outer.innerHTML += `<b> Table of ${i} <br> </b>`
        for(let j = 1; j<=10; j++){
            outer.innerHTML += `${i} &#215; ${j} = ${i*j} <br>`;
           
            console.log(`${i} * ${j} = ${i*j}`)
        }

        outer.innerHTML += "<br>"

        // document.querySelector('.output-area').innerHTML = `${x}*${i} = ${x*i}`;
        // console.log(`${x}*${i} = ${x*i}`);

        // First style
        // for(j=x; j<=y; j++){
        //     console.log(`${j}*${i} = ${j*i}`);
        
        //  Second Style
        //     outer.innerHTML += `${j}*${i} = ${j*i} <br>`;
        //     document.querySelector('.output-area').innerText = `${j}*${i} = ${j*i}`;
        //     if(j == 2){
        //         tableArray.push(j*i);
        //     }
        // }     
    }

}

// Function to print the table in the Children's Book format

function cbookTable(x,y){

    table.innerHTML = "";
    
    op = `     
    <tr class="num_main">
        <td style="background:white;">X</td>
        <td style="background:white;">1</td>
        <td style="background:white;">2</td>
        <td style="background:white;">3</td>
        <td style="background:white;">4</td>
        <td style="background:white;">5</td>
        <td style="background:white;">6</td>
        <td style="background:white;">7</td>
        <td style="background:white;">8</td>
        <td style="background:white;">9</td>
        <td style="background:white;">10</td>
    </tr>`

    for(i=x; i<=y; i++){

        // outer.innerHTML += `<b> Table of ${i} <br> </b>`
        op+= `<tr>`
        op+= `<td style="background:white;" class="num_main">${i}</td>`;
        for(let j = 1; j<=10; j++){
            // outer.innerHTML += `${i} &#215; ${j} = ${i*j} <br>`;
           
           op+= `<td>${i*j}</td>`;
            console.log(`${i} * ${j} = ${i*j}`)
        }

        op+= `</tr>`;

        
}

table.innerHTML += op;
}


