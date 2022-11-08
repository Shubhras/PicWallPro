import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FuseConfigService } from '@fuse/services/config.service';
import { AddUserDialog } from 'app/main/apps/module-roles/users-list/add-user.component';
import { AddDepartmentDialog } from '../module-roles/department-change/adddepartment.component';
import { AddSectionDialog } from '../module-roles/section-change/addsection.component';
import { DialogComponent } from './newUser.component';
import { Router } from '@angular/router';
declare var $: any;


/**
 * @title Stepper overview
 */
@Component({
    selector: 'stepper-overview-example',
    templateUrl: 'userStepper.component.html',
    styleUrls: ['newUser.component.css'],
})
export class StepperOverviewExample implements OnInit {

    /* disableRipple1 = true;
    disableRipple2 = false;
    disableRipple3 = false;
    isLinear = true;
    isDisabled = true;
    isDisabledo = true;
    isDisabledt = true;
    isDisabledf = true; */


    // User
    currentUser: any;
    userListAllData: any;
    dataSource: any;
    currentUrl: any;
    userModulePermission: any;
    initiativesPermission: any;
    strObjPermission: any;
    actionPlanPermission: any;
    userPermission: any;
    departmentPermission: any;
    sectionPermission: any;

    constructor(
        private router: Router,
        private _fuseConfigService: FuseConfigService,
        public dialog: MatDialog,
        public dialogRefstepper: MatDialogRef<DialogComponent>) {
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: false,
                    folded: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        this.userModulePermission = JSON.parse(localStorage.getItem('userModulePermission'));

        for (let i = 0; i < this.userModulePermission.length; i++) {
            if (this.userModulePermission[i].module_name == "Users") {
                this.userPermission = this.userModulePermission[i];                
            }
            if (this.userModulePermission[i].module_name == "Department_masters") {
                this.departmentPermission = this.userModulePermission[i];
            }
            if (this.userModulePermission[i].module_name == "Sections") {
                this.sectionPermission = this.userModulePermission[i];
            }
            if (this.userModulePermission[i].module_name == "Strategic_objectives") {
                this.strObjPermission = this.userModulePermission[i];
            }
            if (this.userModulePermission[i].module_name == "Initiatives") {
                this.initiativesPermission = this.userModulePermission[i];
            }
            if (this.userModulePermission[i].module_name == "Action_plans") {
                this.actionPlanPermission = this.userModulePermission[i];
            }
        }
    }
    
    AddUserOpen(): void {
        if (this.userPermission.acc_create == 1) {
            const dialogRef = this.dialog.open(AddUserDialog, {
            });
            this._fuseConfigService.config = {
                layout: {
                    navbar: {
                        hidden: true
                    },
                    sidepanel: {
                        hidden: true
                    }
                }
            };
            this.dialogRefstepper.close();
            dialogRef.afterClosed().subscribe(result => {
                this._fuseConfigService.config = {
                    layout: {
                        navbar: {
                            hidden: false
                        },
                    }
                };
                if (result == 'YesSubmit') {
                    this.router.navigate([this.currentUrl]);
                }
            });
        }
        else {
            alert('You don`t have permission');
        }
    }

    AddDeptOpen(): void {
        if (this.departmentPermission.acc_create == 1) {
            const dialogRef = this.dialog.open(AddDepartmentDialog);
            this._fuseConfigService.config = {
                layout: {
                    navbar: {
                        hidden: true
                    },
                    // toolbar: {
                    //   hidden: false
                    // },
                    sidepanel: {
                        hidden: true
                    }
                }
            };
            this.dialogRefstepper.close();
            dialogRef.afterClosed().subscribe(result => {
                this._fuseConfigService.config = {
                    layout: {
                        navbar: {
                            hidden: false
                        },
                    }
                };
                if (result == 'YesSubmit') {
                    this.router.navigate([this.currentUrl]);
                }
            });
        }
        else {
            alert('You don`t have permission');
        }
    }

    AddSectionOpen(): void {
        if (this.sectionPermission.acc_create == 1) {
            const dialogRef = this.dialog.open(AddSectionDialog);
            this._fuseConfigService.config = {
                layout: {
                    navbar: {
                        hidden: true
                    },
                    sidepanel: {
                        hidden: true
                    }
                }
            };
            this.dialogRefstepper.close();
            dialogRef.afterClosed().subscribe(result => {
                this._fuseConfigService.config = {
                    layout: {
                        navbar: {
                            hidden: false
                        },
                    }
                };
                if (result == 'YesSubmit') {
                    this.router.navigate([this.currentUrl]);
                }
            });
        }
        else {
            alert('You don`t have permission');
        }
    }   
    AddStrategicPopupOpen():void{}
    addInitiativeOpen():void{}
    addActionPlanOpen():void{}
}
export interface PeriodicElement {
    sr_no: number;
    name: string;
    gender: string;
    email: string;
    mobile: string;
    city: string;
    address: string;
    multi_unit_ids: string;
    multi_dept_ids: string;
    multi_section_ids: string;
    action: string;
}
