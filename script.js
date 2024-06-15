// JavaScript code in script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to count characters in a string
    function countCharacters(cardIndex) {
        const inputBox = document.getElementById("count");
        const inputValue = inputBox.value.trim(); // Trim whitespace from input
        if (inputValue === '') {
            displayResult(cardIndex, 'Please enter a string');
            return;
        }

        const charCount = {};
        for (let char of inputValue) {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
        displayResult(cardIndex, JSON.stringify(charCount));
    }

    // Function to calculate the Fibonacci sequence up to n-th number
    function fibonacci(cardIndex) {
        const inputBox = document.getElementById("fibonacciInput");
        const n = parseInt(inputBox.value);
        if (isNaN(n) || n < 0) {
            displayResult(cardIndex, 'Please enter a non-negative integer');
            return;
        }

        if (n === 0) {
            displayResult(cardIndex, '0');
            return;
        }
        if (n === 1) {
            displayResult(cardIndex, '1');
            return;
        }

        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        displayResult(cardIndex, fib[n].toString());
    }

    // Function to sort numbers in an array
    function sortNumbers(cardIndex) {
        const inputBox = document.getElementById("sort");
        const input = inputBox.value.trim(); // Trim whitespace from input
        if (input === '') {
            displayResult(cardIndex, 'Please enter numbers separated by commas');
            return;
        }

        const numbers = input.split(',').map(num => parseFloat(num.trim()));
        if (numbers.some(isNaN)) {
            displayResult(cardIndex, 'Invalid input');
            return;
        }
        const sortedNumbers = numbers.sort((a, b) => a - b);
        displayResult(cardIndex, sortedNumbers.join(', '));
    }

    // Function to display result in the result box
    function displayResult(cardIndex, result) {
        console.log(result);
        const resultBox = document.getElementById(`result-box${cardIndex}`);
        resultBox.style.display = 'block'; // Show the result box
        resultBox.textContent = result;
    }

    // Event listeners for buttons
    document.getElementById("countButton").addEventListener("click", function() {
        countCharacters(0);
    });

    document.getElementById("fibonacciButton").addEventListener("click", function() {
        fibonacci(1);
    });

    document.getElementById("sortButton").addEventListener("click", function() {
        sortNumbers(2);
    });

    // Event listeners for flipping cards (if needed)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            cards.forEach(c => c.classList.remove('flipped'));
            card.classList.add('flipped');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('flipped');
        });
    });

    // Initial setup: Hide all result boxes
    const resultBoxes = document.querySelectorAll('.result-box');
    resultBoxes.forEach(box => {
        box.style.display = 'none';
    });
});
