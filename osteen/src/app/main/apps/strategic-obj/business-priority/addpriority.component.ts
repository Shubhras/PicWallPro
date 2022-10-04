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
  selector: 'add-priority-dialog',
  templateUrl: 'addpriority.component.html',
})
export class AddPriorityDialog {
    direction = 'row';
    currentUser: any;
    user_id:number;
    addPriorityForm: FormGroup;
    submitted = false;
    status_code: any;
    message:any;
    MessageSuccess: any;
    MessageError: any;
    allDetailsCompany: any;
    company_id:any;
    // Private
    private _unsubscribeAll: Subject<any>;
    constructor(
        public dialogRef: MatDialogRef<AddPriorityDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private _formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
    // Set the private defaults
       this._unsubscribeAll = new Subject();
    }
    addPriorityClose(): void {
        this.dialogRef.close();
    }
    ngOnInit(): void
    {
        this.currentUser  = JSON.parse(localStorage.getItem('currentUser'));
        this.user_id = this.currentUser.data.id;
        let login_access_token = this.currentUser.login_access_token;
        this.allDetailsCompany = JSON.parse(localStorage.getItem('allDetailsCompany'));
        this.company_id = this.allDetailsCompany.general_data[0].company_id;
        this.addPriorityForm = this._formBuilder.group({
            login_access_token : [login_access_token, Validators.required],
            user_id: [this.user_id, Validators.required],
            business_priority : ['', Validators.required],
            keywords : ['', Validators.required]
        });
    }
    addPrioritySubmit() {
        this.submitted = true;
        // stop here if addPriorityForm is invalid
        if (this.addPriorityForm.invalid) {
            return;
        }
        this.addPriorityForm.value.company_id = this.company_id;
        this.userService.addBusinessPriority(this.addPriorityForm.value).pipe(first()).subscribe(
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
            });
    }
}
export interface DialogData {
  animal: string;
  name: string;
}