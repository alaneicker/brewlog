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

    @Input() routeId: string;
    @Input() imgId: string;

    @Input() editMode = false;

    @Input() formPrefix: string;

    @Input() beerName: string;
    @Input() rating: number;
    @Input() comments: string;

    @Output() submitted: EventEmitter<any> = new EventEmitter();
    @Output() cancelled: EventEmitter<any> = new EventEmitter();
    @Input() formClass: string;
    @Input() hasSaveBtn = true;

    hasCancelBtn: boolean;
    form: FormGroup;
    selectedFiles: string;

    constructor(
        private httpService: HttpService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.hasCancelBtn = this.cancelled.observers.length > 0;

        this.form = new FormGroup({
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
                this.form.patchValue({
                    upload: reader.result
                });
              }, false);
        }
    }

    emitCancel() {
        this.cancelled.emit();
    }

    submitForm(form: NgForm): void {

        if (!form.valid) {
            return;
        }

        const url = this.editMode
            ? `${env.baseApiUrl}/beer/edit/${this.imgId}/${this.routeId}`
            : `${env.baseApiUrl}/beer/add`;

        this.httpService[this.editMode ? 'put' : 'post']({
            url: url,
            data: {
                upload: this.form.get('upload').value,
                beerName: this.form.get('beerName').value,
                rating: this.form.get('rating').value,
                comments: this.form.get('comments').value,
            },
        })
            .then(res => {
                if (res.affectedRows > 0) {

                    if (this.editMode) {
                        this.submitted.emit(res.body);
                        return;
                    } else {
                        this.form.reset();
                        this.selectedFiles = '';
                        this.submitted.emit();
                    }

                    if (this.router.url === '/') {
                        this.router.navigate([`/beer-detail/${res.imgId}/${res.insertId}`]);
                    } else {
                        this.router.navigate(['blank']).then(() => {
                            this.router.navigate([`/beer-detail/${res.imgId}/${res.insertId}`]);
                        });
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}
