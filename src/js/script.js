document.onclick = e => {
    if (e.target.id !== 'menu-button') hideMenu();
};
document.getElementById('menu-button').addEventListener('click', toggleMenu);

const menu_element = document.querySelector('.menu');

function toggleMenu() {
    menu_element.classList.toggle('menu--is-open');
}

function hideMenu() {
    menu_element.classList.remove('menu--is-open');
}

// document.querySelector('.menu').addEventListener('click', event => {
//     console.log(`document.querySelector ~ event`, event);
//     console.log(`document.querySelector ~ event.target`, event.target);
//     event.target.classList.toggle('menu-open');
// });

// document.addEventListener('click', function (e) {
//     let btn = document.querySelector('.menu');
//     if (e.target == document.querySelector('.menuButton')) {
//         btn.classList.toggle('mobileHidden');
//         btn.classList.remove('noTransition');
//     } else if (e.target.parentElement != document.querySelector('.menu')) {
//         btn.classList.add('mobileHidden');
//     }
// });

// document.querySelectorAll('main img').forEach(function (elmnt) {
//     elmnt.addEventListener('focus', () => {
//         transform(elmnt, 0.95);
//     });
//     elmnt.addEventListener('blur', () => {
//         transform(elmnt);
//     });
// });

// document.addEventListener('scroll', function () {
//     document.querySelectorAll('main img').forEach(function (elmnt) {
//         elmnt.blur();
//     });
// });

// function transform(element, size = 0) {
//     if (!size) {
//         element.style.transform = '';
//         return;
//     }
//     size = Math.min(
//         ((window.innerWidth * size) / element.clientWidth ** 1.9) * 230,
//         (window.innerHeight * 0.95) / element.clientHeight
//     );
//     size = Math.max(size, 1.0526);
//     translate = -element.y + window.innerHeight / 2 - element.height / 2;
//     element.style.transform = `matrix(${size},0,0,${size},0,${translate})`;
//     //element.style.transform = `matrix(1,0,0,1,0,${translate})`;
// }
