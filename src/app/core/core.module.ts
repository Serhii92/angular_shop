import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantsService, CONSTANTS } from './services/constants.service';
import { GeneratorService, GeneratorFactory } from './services/generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: CONSTANTS},
    { provide: GeneratorService, useFactory: GeneratorFactory(5)}
  ]
})
export class CoreModule { }
