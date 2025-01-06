import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone:true,
  imports: [ ReactiveFormsModule,NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  title = 'reactive-form-demo';

  // Create form group with form controls and validators
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Name: required, min length 3
    email: new FormControl('', [Validators.required, Validators.email]), // Email: required, valid email
    password: new FormControl('', [Validators.required, Validators.minLength(6)]), // Password: required, min length 6
  });

  // Getters for form controls to make the code cleaner
  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }

  // Submit handler
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.myForm.reset(); 
    } else {
      console.log("Form is invalid");
    }
  }
}
