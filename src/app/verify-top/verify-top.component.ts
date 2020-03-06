import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-verify-top',
  templateUrl: './verify-top.component.html',
  styleUrls: ['./verify-top.component.scss']
})
export class VerifyTopComponent implements OnInit {
  otpForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) {}

  ngOnInit() {
      this.otpForm = this.formBuilder.group({
          otp: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.otpForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.otpForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.verifyOtp(this.f.otp.value)
          .pipe(first())
          .subscribe(
              data => {
                  debugger;
                  if (data.code == 200) {
                      localStorage.setItem("session_id", JSON.stringify(data.session_id));
                      this.router.navigate(['/home']);
                  } else {

                  }
                  // this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
