document.addEventListener('DOMContentLoaded', function () {
    
    const display = document.querySelector('.display');

    
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
        
            handleButtonClick(button.innerText);
        });
    });

    
    document.addEventListener('keydown', function (event) {
        const key = event.key;

        
        const isValidButton = Array.from(buttons).some(button => button.innerText === key);
        if (isValidButton) {
    
            handleButtonClick(key);
        } else if (key === 'Enter') {
        
            handleButtonClick('=');
        } else if (key === 'Escape') {
            
            handleButtonClick('C');
        }
    });


    function handleButtonClick(value) {
        if (value === 'C') {
        
            display.textContent = '0';
        } else if (value === '=') {
        
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
        
            if (display.textContent === '0' || display.textContent === 'Error') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
    }
});
