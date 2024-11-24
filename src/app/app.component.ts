import { Component } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'exp8';
  userList: any[] = [];

  constructor(private fetchService: FetchDataService) {}
  ngOnInit(): void {
    this.fetchService.getUser().subscribe((users) => {
      console.log(users); // Check the structure of the API response
      this.userList = users;
    });
  }
}
