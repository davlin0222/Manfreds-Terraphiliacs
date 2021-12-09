const menu_element = document.querySelector('.menu');

document.onclick = e => {
    if (e.target.id !== 'menu-button') hideMenu();
    // if (!e.target.classList.contains('image-card')) removeImageCardMagnification(); // on all
};
document.onscroll = e => {
    hideMenu();
};
document.getElementById('menu-button').addEventListener('click', toggleMenu);

document
    .querySelectorAll('.magnifiable-image')
    .forEach(magnifiableImage =>
        magnifiableImage.addEventListener('click', toggleImageMagnification)
    );

function toggleMenu() {
    menu_element.classList.toggle('menu--is-open');
}

function hideMenu() {
    menu_element.classList.remove('menu--is-open');
}

function toggleImageMagnification(event) {
    centerElementAndKeepBackgroundSize(event.target);

    event.target.classList.toggle('magnifiable-image--is-magnified');
}

function centerElementAndKeepBackgroundSize(element) {
    if (element.classList.contains('magnifiable-image--is-magnified')) return;

    const parentElement = element.parentElement;

    elementScrollToCenter(parentElement);

    const width = event.target.clientWidth;
    const height = event.target.clientHeight;

    parentElement.style.width = width + 'px';
    parentElement.style.height = height + 'px';
}

function elementScrollToCenter(imageCard) {
    const elementScrollY = imageCard.offsetTop;
    const elementClientHeight = imageCard.clientHeight;
    const windowHeight = window.innerHeight;

    const elementMiddleScrollY = elementScrollY + elementClientHeight / 2;

    const ScrollToY = elementMiddleScrollY - windowHeight / 2;

    window.scrollTo(0, ScrollToY);
}

// function removeImageCardMagnification(event) {
//     event.target.parentElement.classList.remove('image-card--has-magnification');
// }

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
