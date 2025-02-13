import { Component, OnInit, signal } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // template: `
  //   <ng-template [ngIf]="user != null">
  //     <div>
  //       <h1>
  //         {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
  //       </h1>
  //     </div>
  //   </ng-template>
  // `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  user: any = null;

  async ngOnInit() {
    await axios.get('https://randomuser.me/api/').then((res: AxiosResponse) => {
      if (res.status === 200) this.user = res.data.results[0];
    });
  }
}
