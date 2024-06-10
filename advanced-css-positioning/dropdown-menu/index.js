let left = 0;

function animacion() {
    let element = document.querySelector(".item-relative");

    left += 2;

    element.style.left = left + 'px';

    if(left >= 300) {
        clearInterval(id);
    }
}

let id = setInterval(animacion, 100);
