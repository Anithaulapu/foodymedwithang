import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-goal-selection',
  templateUrl: './goal-selection.component.html',
  styleUrls: ['./goal-selection.component.scss']
})
export class GoalSelectionComponent {
  goalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.goalForm = this.fb.group({
      goal: ['']
    });
  }

  onSubmit() {
    // handle your form submission here
    console.log(this.goalForm.value);
  }
}
