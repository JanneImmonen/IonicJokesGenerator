import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  joke: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://v2.jokeapi.dev/joke/Programming';
    this.apiService.getData(url).subscribe(
      response => {
        this.joke = response;
        console.log(this.joke);
      },
      error => {
        console.error('Error fetching data:', error);
        // You can display an error message or handle it as needed
      }
    );
  }
}
