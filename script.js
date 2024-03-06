document.addEventListener('DOMContentLoaded', function () {
    // Get display element
    const display = document.querySelector('.display');

    // Get all calculator buttons
    const buttons = document.querySelectorAll('.button');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Handle button click
            handleButtonClick(button.innerText);
        });
    });

    // Add keyboard event listener to the document
    document.addEventListener('keydown', function (event) {
        const key = event.key;

        // Check if the pressed key is a valid button
        const isValidButton = Array.from(buttons).some(button => button.innerText === key);
        if (isValidButton) {
            // Handle button click
            handleButtonClick(key);
        } else if (key === 'Enter') {
            // Handle the 'Enter' key as '=' button
            handleButtonClick('=');
        } else if (key === 'Escape') {
            // Handle the 'Escape' key as 'C' button (reset)
            handleButtonClick('C');
        }
    });

    // Function to handle button click
    function handleButtonClick(value) {
        if (value === 'C') {
            // Clear the display
            display.textContent = '0';
        } else if (value === '=') {
            // Evaluate and display the result
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            // Append the clicked button value to the display
            if (display.textContent === '0' || display.textContent === 'Error') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
    }
});
