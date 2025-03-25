// ================== Slider ====================
export default function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field,
}) {
    const slides = document.querySelectorAll(slide);
    const slider = document.querySelector(container);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const current = document.querySelector(currentCounter);
    const total = document.querySelector(totalCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);

    const width = +window.getComputedStyle(slidesWrapper).width.slice(0, -2);
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach((slide) => {
        slide.style.width = `${width}px`;
    });

    slider.style.position = 'relative';

    const idicators = document.createElement('ol');
    const dots = [];
    idicators.classList.add('dots-idicators');
    idicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(idicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: 0.5;
            transition: opacity 0.6s ease;
        `;
        if (i === 0) {
            dot.style.opacity = 1;
        }

        idicators.append(dot);
        dots.push(dot);
    }

    // Функция обновления текущего слайда и дотсов
    function updateCurrentSlide() {
        current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
        dots.forEach((dot) => (dot.style.opacity = '.5'));
        dots[slideIndex - 1].style.opacity = 1;
    }

    updateCurrentSlide();

    // Функция перемещения слайдов
    function moveToSlide(newIndex) {
        // проверка на наличие массива
        if (newIndex < 1) {
            newIndex = slides.length;
        } else if (newIndex > slides.length) {
            newIndex = 1;
        }

        slideIndex = newIndex;
        offset = width * (slideIndex - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;
        updateCurrentSlide();
    }

    next.addEventListener('click', () => {
        if (slideIndex === slides.length) {
            moveToSlide(1);
        } else {
            moveToSlide(slideIndex + 1);
        }
    });

    prev.addEventListener('click', () => {
        if (slideIndex === 1) {
            moveToSlide(slides.length);
        } else {
            moveToSlide(slideIndex - 1);
        }
    });

    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            moveToSlide(+e.target.getAttribute('data-slide-to'));
        });
    });
}
