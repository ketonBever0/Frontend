import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  ngOnInit(): void {
    this.getCharacters();
  }

  info: any = {};
  results: any = [];
  page = 1;
  isLoading: boolean = false;

  getCharacters() {
    this.isLoading = true;
    fetch(`https://rickandmortyapi.com/api/character?page=${this.page}`)
      .then(res => res.json())
      .then(data => { this.info = data.info, this.results = data.results })
      .catch(err => alert(err))
      .finally(() => this.isLoading = false);
  }


  nextPage() {
    if (this.page < this.info.pages) {
      this.page++;
      this.getCharacters();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getCharacters();
    }
  }


}
