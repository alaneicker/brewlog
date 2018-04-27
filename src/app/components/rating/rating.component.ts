import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  styleUrls: ['./rating.component.scss'],
  template: `
  <div class="c-rating">
    <b>Overall Rating:</b>
    <span class="u-text-gold" *ngFor="let star of rating">&#9733;</span>
  </div>
  `,
})
export class RatingComponent implements OnInit {
  @Input() rating: any;

  constructor() { }

  ngOnInit() {
    this.rating = Array(this.rating).fill(0);
  }

}
