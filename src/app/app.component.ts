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
      { text: 'My Beers', url: '/' },
      { text: 'Discover Beers', url: '/beer-search' },
      { text: 'Add Beer', url: '/add-beer' },
    ],
  };
}
