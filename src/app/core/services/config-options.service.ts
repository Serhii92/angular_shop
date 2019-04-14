import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {

  private config: object = {
    id: 1,
    login: 'Serhii',
    email: 'nizhnichenko92@gmail.com'
  };

  constructor() { }

  getConfig(): object {
    return this.config;
  }

  setNewConfig(config: object): void {
    this.config = { ...config };
  }

  modifyConfig(config: object): void {
    this.config = { ...this.config, ...config };
  }

  setConfigProperty(name: string, value: any): void {
    this.modifyConfig({ [name]: value });
  }
}
