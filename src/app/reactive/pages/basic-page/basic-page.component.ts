import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 3090',
  price: 1500,
  inStorage: 10,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Creamos el formulario
    this.myForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    })

    this.myForm.reset(rtx5090);

  }

  onSave(): void {

    if (this.myForm.invalid) return;

    console.log(this.myForm.value);

    this.myForm.reset();


  }

}
