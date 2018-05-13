import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="c-footer">
      <p>&copy; {{ copyrightDate }} {{ appName }}. All rights reserved.</p>
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
