import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    FormArray,
    Validators,
    NgForm
} from '@angular/forms';

@Component({
    selector: 'app-add-beer',
    templateUrl: './add-beer.component.html',
    styleUrls: ['./add-beer.component.scss']
})
export class AddBeerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    submitForm(): void {

    }
}
