"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initButton = initButton;
function initButton() {
    var button = document.querySelector('#btn');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
        console.log('Button clicked');
        alert('Hello from TS modules');
    });
}
