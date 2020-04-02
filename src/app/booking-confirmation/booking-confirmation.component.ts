import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../_services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-booking-confirmation",
  templateUrl: "./booking-confirmation.component.html",
  styleUrls: ["./booking-confirmation.component.scss"]
})
export class BookingConfirmationComponent implements OnInit {
  bookingInfo = {
    "_id":""
  };
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

  ngOnInit() {
    this.userService
      .getBookingById({ booking_id: this.bookingId })
      .pipe(first())
      .subscribe(
        data => {
          if (data["code"] == 200) {
            this.bookingInfo = data["data"][0];
          }
        },
        error => {}
      );
  }

  onClickHome() {
    this.router.navigate(["/home"]);
  }

  onClickSendPdf() {
    debugger;
    // make an api call here to send the pdf file to user's mailbox
    this.userService
      .generateTicket({ booking_id: this.bookingId })
      .pipe(first())
      .subscribe(
        data => {
          if (data["code"] == 200) {
            alert(data['message']);
          }
        },
        error => {}
      );
  }
}
