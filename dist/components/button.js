export function initButton() {
    const button = document.querySelector('#btn');
    button?.addEventListener('click', () => {
        console.log('Button clicked');
        alert('Hello from TS modules');
    });
}
