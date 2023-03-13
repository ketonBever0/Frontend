import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alapok';
  alcim: string = "Ismerkedés";
  szam: number = 1;

  uzenet: string = "";

  lista = ["Alfa", "Béta", "Gamma", "Delta"];


  kibocsatoUzenet(e: any) {
    this.uzenet = e;
  }

}
