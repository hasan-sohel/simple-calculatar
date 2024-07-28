var btnInput = document.getElementsByClassName('btn-input');
// -------- we can't add event listener into an array/object. but we can add event in a single element --------
// -------- wrong --------
// btnInput.addEventListener('click', function(){
//     console.log('called');
// })
// -------- right --------
// btnInput[1].addEventListener('click', function(){
//     console.log('called');
// })

// raw form
for(var i = 0; i < btnInput.length; i++){
    // console.log(btnInput[i]);
    btnInput[i].addEventListener('click', function(){
        console.log('clicked');
    })
}

// short form
// for(elm of btnInput){
//     console.log(elm);
// }

// -------- Important --------
// var arr = [1, 2, 3, 'nidhi', true, 1, 2, 3, 'nidhi', true, true, 1, 2, 3, 'nidhi', true, true, 1, 2, 3, 'nidhi', true, true, 1, 2, 3, 'nidhi', true, true, 1, 2, 3, 'nidhi', true, true, 1, 2, 3, 'nidhi', true, true, 1, 2, 3, 'nidhi', true, true, 1, 2, 3];
// console.log(arr.length);

// for(var i = 0; i < 10; i++){
//     console.log(i);
//     // 1 2 3 4 .... 10
// }