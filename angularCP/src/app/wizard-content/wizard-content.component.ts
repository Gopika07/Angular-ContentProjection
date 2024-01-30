import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wizard-content',
  standalone: true,
  imports: [],
  templateUrl: './wizard-content.component.html',
  styleUrl: './wizard-content.component.scss'
})
export class WizardContentComponent {
  @Input() isActive: boolean = false;
}
