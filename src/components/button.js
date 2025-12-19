"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initButton = initButton;
var logger_1 = require("../utils/logger");
function initButton() {
    var button = document.querySelector('#btn');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
        (0, logger_1.log)('Button clicked');
        alert('Hello from TS modules');
    });
}
