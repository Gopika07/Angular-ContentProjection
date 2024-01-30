import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WizardContentComponent } from './wizard-content/wizard-content.component';
import { WizardComponent } from './wizard/wizard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WizardComponent,
    WizardContentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCP';
}
