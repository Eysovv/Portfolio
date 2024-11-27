document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Hoe ver er is gescrolled
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Totale scrollbare hoogte
    const scrollPercentage = scrollTop / scrollHeight; // Huidige scrollpercentage

    const rotation = scrollPercentage * 360; // Bereken de rotatie (0-360 graden)
    const img = document.querySelector("nav ul li img");

    img.style.transform = `rotate(${rotation}deg)`; // Pas de rotatie toe
});