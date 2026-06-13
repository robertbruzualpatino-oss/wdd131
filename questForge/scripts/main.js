document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initTerminalEffects();
});

function initNavigation() {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener("click", () => {
        if (mainNav.style.display === "block") {
            mainNav.style.display = "none";
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        } else {
            mainNav.style.display = "block";
            menuToggle.textContent = "✕";
            menuToggle.setAttribute("aria-expanded", "true");
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            mainNav.style.display = "";
            menuToggle.textContent = "☰";
        }
    });
}

function initTerminalEffects() {
    const targets = document.querySelectorAll(".terminal-prompt");

    targets.forEach(target => {
        const originalText = target.textContent;
        target.textContent = "";

        let index = 0;
        const speed = 30;

        function typeCharacter() {
            if (index < originalText.length) {
                target.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeCharacter, speed);
            }
        }

        typeCharacter();
    })
}