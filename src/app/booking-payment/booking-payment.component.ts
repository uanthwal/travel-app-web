import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-booking-payment",
  templateUrl: "./booking-payment.component.html",
  styleUrls: ["./booking-payment.component.scss"]
})
export class BookingPaymentComponent implements OnInit {
  bookingId;
  invalidFields = [];
  paymentForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.route.queryParams.subscribe(params => {
      this.bookingId = params["b_id"];
      if (!this.bookingId) {
        this.router.navigate(["/home"]);
        return;
      }
    });
  }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      username: ["", Validators.required],
      cardnumber: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(4000000000000000),
          Validators.max(4999999999999999)
        ]
      ],
      expiry: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ],
      cvv: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.minLength(3),
          Validators.maxLength(3)
        ]
      ]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.paymentForm.controls;
  }

  findInvalidControls() {
    this.invalidFields = [];
    const controls = this.paymentForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        if (name == "username") this.invalidFields.push("User name");

        if (name == "cardnumber")
          this.invalidFields.push("Card Number should be 16 digits only");

        if (name == "expiry")
          this.invalidFields.push(
            "Expiry Date should be 4 digits in MMDD format"
          );

        if (name == "cvv") this.invalidFields.push("CVV should be 3 digits");
      }
    }
    debugger;
  }

  onClickMakePayment() {
    this.findInvalidControls();
    if (this.paymentForm.invalid) return;
    this.router.navigate(["/booking-confirmation"], {
      queryParams: { b_id: this.bookingId }
    });
  }
}
