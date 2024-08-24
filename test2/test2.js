// question 1

function extractNumbers(str) {
    return str.match(/\d+/g);
}

console.log(extractNumbers("a1fg5hj6"));

// question 2

function fibonacci(n, a = 0, b = 1) {
    if (a > 144) return;
    console.log(a);
    setTimeout(() => fibonacci(n + 1, b, a + b), 1000);
}

fibonacci(0);

// question 3 

async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchProductTitles();

// question 4

    document.getElementById('colorButtons').addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            document.body.style.backgroundColor = event.target.textContent;
        }
    });
    document.getElementById('click', function() {
        const block = document.getElementById('toggleBlock');
        if (block.style.display === 'none') {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });


// question 5

const square = document.getElementById('square');
        const toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', () => {
            if (square.style.display === 'none') {
                square.style.display = 'block';
                toggleButton.textContent = 'Скрыть блок';
            } else {
                square.style.display = 'none';
                toggleButton.textContent = 'Показать блок';
            }
        });


// question 6

let count = 0;
const counterElement = document.getElementById('counter');

const interval = setInterval(() => {
    count++;
    counterElement.textContent = count;
    if (count >= 100) {
        clearInterval(interval);
    }
}, 1);

// question 7

document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
      const response = await fetch('products.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There is an error :" , error);
    }
  });
  
