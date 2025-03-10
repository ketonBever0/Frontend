import { Component, OnInit, Signal, signal } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `

  `,
})
export class HomeComponent implements OnInit {
  constructor(public userService: UserService) {}

  async addUser() {
    await axios.get('https://randomuser.me/api/').then((res: AxiosResponse) => {
      if (res.status === 200) this.userService.users.update(prev => [...prev, res.data.results[0]]);
    });
  }



  ngOnInit() {
    this.addUser();
  }
}
