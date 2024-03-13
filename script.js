function checkWidthAndHeight() {
    let screenHeight = document.documentElement.clientHeight;
    let screenWidth = document.documentElement.clientWidth;
    if (screenWidth > 782) {
        document.getElementById("header").style.height = document.documentElement.clientWidth * 0.9 * 0.5 * 1.17 - 40 + 'px'
    } else {
        document.getElementById("header").style.height = screenHeight + 'px'
    }
}

setInterval( checkWidthAndHeight, 10);
