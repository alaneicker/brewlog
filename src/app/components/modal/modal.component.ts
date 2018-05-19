import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleOpen() {
    this.open.emit();
  }

  handleClose() {
    this.close.emit();
  }

}
