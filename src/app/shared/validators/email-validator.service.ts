import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class EmailValidatorService implements AsyncValidator {

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email: string = control.value;
  //   console.log(email);


  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )

  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email: string = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscribe) => {

      console.log({ email });

      if (email === 'fernando@google.com') {
        subscribe.next({ emailTaken: true });
        subscribe.complete();
      }

      subscribe.next(null);
      subscribe.complete();


    }).pipe(
      delay(3000)
    )

    return httpCallObservable;

  }

}
