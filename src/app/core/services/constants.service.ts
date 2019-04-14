import { InjectionToken } from '@angular/core';

export const ConstantsService = new InjectionToken<object>('ConstantsService');

export const CONSTANTS = {
  app: 'Angular Test Shop',
  ver: '1.0'
};
