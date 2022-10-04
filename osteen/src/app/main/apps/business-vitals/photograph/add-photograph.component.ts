import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, Inject,OnDestroy} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource ,MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService, UserService} from 'app/main/apps/_services';
import { User } from '../../_models';
@Component({
  selector: 'add-photograph-dialog',
  templateUrl: 'add-photograph.component.html',
})
export class AddPhotographDialog {
    direction = 'row';
    currentUser: any;
    addPhotographForm: FormGroup;
    selectedFile: File = null;
    submitted = false;
    status_code: any;
    message:any;
    MessageSuccess: any;
    MessageError: any;
    // Private
    private _unsubscribeAll: Subject<any>;
    constructor(
        public dialogRef: MatDialogRef<AddPhotographDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private _formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
    // Set the private defaults
       this._unsubscribeAll = new Subject();
    }
    addPhotographClose(): void {
        this.dialogRef.close();
    }
    ngOnInit(): void
    {
        this.currentUser  = JSON.parse(localStorage.getItem('currentUser'));
        let login_access_token = this.currentUser.login_access_token;
        let company_id = this.currentUser.data.company_id;
        this.addPhotographForm = this._formBuilder.group({
            login_access_token : [login_access_token, Validators.required],
            company_id : [company_id, Validators.required],
            name : ['', Validators.required],
            description: ['', Validators.required],
        });
    }
    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }
    addPhotographSubmit() {
        this.submitted = true;
        return false;
        // stop here if addPhotographForm is invalid
        if (this.addPhotographForm.invalid) {
            return;
        }
        /* this.userService.addPriorityChange(this.addPhotographForm.value).pipe(first()).subscribe(
            (data:any) => {
                this.status_code = data;
                if(this.status_code.status_code == 200){
                    this.MessageSuccess = data;
                    this.alertService.success(this.MessageSuccess.message, true);
                    this.dialogRef.close('YesSubmit');
                }
                else{
                    this.MessageError = data;
                    this.alertService.error(this.MessageError.message, true);
                }
            },
            error => {
                this.alertService.error(error);
        }); */
    }
}
export interface DialogData {
  animal: string;
  name: string;
}