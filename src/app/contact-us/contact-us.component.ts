import { Component, OnInit, Inject, Optional } from '@angular/core';
import { LocalStorageService } from '../core/services/local-storage.service';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { ConstantsService } from '../core/services/constants.service';
import { GeneratorService } from '../core/services/generator.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  randomValue: string;
  name: string;
  value: string;
  configPropertyName: string;
  configPropertyValue: string;

  constructor(
    private localStorageService: LocalStorageService,
    private configOptionsService: ConfigOptionsService,
    @Inject(ConstantsService) @Optional() public constantsService: object,
    @Inject(GeneratorService) @Optional() private generatorService: string
  ) { }

  ngOnInit() {
    this.randomValue = this.generatorService;
  }

  onSaveToLocalStorage(): void {
    if (this.name && this.value) {
      this.localStorageService.setItem(this.name, this.value);
    }
  }

  onRemoveFromLocalStorage(): void {
    if (this.name) {
      this.localStorageService.removeItem(this.name);
    }
  }

  onGetItemFromLocalStorage(): void {
    if (this.name) {
      console.log(`Item from Local storage: ${this.localStorageService.getItem(this.name)}`);
    }
  }

  onShowConfigOptions(): void {
    console.log(JSON.stringify(this.configOptionsService.getConfig()));
  }

  onSetNewConfigObject(obj: Object): void {
    this.configOptionsService.setNewConfig(obj);
  }

  onSetConfigProperty(): void {
    if (this.configPropertyName && this.configPropertyValue) {
      this.configOptionsService.setConfigProperty(this.configPropertyName, this.configPropertyValue);
    }
  }
}
