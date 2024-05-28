const elements = document.querySelectorAll('.slider__element');
let currentIndex = 0;

showElement = (index) => {
    elements[currentIndex].classList.remove('slider__element_active');
    elements[index].classList.add('slider__element_active');
    currentIndex = index;
}

document.querySelector('.pagination__button_left').addEventListener('click', () => {
    let index = currentIndex - 1;
    if (index < 0) {
        index = elements.length - 1;
    }
    showElement(index);
    document.querySelector('.pagination__active-page').textContent = String(index + 1);
});

document.querySelector('.pagination__button_right').addEventListener('click', () => {
    let index = currentIndex + 1;
    if (index >= elements.length) {
        index = 0;
    }
    showElement(index);
    document.querySelector('.pagination__active-page').textContent = String(index + 1);
});

showElement(currentIndex);