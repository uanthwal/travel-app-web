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
  bookingInfo;
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
    this.bookingInfo = {
      b_id: "FGHJ5678GHJBGH",
      username: "James Bond",
      src: "YHZ",
      dest: "GHZ",
      mode: "flight",
      mode_company: "Air India",
      mode_fare: "789.00",
      mode_number: "AI-678",
      mode_id: "flight_1",
      data_of_travel: "March 29, 2020"
    };
    return;
    this.userService
      .bookTicket({ b_id: this.bookingId })
      .pipe(first())
      .subscribe(
        data => {
          if (data["code"] == 200) {
            this.bookingInfo = data["data"];
          }
        },
        error => {}
      );
  }

  onClickHome() {
    this.router.navigate(["/home"]);
  }

  onClickSendPdf() {
    // make an api call here to send the pdf file to user's mailbox
  }
}
