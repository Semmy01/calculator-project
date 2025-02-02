// const buttonWrapper = document.querySelectorAll('.me')


// buttonWrapper.forEach((item, pos) => {
//     const btns = item.querySelectorAll("button");
//     btns.forEach(function(btn){
//         btn.addEventListener('click', function(){
//             console.log(btn)
//         }) 
//     })

// })

// const buttonWrapper = document.querySelectorAll('.me')

// for (let i =0; i<buttonWrapper.length; i++) {

//    const pickedDivs =  buttonWrapper[i]
//    const btns = pickedDivs.querySelectorAll('button')

//     for(let i =0; i<btns.length; i++) {
//        const pickedbtns = btns[i]
       
//         pickedbtns.addEventListener('click', function(){
//             alert(pickedbtns.innerText)
//         })
//     }

// }


//i will come back to undertsand this part for niw follow brian

let buffer = '0'

const screen =document.querySelector('.calculation-display')

let runningTotal = 0

let previousOperator;


function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value)
    }
    else{
        handleNumber(value)
    }
    show()
}

function handleNumber(number){
    if (buffer === '0'){
        buffer = number
    } 
    else{
        buffer = buffer + number
    }
}

function show() {
    screen.innerText = buffer
}

function handleMaths(value) {
    if (buffer === '0'){
        //do nothing
        return;
    }

    const intBuffer = parseInt(buffer)
    if (runningTotal === 0){
        runningTotal = intBuffer
    }
    else {flushOperation(intBuffer)
    }

    previousOperator = value;
    buffer = '0';

    console.log(runningTotal)
}


function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal= runningTotal+intBuffer
    }
    else if(previousOperator === '-'){
        runningTotal= runningTotal-intBuffer
    }
    else if (previousOperator === '*'){
        runningTotal= runningTotal * intBuffer
    }
    else if (previousOperator === '/'){
        runningTotal= runningTotal/intBuffer
    }

}



function handleSymbol(symbol){

    switch (symbol){
        case 'C':
            buffer = '0'
            break;

        case '=':
            if (previousOperator === null){
                //ypu need two numbers to do maths
                return
            }
            flushOperation(parseInt(buffer))
            buffer = runningTotal;
            runningTotal = 0
            previousOperator = null
            break;
        
        case '←':
            if (buffer.length === 1) {
                buffer = '0'
            }
            else {
                buffer = buffer.substring(0,buffer.length-1)
            }
            break;

        case '+':
        case '-':
        case '*':
        case '/':
            handleMaths(symbol)

}
}



function initialize () {
    const btnsContainer = document.querySelector('.calc-buttons')
    btnsContainer.addEventListener("click", function(event){
        buttonClick(event.target.innerText)
    })
}

initialize()








