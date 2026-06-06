const products = [ 
    { id: "fc-1888", name: "flux capacitor", averageRating: 4.5 },
    { id: "fc-2050", name: "power laces", averageRating: 4.7 },
    { id: "fs-1987", name: "time circuits", averageRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averageRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averageRating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;

        let formattedName = product.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        option.textContent = formattedName;

        productSelect.appendChild(option);
    });

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});