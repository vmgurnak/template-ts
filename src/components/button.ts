import { log } from '../utils/logger.js';

export function initButton(): void {
  const button = document.querySelector<HTMLButtonElement>('#btn');

  button?.addEventListener('click', () => {
    console.log('Button clicked');
    alert('Hello from TS modules');
  });
}
