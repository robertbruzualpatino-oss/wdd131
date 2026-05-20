const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModifiedP = document.querySelector("#lastModified");
lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;