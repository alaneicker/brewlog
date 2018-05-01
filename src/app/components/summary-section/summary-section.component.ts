import { Component, OnInit, Input } from '@angular/core';
import { IBeerDetail } from '../../interfaces/beer-detail.interface';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.scss']
})
export class SummarySectionComponent implements OnInit {
  @Input() summaryContent: IBeerDetail;
  readOnly = true;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.readOnly = this.appService.readOnly;
  }
}
