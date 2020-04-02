import { Component, OnInit } from "@angular/core";
import { UserService, AuthenticationService } from "../_services";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { AppService } from "../_services/app.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  search_text: string = "";
  searchResults = [];
  trendingSearchRes = [];
  username;
  userLoggedIn = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private appService: AppService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.userLoggedIn = this.appService.isUserLoggedIn();
    this.username = JSON.parse(localStorage.getItem("username"));
    this.appService.removeLoginInProcess();
    this.userService
      .get_hotspots({})
      .pipe(first())
      .subscribe(
        responseData => {
          this.trendingSearchRes = responseData["data"];
        },
        error => {
          console.log(error);
        }
      );
  }

  onClickSearch() {
    if (this.search_text == "") return;
    this.searchResults = [];
    this.userService
      .search({
        search_text: this.search_text,
        session_id: JSON.parse(localStorage.getItem("session_id"))
      })
      .pipe(first())
      .subscribe(
        responseData => {
          this.trendingSearchRes = [];
          this.searchResults = responseData["data"];
        },
        error => {
          console.log(error);
        }
      );
  }

  onClickBook(card) {
    console.log(card);
    if (this.appService.isUserLoggedIn()) {
      this.router.navigate(["/plan-booking"], {
        queryParams: { dest: card.place_id }
      });
    } else {
      this.router.navigate(["/login"], {
        queryParams: { dest: card.place_id }
      });
    }
  }

  onClickLogout() {
    this.authenticationService.logout();
    this.userLoggedIn = this.appService.isUserLoggedIn();
    this.router.navigate(["/home"]);
  }

  onClickLogin() {
    this.router.navigate(["/login"]);
  }
}
