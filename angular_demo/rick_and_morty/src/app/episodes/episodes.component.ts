import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  ngOnInit(): void {
    this.getEpisodes();
  }

  info: any = {};
  results: any = [];
  page = 1;
  isLoading: boolean = false;

  getEpisodes() {
    this.isLoading = true;
    fetch(`https://rickandmortyapi.com/api/episode?page=${this.page}`)
      .then(res => res.json())
      .then(data => { this.info = data.info, this.results = data.results })
      .catch(err => alert(err))
      .finally(() => this.isLoading = false);
  }


  nextPage() {
    if (this.page < this.info.pages) {
      this.page++;
      this.getEpisodes();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getEpisodes();
    }
  }

}
