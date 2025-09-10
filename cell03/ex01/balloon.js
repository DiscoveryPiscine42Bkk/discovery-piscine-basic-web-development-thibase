const balloon = document.getElementById('balloon');


balloon.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(balloon).width);
    
   
    currentSize += 10;
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';

    
    if (currentSize <= 420) {
        if (currentSize <= 200) balloon.style.backgroundColor = 'red';
        else if (currentSize <= 300) balloon.style.backgroundColor = 'green';
        else balloon.style.backgroundColor = 'blue';
    }

    
    if (currentSize > 420) {
        balloon.style.width = '200px';
        balloon.style.height = '200px';
        balloon.style.backgroundColor = 'red';
    }
});


balloon.addEventListener('mouseenter', () => {
    let currentSize = parseInt(window.getComputedStyle(balloon).width);
    if (currentSize > 200) {
        currentSize -= 5;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';
        
        
        if (currentSize <= 200) balloon.style.backgroundColor = 'red';
        else if (currentSize <= 300) balloon.style.backgroundColor = 'green';
        else balloon.style.backgroundColor = 'blue';
    }
});

