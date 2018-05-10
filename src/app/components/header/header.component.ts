import { Component, OnInit, Input } from '@angular/core';
import { IHeader } from '../../interfaces/header.interface';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerContent: IHeader;
  isLoggedIn: boolean;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.appService.isLoggedIn;
  }

}
