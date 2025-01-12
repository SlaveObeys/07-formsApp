import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  ngOnInit(): void {
    this.myForm = this.fb.nonNullable.group({
      gender: ['M', Validators.required],
      wantNotifications: [true, Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
    });

    this.myForm.reset(this.person);
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;

    this.myForm.reset();
    console.log(this.myForm.value);

  }

}
