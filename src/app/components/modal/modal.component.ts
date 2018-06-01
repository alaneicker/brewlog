import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';

declare var require: any;
const createFocusTrap = require('../../../../node_modules/focus-trap');

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
    @ViewChild('modal') modal: ElementRef;
    @Input() isOpen: boolean;
    @Output() close: EventEmitter<any> = new EventEmitter();

    focusTrap: any;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.isOpen) {
            setTimeout(() => {
                this.focusTrap = createFocusTrap('#modal', {});
                this.focusTrap.activate();
            }, 500);
        }
    }

    handleClose() {
        this.close.emit();
        this.focusTrap.deactivate();
    }

}
