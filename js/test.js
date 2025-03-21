// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({ name: 'Alex' }),
//     headers: { 'Content-Type': 'application/json' },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('http://localhost:3000/menu')
//     .then((data) => data.json())
//     .then((res) => console.log(res));

// getResource('http://localhost:3000/menu').then((data) => createCard(data));

// function createCard(data) {
//     data.forEach(({ img, altimg, title, descr, price }) => {
//         const element = document.createElement('div');

//         element.classList.add('menu__item');
//         element.innerHTML = `
//             <img src=${img} alt=${altimg} />
//             <h3 class="menu__item-subtitle">${title}</h3>
//             <div class="menu__item-descr">
//                 ${descr}
//             </div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total">
//                     <span>${price}</span> грн/день
//                 </div>
//             </div>
//         `;
//         document.querySelector('.menu .container').append(element);
//     });

// ============= simple slide ============
// const slides = document.querySelectorAll('.offer__slide');
// const prev = document.querySelector('.offer__slider-prev');
// const next = document.querySelector('.offer__slider-next');
// const current = document.querySelector('#current');
// const total = document.querySelector('#total');

// showSlides(slideIndex);

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
// } else {
//     total.textContent = slides.length;
// }

// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     slides.forEach((item) => (item.style.display = 'none'));
//     slides[slideIndex - 1].style.display = 'block';

//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
// }

// function plusSlides(n) {
//     showSlides((slideIndex += n));
// }

// prev.addEventListener('click', () => {
//     plusSlides(-1);
// });
// next.addEventListener('click', () => {
//     plusSlides(1);
// });
