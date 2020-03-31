import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { first } from "rxjs/operators";

import { AlertService, UserService, AuthenticationService } from "../_services";
import { AppService } from "../_services/app.service";

@Component({
  templateUrl: "register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  destination;
  invalidFields = [];
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private appService: AppService,
    private authenticationService: AuthenticationService
  ) {
    this.route.queryParams.subscribe(params => {
      this.destination = params["dest"];
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
        ]
      ],
      mobile: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(10)
        ]
      ],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  findInvalidControls() {
    this.invalidFields = [];
    const controls = this.registerForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        if (name == "username") this.invalidFields.push("User name");

        if (name == "email") this.invalidFields.push("Email Address");

        if (name == "mobile") this.invalidFields.push("Mobile Number");

        if (name == "password")
          this.invalidFields.push("Password should be minimum 6 characters");
      }
    }
  }

  onSubmit() {
    this.findInvalidControls();
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.userService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          let msg = "";
          if (data.code == 200) {
            msg = data["message"];
            this.appService.setLoginInProcess();
            setTimeout(() => {
              this.authenticationService
                .login(this.f.email.value, this.f.password.value)
                .pipe(first())
                .subscribe(
                  data => {
                    if (data.code == 200) {
                      msg = msg + " " + data["message"];
                      alert(msg);
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
            }, 3000);
          }
        },
        error => {}
      );
  }
}
