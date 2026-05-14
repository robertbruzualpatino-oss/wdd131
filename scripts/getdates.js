const yearSpan = document.querySelector("#currentyear");
yearSpan.innerHTML = new Date().getFullYear();

const lastModifiedP = document.querySelector("#lastModified");
lastModifiedP.innerHTML = `Last Modification: ${document.lastModified}`;