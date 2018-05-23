import {
    Component,
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

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss']
})
export class AddBeerFormComponent implements OnInit {
    @ViewChild('fileInput') fileInput: ElementRef;
    @Output() submitted: EventEmitter<any> = new EventEmitter();
    addBeerForm: FormGroup;
    selectedFiles: string;

    constructor(
        private fb: FormBuilder,
        private httpService: HttpService,
    ) { }

    ngOnInit() {
        this.addBeerForm = this.fb.group({
            upload: new FormControl(''),
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
                    upload: reader.result
                });
              }, false);
        }
    }

    submitForm(form: NgForm): void {
        this.httpService.request('http://localhost:8080/api/beer/add', {
            upload: this.addBeerForm.get('upload').value,
            beerName: this.addBeerForm.get('beerName').value,
            rating: this.addBeerForm.get('rating').value,
            comments: this.addBeerForm.get('comments').value,
        }, 'post')
            .then(res => {
                if (res.affectedRows > 0) {
                    this.submitted.emit();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}
