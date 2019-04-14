import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<string>('GeneratorService');

export function GeneratorFactory(n: number) {
  return function (): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };
}