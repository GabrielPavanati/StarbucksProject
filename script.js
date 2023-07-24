function changeDrink(drink) {
    document.querySelector('.imgContent img').src = drink
}

function changeColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}