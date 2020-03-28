import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../_services";

@Component({
  selector: "app-booking-payment",
  templateUrl: "./booking-payment.component.html",
  styleUrls: ["./booking-payment.component.scss"]
})
export class BookingPaymentComponent implements OnInit {
  bookingId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.route.queryParams.subscribe(params => {
      this.bookingId = params["b_id"];
      if (!this.bookingId) {
        this.router.navigate(["/home"]);
        return;
      }
    });
  }

  ngOnInit() {}

  onClickMakePayment() {
    this.router.navigate(["/booking-confirmation"], {
      queryParams: { b_id: this.bookingId }
    });
  }
}
