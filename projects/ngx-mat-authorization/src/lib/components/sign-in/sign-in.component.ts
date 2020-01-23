import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ISignInOptions} from '../../classes/inputs/ISignInInput';

@Component({
  selector: 'ngx-mat-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  @Input() options: ISignInOptions = new ISignInOptions();
  @Output() submitted = new EventEmitter<FormGroup>();
  @Output() invalidSubmitted = new EventEmitter<FormGroup>();
  loginForm: FormGroup;
  loading = false;
  submittedForm = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submittedForm = true;

    if (this.loginForm.invalid) {
      this.invalidSubmitted.emit(this.loginForm);
      return;
    }
    this.loading = true;
    this.submitted.emit(this.loginForm);
  }
}
