import { Component, computed, effect, signal } from '@angular/core';

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
  logger = effect(() => {
    localStorage.setItem('searchstring', this.search());
  });
  filterUsers = computed(() =>
    this.users().filter((user) => user.name.startsWith(this.search()))
  );

  setSearchString(e: Event) {
    this.search.set((e.target as HTMLInputElement).value);
  }

  addUser() {
    this.users.update((users) => [...users, { id: 3, name: 'magi' }]); // adding a new object in array so update if we want edit the object property values then mutate
  }
}
