import { Component, OnInit, Input } from '@angular/core';
import { IsummarySection } from '../../interfaces/summary-section.interface';

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.scss']
})
export class SummarySectionComponent implements OnInit {
  @Input() summaryContent: IsummarySection;

  constructor() { }

  ngOnInit() {
  }
}
