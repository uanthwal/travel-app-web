import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AlertService, AuthenticationService } from "../_services";
import { AppService } from "../_services/app.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  destination;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private appService: AppService
  ) {
    this.route.queryParams.subscribe(params => {
      this.destination = params["dest"];
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.authenticationService.logout();
    this.appService.setLoginInProcess();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.code == 200) {
            if (null != this.destination) {
              this.router.navigate(["/verify-otp"], {
                queryParams: { dest: this.destination }
              });
            } else this.router.navigate(["/verify-otp"]);
          } else {
            alert(data["message"]);
          }
        },
        error => {}
      );
  }

  onClickRegister() {
    if (null != this.destination) {
      
      this.router.navigate(["/register"], {
        queryParams: { dest: this.destination }
      });
    } else this.router.navigate(["/register"]);
  }
}
