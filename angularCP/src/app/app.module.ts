import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WizardContentComponent } from './wizard-content/wizard-content.component';
import { WizardComponent } from './wizard/wizard.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WizardComponent,
    WizardContentComponent,
    BrowserModule,
    AppComponent
  ]
})
export class AppModule { }
