import { Component, ChangeDetectorRef, OnInit, HostBinding } from '@angular/core';
import FileReader from 'filereader';

import { fadeAnimation } from '../../animations/fade';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    FormArray,
    Validators,
    NgForm
} from '@angular/forms';

@Component({
    animations: [fadeAnimation],
    selector: 'app-add-beer',
    templateUrl: './add-beer.component.html',
    styleUrls: ['./add-beer.component.scss']
})
export class AddBeerComponent implements OnInit {
    @HostBinding('@fadeAnimation')
    addBeerForm: FormGroup;
    selectedFiles: string;

    constructor(
        private fb: FormBuilder,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.addBeerForm = this.fb.group({
            photoUrl: new FormControl(null),
            beerName: new FormControl('', Validators.required),
            brewery: new FormControl('', Validators.required),
            city: new FormControl(''),
            state: new FormControl(''),
            country: new FormControl(''),
            style: new FormControl(''),
            glassware: new FormControl(''),
            abv: new FormControl(''),
            ibu: new FormControl(''),
            rating: new FormControl('', Validators.required),
            comments: new FormControl('', Validators.required),
        });
    }

    onFileChange(files: File[]) {
        const reader = new FileReader();

        if (files) {
            const [file] = files;

            this.selectedFiles = files[0].name;

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
        console.log(this.addBeerForm.controls);
    }
}
