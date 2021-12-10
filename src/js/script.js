const menu_element = document.querySelector('.menu');

const magnifiableImages = document.querySelectorAll('.magnifiable-image');

let isImageMagnified = false;

let selectedMagnifiableImage;

magnifiableImages.forEach(magnifiableImage =>
    magnifiableImage.addEventListener('click', toggleImageMagnificationOfTarget)
);

document.onclick = e => {
    if (e.target.id !== 'menu-button') hideMenu();
    toggleImageMagnification(e);
};

document.onscroll = e => {
    if (e.target.id !== 'menu-button') hideMenu();
    toggleImageMagnification(e);
};

document.getElementById('menu-button').addEventListener('click', toggleMenu);

function toggleMenu() {
    menu_element.classList.toggle('menu--is-open');
}

function hideMenu() {
    menu_element.classList.remove('menu--is-open');
}

function toggleImageMagnificationOfTarget(event) {
    selectedMagnifiableImage = event.target;
}

function toggleImageMagnification(documentEvent) {
    if (!selectedMagnifiableImage) return;

    const selectedMagnifiableImageParent = selectedMagnifiableImage.parentElement;

    if (isImageMagnified) {
        selectedMagnifiableImage.classList.remove('magnifiable-image--is-magnified');

        removeStyle(selectedMagnifiableImageParent, 'width');
        removeStyle(selectedMagnifiableImageParent, 'height');

        selectedMagnifiableImage = null;
        isImageMagnified = false;

        return;
    }

    const scrollY = scrollYToScrollElementToCenter(
        selectedMagnifiableImage.parentElement
    );

    const currentScrollY = Math.round(window.scrollY);
    if (documentEvent.type === 'click' && currentScrollY !== scrollY) {
        window.scrollTo(0, scrollY);
        return;
    }

    elementPreserveSize(selectedMagnifiableImage.parentElement);

    selectedMagnifiableImage.classList.add('magnifiable-image--is-magnified');
    isImageMagnified = true;
}

function elementPreserveSize(element) {
    const width = element.clientWidth;
    const height = element.clientHeight;

    element.style.width = width + 'px';
    element.style.height = height + 'px';
}

function scrollYToScrollElementToCenter(element) {
    const elementScrollY = element.offsetTop;
    const elementClientHeight = element.clientHeight;
    const windowHeight = window.innerHeight;

    const elementCenterScrollY = elementScrollY + elementClientHeight / 2;

    const ScrollToY = elementCenterScrollY - windowHeight / 2;

    return ScrollToY;
}

function removeStyle(element, style) {
    if (element.style.removeProperty) {
        element.style.removeProperty(style);
    } else {
        /* IE < 9  */
        element.style.removeAttribute(style);
    }
}

// function unMagnifyClassReplacement(magnifiableImage) {
//     magnifiableImage.style.cursor = 'zoom-in';
//     magnifiableImage.style.width = '100%';
//     magnifiableImage.style.position = 'static';
//     // magnifiableImage.style.top = '50%';
//     // magnifiableImage.style.left = '50%';
//     magnifiableImage.style.transform = 'translate(0, 0)';
//     magnifiableImage.style.boxShadow = 'none';
// }

// function magnifyClassReplacement(magnifiableImage) {
//     magnifiableImage.style.cursor = 'zoom-out';
//     magnifiableImage.style.width = '90%';
//     magnifiableImage.style.position = 'fixed';
//     magnifiableImage.style.top = '50%';
//     magnifiableImage.style.left = '50%';
//     magnifiableImage.style.transform = 'translate(-50%, -50%)';
//     magnifiableImage.style.boxShadow = '0 0 1000px 0 #000';
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
