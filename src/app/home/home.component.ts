import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search_text: string = '';
  constructor() { }

  ngOnInit() {
  }

  onClickSearch() {
    console.log(this.search_text);
  }

}
