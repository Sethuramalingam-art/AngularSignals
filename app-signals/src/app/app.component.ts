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
    this.users.update((users) => [...users, { id: 3, name: 'magi' }]); // adding a new object in array so update if we want edit the object property values then mutate
    this.filterUsers = this.users();
  }
}
