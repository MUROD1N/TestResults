// #1

const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")) // Выведет true
console.log(containsOnlyDigits("12a45"))  // Выведет false

// #2
let count = 1;

const logMessage = () => {
    console.log('Прошла секунда')
    count++
}

setInterval(logMessage, 1000) 

//  #3

const countt = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}

countt();

// #4

const block = document.getElementById('myBlock');
block.addEventListener('click', () => {
    block.classList.toggle('bg-color');
});

// #5
const request = new XMLHttpRequest();
request.open('GET', 'test.json', true);
request.setRequestHeader("Content-Type", "application/json")
request.send();
console.log(request);
request.onload = () => {
    const data = JSON.parse(request.response);
}

request();
