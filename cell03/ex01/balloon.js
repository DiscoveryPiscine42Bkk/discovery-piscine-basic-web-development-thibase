const balloon = document.getElementById('balloon');

// ฟังก์ชันที่จะทำให้ balloon ขยายและเปลี่ยนสีเมื่อคลิก
balloon.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(balloon).width);
    
    // ขยายขนาด 10px
    currentSize += 10;
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';

    // เปลี่ยนสี
    if (currentSize <= 420) {
        if (currentSize <= 200) balloon.style.backgroundColor = 'red';
        else if (currentSize <= 300) balloon.style.backgroundColor = 'green';
        else balloon.style.backgroundColor = 'blue';
    }

    // หากขนาดเกิน 420px ให้กลับไปที่ขนาดเริ่มต้น
    if (currentSize > 420) {
        balloon.style.width = '200px';
        balloon.style.height = '200px';
        balloon.style.backgroundColor = 'red';
    }
});

// ฟังก์ชันลดขนาดเมื่อเมาส์ออกจาก balloon
balloon.addEventListener('mouseenter', () => {
    let currentSize = parseInt(window.getComputedStyle(balloon).width);
    if (currentSize > 200) {
        currentSize -= 5;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';
        
        // เปลี่ยนสี
        if (currentSize <= 200) balloon.style.backgroundColor = 'red';
        else if (currentSize <= 300) balloon.style.backgroundColor = 'green';
        else balloon.style.backgroundColor = 'blue';
    }
});
