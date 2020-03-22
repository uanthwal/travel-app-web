import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search_text: string = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onClickSearch() {
    console.log(this.search_text);
    if (this.search_text == "") {
      return;
    }
    this.userService
    .search({search_text:this.search_text, session_id:JSON.parse(localStorage.getItem('session_id'))})
    .pipe(first())
    .subscribe(
      data => {
        
      },
      error => {
       
      }
    );
}
}
