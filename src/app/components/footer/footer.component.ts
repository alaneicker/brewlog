import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="c-footer">
      &copy; {{copyrightDate}} Brewlog. All rights reserved.
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyrightDate: number;

  constructor() { }

  ngOnInit() {
    this.copyrightDate = new Date().getFullYear();
  }

}
