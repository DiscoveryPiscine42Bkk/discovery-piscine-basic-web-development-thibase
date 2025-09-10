const balloon = document.getElementById('balloon');


let currentColorIndex = 0;
const colors = ['blue', 'green', 'red']; 

balloon.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(balloon).width);
    
    
    currentSize += 10;
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';

    
    balloon.style.backgroundColor = colors[currentColorIndex];

   
    currentColorIndex = (currentColorIndex + 1) % colors.length; 

    if (currentSize > 420) {
        balloon.style.width = '200px';
        balloon.style.height = '200px';
        balloon.style.backgroundColor = 'blue'; 
        currentColorIndex = 0; 
    }
});


balloon.addEventListener('mouseenter', () => {
    let currentSize = parseInt(window.getComputedStyle(balloon).width);
    
    
    if (currentSize > 200) {
        currentSize -= 5; 
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';

       
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        balloon.style.backgroundColor = colors[currentColorIndex];
    }
});


balloon.addEventListener('mouseleave', () => {
    let currentSize = parseInt(window.getComputedStyle(balloon).width);
    

    if (currentSize < 420) {
        currentSize += 5; 
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';


        balloon.style.backgroundColor = colors[currentColorIndex];
    }
});





