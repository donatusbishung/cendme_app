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
    }, 10000);
    
    }
    
}

loopArr(0)

// Downloadss

// const myDownloads = document.querySelector('.downloads')

// // console.log(myDownloads.innerText)
// let arrDownloads = [200.344, 200.543, 200.633, 202.342, 202.402, 207.070, 212.332, 217.00, 219.231]

// const downloadsCount = (index) => {
//     if (index < arrDownloads.length) {
//         const currentDownload = arrDownloads[index]

//         myDownloads.innerText = `${currentDownload}`;

//         index++;

//         myDownloads.addEventListener('mousemove', setTimeout(() => {
//             downloadsCount(index);
//         }, 50))
        
//     }
// }

// // myDownloads.addEventListener('mousemove', downloadsCount(0))

// downloadsCount(0)