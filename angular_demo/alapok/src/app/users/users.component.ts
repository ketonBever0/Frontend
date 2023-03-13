import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];


  ngOnInit(): void {
    this.userDownload(40);
  }

  userDownload(db:number){
    fetch(`https://randomuser.me/api/?results=${db}`)
      .then(res => res.json())
      .then(data => this.users = data.results)
      .catch(err => console.log(err));
  }
  
}
