import {
    Component,
    ChangeDetectorRef,
    OnInit,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter,
} from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    FormArray,
    Validators,
    NgForm
} from '@angular/forms';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss']
})
export class AddBeerFormComponent implements OnInit {
    @ViewChild('fileInput') myFileInput: ElementRef;
    @Output() submitted: EventEmitter<any> = new EventEmitter();
    addBeerForm: FormGroup;
    selectedFiles: string;

    constructor(
        private fb: FormBuilder,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.addBeerForm = this.fb.group({
            photoUrl: new FormControl(''),
            beerName: new FormControl('', Validators.required),
            rating: new FormControl('', Validators.required),
            comments: new FormControl('', Validators.required),
        });
    }

    onFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        if (file) {
            this.selectedFiles = file.name;

            reader.readAsDataURL(file);

            reader.addEventListener('load', () => {
                this.addBeerForm.patchValue({
                    photoUrl: reader.result
                });

                this.cd.markForCheck();
              }, false);
        }
    }

    submitForm(form: NgForm): void {
        console.log(this.addBeerForm.controls);
        this.submitted.emit();
    }
}
