import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../_services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-booking-plan",
  templateUrl: "./booking-plan.component.html",
  styleUrls: ["./booking-plan.component.scss"]
})
export class BookingPlanComponent implements OnInit {
  destination;
  sourceList = [];
  source;
  bsInlineValue = new Date();
  dateSelected = new Date();
  minDate = new Date();
  searchResults = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.route.queryParams.subscribe(params => {
      this.destination = params["dest"];
      if (!this.destination) {
        this.router.navigate(["/home"]);
        return;
      }
    });
  }

  ngOnInit() {
    this.getProvinceList();
  }

  setTravelSource(selectedSrc) {
    this.source = selectedSrc;
  }

  getProvinceList() {
    this.userService
      .getAllProvinces()
      .pipe(first())
      .subscribe(
        data => {
          if (data["code"] == 200) {
            this.sourceList = data["data"];
            this.source = data['data'][0]['p_id']
          }
        },
        error => {}
      );
  }

  onClickSearch() {
    let payload = {
      date: "" + this.dateSelected,
      src: this.source,
      dest: this.destination
    };
    this.userService
      .searchTravelOptions(payload)
      .pipe(first())
      .subscribe(
        data => {
          if (data["code"] == 200) {
            this.searchResults = data["data"];
          }
        },
        error => {}
      );
  }

  onDateChange(event) {
    console.log(event);
    this.dateSelected = event;
  }

  onClickBook(option) {
    this.router.navigate(["/booking-payment"], {
      queryParams: { b_id: "FGHJ5678GHJBGH" }
    });
    return;
    let payload = {
      src: this.source,
      dest: this.destination,
      mode: option.mode,
      mode_company: option.mode_company,
      mode_fare: option.mode_fare,
      mode_number: option.mode_number,
      mode_id: option.mode_id,
      data_of_travel: this.dateSelected
    };
    this.userService
      .bookTicket(payload)
      .pipe(first())
      .subscribe(
        data => {
          if (data["code"] == 200) {
            this.router.navigate(["/booking-payment"], {
              queryParams: { b_id: data["booking_id"] }
            });
          }
        },
        error => {}
      );
  }
}
