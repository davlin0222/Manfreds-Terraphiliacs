const menu_element = document.querySelector('.menu');

const magnifiableImages = document.querySelectorAll('.magnifiable-image');

let isAnImageMagnified = false;

magnifiableImages.forEach(magnifiableImage =>
    magnifiableImage.addEventListener('click', toggleImageMagnificationOfTarget)
);

// document.onclick = e => {
//     if (e.target.id !== 'menu-button') hideMenu();
//     unMagnifyAllImages();
// };

// document.onscroll = e => {
//     if (e.target.id !== 'menu-button') hideMenu();
//     unMagnifyAllImages();
// };

document.getElementById('menu-button').addEventListener('click', toggleMenu);

function toggleMenu() {
    menu_element.classList.toggle('menu--is-open');
}

function hideMenu() {
    menu_element.classList.remove('menu--is-open');
}

function toggleImageMagnificationOfTarget(event) {
    if (isAnImageMagnified) {
        unMagnifyAllImages();
        return;
    }

    magnifyImage(event.target);
}

function magnifyImage(imageToMagnify) {
    elementScrollToCenter(imageToMagnify.parentElement);
    elementPreserveSize(imageToMagnify.parentElement);

    imageToMagnify.classList.add('magnifiable-image--is-magnified');
    isAnImageMagnified = true;
}

function unMagnifyAllImages() {
    for (const magnifiableImage of magnifiableImages) {
        magnifiableImage.classList.remove('magnifiable-image--is-magnified');
    }
    isAnImageMagnified = false;

    // magnifiableImages.forEach(magnifiableImage => {
    //     magnifiableImage.classList.remove('magnifiable-image--is-magnified');
    // });
}

function elementPreserveSize(element) {
    const width = element.clientWidth;
    const height = element.clientHeight;

    element.style.width = width + 'px';
    element.style.height = height + 'px';
}

function elementScrollToCenter(element) {
    const elementScrollY = element.offsetTop;
    const elementClientHeight = element.clientHeight;
    const windowHeight = window.innerHeight;

    const elementMiddleScrollY = elementScrollY + elementClientHeight / 2;

    const ScrollToY = elementMiddleScrollY - windowHeight / 2;

    window.scrollTo(0, ScrollToY);
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
