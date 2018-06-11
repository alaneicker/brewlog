import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';

declare var require: any;
const createFocusTrap = require('../../../../node_modules/focus-trap');

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, OnChanges {
    @ViewChild('modal') modal: ElementRef;
    @Input() id: string;
    @Input() isOpen: boolean;
    @Output() close: EventEmitter<any> = new EventEmitter();

    focusTrap: any;

    domLoaded = false;

    constructor() { }

    ngOnInit() {}

    ngAfterViewInit() {
        this.focusTrap = createFocusTrap(`#${this.id}`, {});
        this.domLoaded = true;
    }

    ngOnChanges() {
        if (this.domLoaded) {
            setTimeout(() => {
                if (this.isOpen) {
                    this.focusTrap.activate();
                } else {
                    this.handleClose();
                }
            }, 200);
        }
    }

    handleClose() {
        this.close.emit();
        this.focusTrap.deactivate();
    }

}
