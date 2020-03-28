import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  search_text: string = "";
  searchResults = [];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    
  }

  onClickSearch() {
    console.log(this.search_text);
    if (this.search_text == "")
      return;
    this.searchResults = [];
    this.userService
      .search({
        search_text: this.search_text,
        session_id: JSON.parse(localStorage.getItem("session_id"))
      })
      .pipe(first())
      .subscribe(
        responseData => {
          this.searchResults = responseData["data"];
        },
        error => {
          console.log(error);
        });
  }

  onClickBook(card) {
    console.log(card);
    this.router.navigate(["/plan-booking"], {
      queryParams: { dest: card.place_id }
    });
  }
}
