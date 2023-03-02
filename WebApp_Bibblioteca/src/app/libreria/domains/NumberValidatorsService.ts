import { Directive, Input } from '@angular/core'
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms'

import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

//@Injectable()
export class NumberValidatorsService {

  constructor() { }

  static max(max: number): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {

      let val: number = control.value;

      if (control.pristine || control.pristine) {
        return null;
      }
      if (val <= max) {
        return null;
      }
      return { 'max': true };
    }
  }

  static min(min: number): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {

      let val: number = control.value;

      if (control.pristine || control.pristine) {
        return null;
      }
      
      if (val >= min) {
        return null;
      }
      return { 'min': true };
    }
  }

}