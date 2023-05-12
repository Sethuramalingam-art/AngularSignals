import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-signals';
  search = signal('');
  users = signal([
    { id: 1, name: 'sethu' },
    { id: 2, name: 'saran' },
  ]);
  filterUsers = this.users();

  setSearchString(e: any) {
    this.search.set(e.target.value);
    this.filterUsers = this.users().filter((user) =>
      user.name.startsWith(this.search())
    );
  }

  addUser() {
    this.users.mutate((users) => [...users, { id: 3, name: 'magi' }]);
    this.filterUsers = this.users();
  }
}
