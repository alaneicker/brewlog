import { Component, OnInit, Input } from '@angular/core';
import { IHeader } from '../../interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerContent: IHeader;

  constructor() { }

  ngOnInit() {
  }

}
