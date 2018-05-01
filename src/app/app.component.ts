import { Component } from '@angular/core';

import { IHeader } from './interfaces/header.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Brelog';

  headerContent: IHeader = {
    logoText: 'Brewlog',
    navItems: [
      { text: 'Dashboard', url: '/' },
      { text: 'Add Beer', url: '/add-beer' },
      { text: 'My Beers', url: '/my-beers' },
      { text: 'Settings', url: '/settings' },
    ],
  };
}
