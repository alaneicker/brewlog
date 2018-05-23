import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { IHeader } from './interfaces/header.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();
  title = 'Brew Journal';

  headerContent: IHeader = {
    appName: 'Brew Journal',
    navItems: [
      { text: 'My Beers', url: '/' },
      { text: 'Add Beer', onClick: () => this.openModal('addBeer') },
    ],
  };

  modalActiveStates = {
    addBeer: false,
  };

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .takeUntil(this.unsubscribe$)
      .subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openModal(modal) {
    this.modalActiveStates[modal] = true;
  }

  closeModal(modal) {
    this.modalActiveStates[modal] = false;
  }
}
