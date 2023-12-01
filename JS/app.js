let mycounter = document.querySelector(".counter")

let arr = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7]

const loopArr = (index) => {
    if (index < arr.length) {
        const currentNumber = arr[index]

    mycounter.innerText = currentNumber
    // console.log(currentNumber)
    index++;

    setTimeout(() => {
        loopArr(index);
    }, 9000);
    
    }
    
}

loopArr(0)