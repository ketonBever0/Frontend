import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  ngOnInit(): void {
    this.getLocations();
  }

  info: any = {};
  results: any = [];
  page = 1;
  isLoading: boolean = false;

  getLocations() {
    this.isLoading = true;
    fetch(`https://rickandmortyapi.com/api/location?page=${this.page}`)
      .then(res => res.json())
      .then(data => { this.info = data.info, this.results = data.results })
      .catch(err => alert(err))
      .finally(() => this.isLoading = false);
  }

  nextPage() {
    if (this.page < this.info.pages) {
      this.page++;
      this.getLocations();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getLocations();
    }
  }

}
