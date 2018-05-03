import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import FileReader from 'filereader';

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
    addBeerForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.addBeerForm = this.fb.group({
            photoUrl: new FormControl(null),
            beerName: new FormControl('', Validators.required),
            brewery: new FormControl('', Validators.required),
            location: new FormControl(''),
            style: new FormControl(''),
            glassware: new FormControl(''),
            abv: new FormControl(''),
            ibu: new FormControl(''),
            rating: new FormControl('', Validators.required),
            comments: new FormControl('', Validators.required),
        });
    }

    onFileChange(event) {
        const reader = new FileReader();
        // alert(JSON.stringify(event.target.files));
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;

            reader.readAsDataURL(file);

            reader.onload = () => {
                this.addBeerForm.patchValue({
                    photoUrl: reader.result
                });

                this.cd.markForCheck();
            };
        }
    }

    submitForm(form: NgForm): void {
        alert(form.valid);
        console.log(this.addBeerForm.controls);
    }
}
