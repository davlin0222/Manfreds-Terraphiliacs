const menu_element = document.querySelector('.menu');

const magnifiableImages = document.querySelectorAll('.magnifiable-image');

let isImageMagnified = false;

let selectedMagnifiableImage;

magnifiableImages.forEach(magnifiableImage =>
    magnifiableImage.addEventListener('click', toggleImageMagnificationOfTarget)
);

// TODO: exit magnify on esc

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

    const scrollY = scrollYToScrollElementToCenter(selectedMagnifiableImageParent);

    const currentScrollY = Math.round(window.scrollY);

    if (
        documentEvent.type === 'click' &&
        !isApproximatelyEqual(currentScrollY, scrollY, 1)
    ) {
        window.scrollTo(0, scrollY);
        return;
    }

    elementPreserveSize(selectedMagnifiableImageParent);

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

function isApproximatelyEqual(x, y, epsilon = 0.004) {
    return Math.abs(x - y) < epsilon;
}
