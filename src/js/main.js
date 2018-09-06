// Selectors
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');

// Initial state of menu -> not visible
let showMenu = false;

// Add event listener on menu click
menuButton.addEventListener('click', toggleMenuDisplay);

function toggleMenuDisplay() {
    if (!showMenu) {
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // Display Menu
        showMenu = true;
    }
    else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // Hide Menu
        showMenu = false;
    }
}