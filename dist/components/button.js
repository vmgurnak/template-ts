import { log } from '../utils/logger';
export function initButton() {
    const button = document.querySelector('#btn');
    button?.addEventListener('click', () => {
        log('Button clicked');
        alert('Hello from TS modules');
    });
}
