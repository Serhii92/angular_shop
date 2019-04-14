import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<string>('GeneratorService');

export function GeneratorFactory(n: number) {
  return function(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
}
