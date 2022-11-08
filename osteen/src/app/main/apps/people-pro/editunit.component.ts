import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, Inject, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { UnitChangeService } from 'app/main/apps/module-roles/unit-change/unit-change.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService, UserService } from 'app/main/apps/_services';
import { User } from '../_models';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'edit-unit-dialog',
    templateUrl: 'editunit.component.html',
})
export class EditUnitDialog {
    direction = 'row';
    currentUser: any;
    EditDataGet: any;
    EditUnitForm: FormGroup;
    submitted = false;
    status_code: any;
    message: any;
    MessageSuccess: any;
    MessageError: any;
    selectedFile: File = null;
    userPicture: any;
    user_id: any;
    company_id: any;
    grade_years = ['2017', '2018', '2019', '2020', '2021', '2022'];
    // Private
    // private _unsubscribeAll: Subject<any>;
    constructor(
        public dialogRef: MatDialogRef<EditUnitDialog>,
        @Inject(MAT_DIALOG_DATA) public data: User,
        private http: HttpClient,
        private _formBuilder: FormBuilder,
        private userService: UserService,
        private alertService: AlertService,
        // private authenticationService: AuthenticationService,
        // private userService: UserService,
        // private alertService: AlertService
    ) {
        // Set the private defaults
        // this._unsubscribeAll = new Subject();
    }

    EditUnitPopupClose(): void {
        this.dialogRef.close();
    }
    ngOnInit(): void {
        this.EditDataGet = this.data;
        console.log('edit data',   this.EditDataGet);
        this.userPicture = this.EditDataGet.profile;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user_id = this.currentUser.data.id;
        this.company_id = this.currentUser.data.company_id;
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let login_access_token = this.currentUser.login_access_token;
        // let company_id = this.currentUser.data.company_id;
        // Reactive Form
        this.EditUnitForm = this._formBuilder.group({
            // login_access_token: [login_access_token, Validators.required],
            // unit_name: [this.EditDataGet.unit_name, Validators.required],
            id: [this.EditDataGet.id, Validators.required],
            // profile: ['',],
            name: [this.EditDataGet.name, Validators.required],
            grade_year: [this.EditDataGet.grade_year, Validators.required],
            activities: [this.EditDataGet.activities, Validators.required],
            qoute: [this.EditDataGet.qoute],
            unit_id: [this.EditDataGet.unit_id, Validators.required],
            company_id: [this.EditDataGet.company_id, Validators.required],
        });
        // this.EditUnitForm.patchValue['']
        // this.EditUnitForm.patchValue({ grade_year:  this.EditDataGet.grade_year});
    }

    onFileSelected(event) {
        console.log('event', event);
        if (event) {

            console.log('event.target.files', event.target.files);

            this.selectedFile = <File>event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event: any) => {
                this.userPicture = event.target.result;
            }

            const fd = new FormData();
            fd.append('photo', this.selectedFile, this.selectedFile.name);
            fd.append('login_access_token', this.currentUser.login_access_token);
            fd.append('student_id', this.EditUnitForm.value.id);
            this.EditUnitForm.value['fd'] = fd;
            this.userService.studentPictureUpload(fd).pipe(first()).subscribe(
                (data: any) => {
                    if (data.status_code == 200) {
                        this.alertService.success(data.message, true);
                        this.getProfiles();
                    }
                    else {
                        //console.log(data);
                    }
                },
                error => {
                    this.alertService.error(error);
                });
        }
    }

    getProfiles() {
        let login_access_token = this.currentUser.login_access_token;
        console.log('token', login_access_token);
        console.log('company_id', this.company_id);
        console.log('this.user_id', this.user_id);

        this.userService.multiProfiles(login_access_token, this.company_id, this.EditDataGet.id).pipe(first()).subscribe(
            (data: any) => {
                if (data.data.profile) {
                    this.userPicture = data.data.profile;
                }
                console.log('data', data.data);
            },
            error => {
                this.alertService.error(error);
            });
    }

    EditUnitSubmit() {
        this.submitted = true;
        // stop here if EditUnitForm is invalid
        if (this.EditUnitForm.invalid) {
            console.log('Invalid form', this.EditUnitForm.value);
            return;
        }
        // this.EditUnitForm.value['profile'] = this.userPicture;
        console.log('form data', this.EditUnitForm.value);
        // localStorage.setItem('peopleData', JSON.stringify(this.AddUnitForm.value));
        this.dialogRef.close(this.EditUnitForm.value);
        // this.userService.editUnitChange(this.EditUnitForm.value).pipe(first()).subscribe(
        //     (data: any) => {
        //         this.status_code = data;
        //         if (this.status_code.status_code == 200) {
        //             this.MessageSuccess = data;
        //             this.alertService.success(this.MessageSuccess.message, true);
        //             this.dialogRef.close('YesSubmit');
        //         }
        //         else {
        //             this.MessageError = data;
        //             this.alertService.error(this.MessageError.message, true);
        //         }
        //     },
        //     error => {
        //         this.alertService.error(error);
        //     });
    }
}
// export interface DialogData {
//     animal: string;
//     name: string;
// }