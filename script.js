var rowInput = document.getElementsByClassName('row-input');
var outputDiv = document.getElementById('output');
var equalBtn = document.getElementById('equal-btn');
var clearBtn = document.getElementById('clear-btn');

// add event in every input button
for(var i=0; i<rowInput.length; i++){
    // console.log(rowInput[i].innerHTML)
    rowInput[i].addEventListener('click', function (){
        // console.log(this.innerHTML);
        outputDiv.innerHTML += this.innerHTML;
    })
}

// add event in equal button
equalBtn.addEventListener('click', ()=>{
    var inputValue = outputDiv.innerHTML;
    let cal = eval(inputValue);
    outputDiv.innerHTML = cal;

    // if(inputValue.includes('+')){
    //     let plus_index = inputValue.indexOf('+');
    //     // let first = parseInt(inputValue.slice(0, plus_index));
    //     let first = inputValue.slice(0, plus_index);
    //     first = parseInt(first);
    //     let second = parseInt(inputValue.slice(plus_index + 1, ));
    //     let sum = first + second;
    //     outputDiv.innerHTML = sum;
    // } else if(inputValue.includes('-')){
    //     let minus_index = inputValue.indexOf('-');
    //     let first = inputValue.slice(0, minus_index);
    //     first = parseInt(first);
    //     let second = parseInt(inputValue.slice(minus_index + 1, ));
    //     let min = first - second;
    //     outputDiv.innerHTML = min;
    // } else if(inputValue.includes('*')){
    //     let multipication_index = inputValue.indexOf('*');
    //     let first = inputValue.slice(0, multipication_index);
    //     first = parseInt(first);
    //     let second = parseInt(inputValue.slice(multipication_index + 1, ));
    //     let mul = first * second;
    //     outputDiv.innerHTML = mul;
    // } else if(inputValue.includes('/')){
    //     let division_index = inputValue.indexOf('/');
    //     let first = inputValue.slice(0, division_index);
    //     first = parseInt(first);
    //     let second = parseInt(inputValue.slice(division_index + 1, ));
    //     let div = first / second;
    //     outputDiv.innerHTML = div;
    // }
    
})


// clear btn functionality
clearBtn.addEventListener('click', function(){
    outputDiv.innerHTML = "";
})

/*
a = '2';
b = '3';
c = a + b; // 23
*/
// var a = '2';
// var b = 'a';
// var c = parseInt(a) + parseInt(b); // type casting
// console.log(c);

// var a = "Nidhi cute girl";
// console.log(a.includes('R'));
// console.log(a.repeat(10))
// console.log(a);
// var b = a.replace('cute', 'good');
// console.log(b);

// var b = 'nidhi';
// console.log(b.slice(2, ))



/*
String function
1. at()
2. charAt()
3. indexOf()
4. repeat()
5. replace()
6. includes()
*/