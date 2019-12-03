import './stylesheets/main.scss';

import '@babel/polyfill';

import './js/helpers'; // Empty
import './js/functions'; // Empty
import './js/packedges';

import Interface from './js/classes/Interface';

// -----Burger Menu-----
const menuButton = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const menuLink = navMenu.querySelectorAll('.nav__link');

window.addEventListener('resize', resize);
menuButton.addEventListener('click', burgerMenuToggle);
[...menuLink].forEach((current) => { current.addEventListener('click', link); });

function resize() {
    if (innerWidth > 768) burgerMenuClose();
}

function burgerMenuToggle() {
    menuButton.classList.toggle('burger_active');
    navMenu.classList.toggle('nav_show');
}

function burgerMenuClose() {
    menuButton.classList.remove('burger_active');
    navMenu.classList.remove('nav_show');
}

function link(e) {
    e.preventDefault();
    burgerMenuClose();
    //Links code
}

// -----Projects Section-----
const projectsButton = document.querySelectorAll('.projects__filter-item');
const projects = document.querySelectorAll('.projects__project');

[...projectsButton].forEach(function (element) {
    element.addEventListener('click', portfolio);
});

function portfolio(e) {
    portfolioButtonActive(e.target);
    if (e.target.dataset.cat === 'all') {
        [...projects].forEach(function (element) {
            element.classList.remove('projects__project_hide');
        });
    } else {
        [...projects].forEach(function (element) {
            if (element.dataset.cat === e.target.dataset.cat) {
                element.classList.remove('projects__project_hide');
            } else {
                element.classList.add('projects__project_hide');
            }
        });
    }
}

function portfolioButtonActive(element) {
    [...projectsButton].forEach(function (current) {
        if (current === element) {
            current.classList.add('projects__filter-item_active');
        } else {
            current.classList.remove('projects__filter-item_active');
        }
    });
}

Interface.activate(); // Empty
