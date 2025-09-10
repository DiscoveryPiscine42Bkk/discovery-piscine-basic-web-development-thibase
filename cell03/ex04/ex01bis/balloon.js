$('#balloon').click(function() {
    let currentSize = parseInt($(this).width());
    currentSize += 10;
    $(this).css({
        width: currentSize + 'px',
        height: currentSize + 'px',
        backgroundColor: getBalloonColor(currentSize)
    });

    if (currentSize > 420) {
        $(this).css({
            width: '200px',
            height: '200px',
            backgroundColor: 'red'
        });
    }
});

function getBalloonColor(size) {
    if (size <= 200) return 'red';
    else if (size <= 300) return 'green';
    else return 'blue';
}

// เมื่อเมาส์เข้าออกจากลูกโป่ง
$('#balloon').mouseenter(function() {
    let currentSize = parseInt($(this).width());
    if (currentSize > 200) {
        currentSize -= 5;
        $(this).css({
            width: currentSize + 'px',
            height: currentSize + 'px',
            backgroundColor: getBalloonColor(currentSize)
        });
    }
});
