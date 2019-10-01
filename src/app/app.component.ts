import { Component } from '@angular/core';
import { RestApiService } from "./service/rest-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listOfUserdatas = [];
  searchTerm: string;
  listOfUserDetail = [];
  

  constructor(private rest: RestApiService) {
  }

  ngOnInit() {
    this.getData();
    setInterval(() =>
      this.getData()
      , 10000);
  }

  getData() {
    this.rest.getDataFromServer().subscribe(
      data => {
        this.listOfUserdatas = data
      }
    )
  }

  getSingleEmployeeDetails(id) {
    this.rest.getDataFromServer().subscribe(
      data => {
        this.listOfUserDetail = data[id];
      }
    )
  }
}
