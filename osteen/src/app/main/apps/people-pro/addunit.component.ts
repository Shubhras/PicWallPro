import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from 'app/main/apps/_services';
@Component({
    selector: 'add-unit-dialog',
    templateUrl: 'addunit.component.html',
})
export class AddUnitDialog {
    direction = 'row';
    currentUser: any;
    user_id: number;
    AddUnitForm: FormGroup;
    submitted = false;
    // Private
    private _unsubscribeAll: Subject<any>;
    myObjArray: any;
    constructor(
        public dialogRef: MatDialogRef<AddUnitDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _formBuilder: FormBuilder,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    AddUnitPopupClose(): void {
        this.dialogRef.close();
    }
    ngOnInit(): void {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.user_id = this.currentUser.data.id;
        // let login_access_token = this.currentUser.login_access_token;
        // let company_id = this.currentUser.data.company_id;
        this.AddUnitForm = this._formBuilder.group({
            // login_access_token: [login_access_token, Validators.required],
            // user_id: [this.user_id, ],
            name: ['',],
            grad_year: ['',],
            activites: ['',],
            qoute: ['',],
            image_url: ['',],
            // company_id: [company_id, Validators.required],
            enable: ['Yes',]
        });
    }
    AddUnitSubmit() {

        console.log('11111111111111111111',this.AddUnitForm);
        // localStorage.setItem('peopleData', JSON.stringify(this.AddUnitForm.value));
        this.dialogRef.close(this.AddUnitForm.value);
        
    //     var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    //     if(existingEntries == null) existingEntries = [];
    //     // var testObject ={username:this.username, 
    //     // mobile:this.mobile,
    //     // email:this.email,
    //     // type:this.type,
    //     // password:this.password};
        
    //     localStorage.setItem('testObject', JSON.stringify(this.AddUnitForm));
    //     existingEntries.push(testObject);

    //     localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    //     console.log('form value',this.AddUnitForm.value);

        // this.submitted = true;
        // stop here if AddUnitForm is invalid
        // if (this.AddUnitForm.invalid) {
        //     return;
        // }
        // this.userService.addUnitChange(this.AddUnitForm.value).pipe(first()).subscribe(
        //     (data: any) => {
        //         if (data.status_code == 200) {
        //             // this.AddUnitForm.merge({id: 4, name: "Vimal"});
        //               console.log(this.AddUnitForm.value);
        //             // const storeUnitIdOld = this.currentUser.unit_id;
        //             // let newUnitId = data.data.unit_id;
        //             // const storeAllUnit = storeUnitIdOld.concat(',', newUnitId);
        //             // this.currentUser.unit_id = storeAllUnit;
        //             // localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        //             // this.alertService.success(data.message, true);
        //             // this.dialogRef.close('YesSubmit');
        //         }
        //         else {
        //             this.alertService.error(data.message, true);
        //         }
        //     },
        //     error => {
        //         this.alertService.error(error);
        //     });
    }
}
function testObject(testObject: any) {
   return localStorage.setItem("allEntries", JSON.stringify(testObject));
}

