import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-signals';
  search = '';
  users = [
    { id: 1, name: 'sethu' },
    { id: 2, name: 'saran' },
  ];
  filterUsers = this.users;

  setSearchString(e: Event) {
    this.search = (e.target as HTMLInputElement).value;
    this.filterUsers = this.users.filter((user) =>
      user.name.startsWith(this.search)
    );
  }

  addUser() {
    this.users = [...this.users, { id: 3, name: 'magi' }];
    this.filterUsers = this.users;
  }
}
