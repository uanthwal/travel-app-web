import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  search_text: string = "";
  searchResults = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    let tempobj = [
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      },
      {
        place_id: "WTN_NP",
        place_name: "Waterton Lakes National Park",
        province_id: "AL",
        desc:
          "The scenery is unreal and if you’re feeling adventurous, you can easily pop over the border to Montana – in a kayak (NBD). It’s the only park in the world to receive all three designations of UNESCO World Heritage Site, International Peace Park, and Biosphere Reserve.",
        img_url:
          "http://static.thousandwonders.net/Waterton.Lakes.National.Park.original.1407.jpg"
      }
    ];
    this.searchResults = tempobj;
  }

  onClickSearch() {
    console.log(this.search_text);
    if (this.search_text == "") {
      return;
    }
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
        error => {}
      );
  }
}
