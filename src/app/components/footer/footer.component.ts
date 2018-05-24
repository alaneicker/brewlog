import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="c-footer">
      <p>&copy; {{ copyrightDate }} {{ appName }}. All rights reserved.</p>
      <img class="c-footer__img" src="assets/images/pbu_40_white.png">
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() appName: string;
  copyrightDate: number;

  constructor() { }

  ngOnInit() {
    this.copyrightDate = new Date().getFullYear();
  }

}
