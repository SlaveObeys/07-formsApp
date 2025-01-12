import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService
  ) { }


  ngOnInit(): void {

    this.myForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [new EmailValidatorService()]],
      username: ['', [Validators.required, this.validatorService.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    }, {
      validators: [
        this.validatorService.isFieldOneEqualToFieldTwo('password', 'password2')
      ]
    }
    );

  }

  isValidField(field: string) {
    return this.validatorService.isValidFeld(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }

}
