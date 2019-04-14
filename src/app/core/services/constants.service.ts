import { InjectionToken } from '@angular/core';

export const ConstantsService = new InjectionToken<Object>('ConstantsService');

export const CONSTANTS = {
  app: 'Angular Test Shop',
  ver: '1.0'
};