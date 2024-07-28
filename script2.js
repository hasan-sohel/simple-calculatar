var rowInput = document.getElementsByClassName("row-input");
var outputDiv = document.getElementById("output");
var equalBtn = document.getElementById("equal-btn")
for(var p = 0; p < rowInput.length; p++){
    rowInput[p].addEventListener("click", function (){
        outputDiv.innerHTML += this.innerHTML;
    })
}
equalBtn.addEventListener("click",()=>{
    var InputValue = outputDiv.innerHTML;
    if(InputValue.includes("+")){
        let plus_index = InputValue.indexOf("+");
        let first = parseInt(InputValue.slice(0, plus_index));
        let second = parseInt(InputValue.slice(plus_index + 1, ));
        let sum = first + second;
        outputDiv.innerHTML = sum;
    }else if(InputValue.includes("-")){
        let minus_index = InputValue.indexOf("-");
        let first = parseInt(InputValue.slice(0, minus_index));
        let second = parseInt(InputValue.slice(minus_index + 1, ));
        let min = first - second;
        outputDiv.innerHTML = min;
    } else if(InputValue.includes("*")){
        let multipication_index = InputValue.indexOf("*");
        let first = parseInt(InputValue.slice(0, multipication_index));
        let second = parseInt(InputValue.slice(multipication_index + 1, ));
        let mul = first * second;
        outputDiv.innerHTML = mul;
    } else if(InputValue.includes("/")){
        let division_index = InputValue.indexOf("/");
        let first = parseInt(InputValue.slice(0, division_index));
        let second = parseInt(InputValue.slice(division_index + 1, ));
        let div = first / second;
        outputDiv.innerHTML = div;
    }
})