import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ]
})
export class LayoutModule { }
