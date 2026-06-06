document.addEventListener("DOMContentLoaded", () => {
    const reviewCounterElement = document.getElementById("reviewCounter");

    let numReviews = Number(window.localStorage.getItem("reviews-Counter")) || 0;
    numReviews++;
    window.localStorage.setItem("reviews-Counter", numReviews);
    reviewCounterElement.textContent = numReviews;

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});