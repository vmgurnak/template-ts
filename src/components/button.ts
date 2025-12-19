import { log } from '../utils/logger';

export function initButton(): void {
  const button = document.querySelector<HTMLButtonElement>('#btn');

  button?.addEventListener('click', () => {
    log('Button clicked');
    alert('Hello from TS modules');
  });
}
