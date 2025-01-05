document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / scrollHeight;

    const rotation = scrollPercentage * 360;
    const img = document.querySelector("nav ul li img");

    img.style.transform = `rotate(${rotation}deg)`;
});

const links = document.querySelectorAll('a, button');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('a').forEach(a => {
    a.style.cursor = 'none';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.borderWidth = '28px';
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.borderWidth = '20px';
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const menuButton = document.querySelector('nav ul li button');
    const menuBar = document.querySelector('.menu-bar');

    menuButton.addEventListener('click', function() {
        if (menuBar.style.display === 'block') {
            menuBar.style.display = 'none';
        } else {
            menuBar.style.display = 'block';
        }
    });
});
