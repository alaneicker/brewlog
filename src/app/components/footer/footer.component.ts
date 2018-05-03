import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="u-align-center padding padding--16">&copy; {{copyrightDate}} Brewlog. All rights reserved.</div>
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
