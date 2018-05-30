import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    Output,
    Input,
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

import { Router } from '@angular/router';

import { HttpService } from '../../services/http.service';

import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss']
})
export class AddBeerFormComponent implements OnInit {
    @ViewChild('fileInput') fileInput: ElementRef;

    @Input() formPrefix: string;

    @Input() beerName: string;
    @Input() rating: string;
    @Input() comments: string;

    @Output() submitted: EventEmitter<any> = new EventEmitter();
    @Output() cancelled: EventEmitter<any> = new EventEmitter();
    @Input() formClass: string;
    @Input() hasSaveBtn = true;

    hasCancelBtn: boolean;
    addBeerForm: FormGroup;
    selectedFiles: string;

    constructor(
        private fb: FormBuilder,
        private httpService: HttpService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.hasCancelBtn = this.cancelled.observers.length > 0;

        this.addBeerForm = this.fb.group({
            upload: new FormControl(''),
            beerName: new FormControl(this.beerName || '', Validators.required),
            rating: new FormControl(String(this.rating) || '', Validators.required),
            comments: new FormControl(this.comments || '', Validators.required),
        });
    }

    generateId(index: number, label: string): string {
        return `${this.formPrefix}-${label}-${index}`;
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

    emitCancel() {
        this.cancelled.emit();
    }

    submitForm(form: NgForm): void {
        this.httpService.postToAPI({
            url: `${env.baseApiUrl}/beer/add`,
            data: {
                upload: this.addBeerForm.get('upload').value,
                beerName: this.addBeerForm.get('beerName').value,
                rating: this.addBeerForm.get('rating').value,
                comments: this.addBeerForm.get('comments').value,
            },
        })
            .then(res => {
                if (res.affectedRows > 0) {
                    this.addBeerForm.reset();
                    this.selectedFiles = '';
                    this.submitted.emit();

                    this.router.navigate(['blank']).then(() => {
                        this.router.navigate([`/beer-detail/${res.imgId}/${res.insertId}`]);
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}
