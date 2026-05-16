document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById(lastModified);
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuButton.classList.toggle("open");

            if (menuButton.classList.contains("open")) {
                menuButton.innerHTML = "&#10006;";
            } else {
                menuButton.innerHTML = "&#9776;"
            }
        });
    }
});