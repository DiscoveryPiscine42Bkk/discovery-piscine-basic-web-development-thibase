// ตัวแปรที่เก็บปุ่ม
const button = document.getElementById('changeColorBtn');

// ฟังก์ชันสำหรับสุ่มสี
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// เมื่อคลิกปุ่มจะเปลี่ยนสีพื้นหลัง
button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});
