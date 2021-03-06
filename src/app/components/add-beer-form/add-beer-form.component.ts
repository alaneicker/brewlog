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
import { Ng2ImgMaxService } from 'ng2-img-max';

import { environment as env } from '../../../environments/environment';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss']
})
export class AddBeerFormComponent implements OnInit {
    @ViewChild('fileInput') fileInput: ElementRef;

    @Output() inProgress: EventEmitter<any> = new EventEmitter();
    @Output() submitted: EventEmitter<any> = new EventEmitter();
    @Output() cancelled: EventEmitter<any> = new EventEmitter();

    @Input() routeId: string;
    @Input() imgId: string;
    @Input() formPrefix: string;
    @Input() beerName: string;
    @Input() comments: string;
    @Input() formClass: string;

    @Input() hasSaveBtn = true;
    @Input() editMode = false;

    @Input() rating: number;

    selectedFiles: string;

    hasCancelBtn: boolean;

    form: FormGroup;

    constructor(
        private httpService: HttpService,
        private router: Router,
        private modal: ModalComponent,
        private ng2ImgMax: Ng2ImgMaxService,
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

            this.ng2ImgMax.compressImage(file, 0.065).subscribe(
                compressedFile => {
                    reader.readAsDataURL(compressedFile);

                    reader.addEventListener('load', () => {
                        this.form.patchValue({
                            upload: reader.result
                        });
                    }, false);
                },
                error => {
                    console.log('Oh no!', error);
                }
            );
        }
    }

    emitCancel() {
        this.modal.handleClose();
        this.cancelled.emit();
    }

    submitForm(form: NgForm): void {

        if (!form.valid) {
            return;
        }

        this.inProgress.emit();

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
        }).then(res => {
            if (res.affectedRows > 0) {

                this.modal.handleClose();
                this.submitted.emit(res.body);

                if (this.editMode) {
                    return;
                } else {
                    this.form.reset();
                    this.selectedFiles = '';
                }

                if (this.router.url === '/') {
                    this.router.navigate([`/beer-detail/${res.imgId}/${res.insertId}`]);
                } else {
                    this.router.navigate(['blank']).then(() => {
                        this.router.navigate([`/beer-detail/${res.imgId}/${res.insertId}`]);
                    });
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
