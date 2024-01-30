import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { WizardContentComponent } from '../wizard-content/wizard-content.component';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent implements AfterContentInit{
  @ContentChildren(WizardContentComponent) steps!: QueryList<WizardContentComponent>;

  currentStep: number = 0;
  totalSteps: number = 4; 
  
  ngAfterContentInit(){
    this.steps.toArray()[0].isActive = true;

  }

nextStep() {
  if (this.currentStep < this.totalSteps - 1) {
    this.steps.toArray()[this.currentStep].isActive = false;
      this.currentStep++;
      this.steps.toArray()[this.currentStep].isActive = true;
  }
}

previousStep() {
  if (this.currentStep > 0) {
    this.steps.toArray()[this.currentStep].isActive = false;
    this.currentStep--;
    this.steps.toArray()[this.currentStep].isActive = true;

  }
}
}
