const radiusOutput = document.querySelector('#radius-output');
const areaOutput = document.querySelector('#area-output');
const myElement = document.querySelector('#favchap');
const input = document.querySelector('#item-input');

if (myElement) {
    myElement.value = "New text";
}

const PI = 3.14159;
let radius = 10;
let area = PI * radius * radius;

if (radiusOutput && areaOutput) {
    radiusOutput.textContent = radius;
    areaOutput.textContent = area.toFixed(2);
}

setTimeout(() => {
    console.log('Hello from safe setTimeout');
}, 1000);