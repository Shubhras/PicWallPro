import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AlertService, UserService } from '../_services';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataService } from "./unit-data.service";
import { DataYearService } from 'app/layout/components/toolbar/year-select-data.service';
import { Subscription, pipe } from 'rxjs';

@Component({
    selector: 'event-home',
    templateUrl: './event-home.component.html',
    styleUrls: ['./event-home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EventHomeComponent implements OnInit {
    allUnitsGet: any;
    unit_id: any;
    unit_name: any;
    currentUnitId: any;
    currentUnitName: any;
    message: string;
    currentUser: any;
    userSelectedYear: any;
    allDetailsCompany: any;
    companyFinancialYear: any;
    currentYearSubscription: Subscription;
    Stretagic_object: any;
    Initiative: any;
    Action_plan: any;
    userModulePermission: { acc_create: number; acc_delete: number; acc_edit: number; acc_view: number; icon: string; icon_class: string; id: number; module_id: number; module_name: string; name: string; parent: number; role_module_id: number; role_module_role_id: number; sidebar_status: number; type: string; url: string; view_permission: number; }[];
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private data: DataService,
        private dataYearService: DataYearService,
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: false
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    /**
     * On init
     */
    ngOnInit(): void {
        this.data.currentMessage.subscribe(message => this.message = message);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.multiUnitsGet();
        this.viewStrategicDashboard();
        this.unit_id = localStorage.getItem('currentUnitId');
        this.allDetailsCompany = JSON.parse(localStorage.getItem('allDetailsCompany'));
        console.log('lksks',this.allDetailsCompany );
        
        // this.companyFinancialYear = this.allDetailsCompany.general_data[0].financial_year;
        // this.currentYearSubscription = this.dataYearService.currentMessageYear.subscribe(messageYear => {
        //     this.userSelectedYear = messageYear;
            
        // });
    }
    multiUnitsGet() {
        let login_access_token = this.currentUser.login_access_token;
        this.unit_id = this.currentUser.unit_id;
        console.log('unit', this.unit_id);
        
        this.userService.getMultiUnits(login_access_token, this.unit_id).pipe(first()).subscribe(
            (data: any) => {
                if (data) {
                    this.allUnitsGet = data.data;
                }
            },
            error => {
                this.alertService.error(error);
            });
    }
    viewStrategicDashboard() {
        let login_access_token = this.currentUser.login_access_token;
       let unit_id =  this.unit_id
        console.log('unitv', this.unit_id);
     
        let role_id = this.currentUser.role_id;
        let dept_id = this.currentUser.dept_id;
        let selectedYear = this.userSelectedYear;
        let financialYear = this.companyFinancialYear;
        this.userService.strategicDashboardView(login_access_token, unit_id, role_id, dept_id, selectedYear, financialYear).pipe(first()).subscribe(
            (data: any) => {
                let stralldata = data.data;

                this.Stretagic_object = stralldata.strategic_objectives.total;
                this.Initiative = stralldata.initiatives.total;
                this.Action_plan = stralldata.action_plans.total
            },
            error => {
                this.alertService.error(error);
            });

    }
    selectUnit(unitsId, unitName) {
        this.unit_id = unitsId;
        this.unit_name = unitName;
        this.data.changeMessage(this.unit_name);
        // //sessionStorage.setItem('currentUnitId', this.unit_id);
        localStorage.setItem('currentUnitId', unitsId);
        const userModulePermission = JSON.parse(localStorage.getItem('userModulePermission'));
        if(userModulePermission == null){
            this.userModulePermission = [
                ​​ {
                ​​ "acc_create": 1,
                "acc_delete": 1,
                "acc_edit": 1,
                "acc_view": 1,
                "icon": "fa-group",
                "icon_class": "",
                "id": 2,
                "module_id": 1,
                "module_name": "Users",
                "name": "Users",
                "parent": 1,
                "role_module_id": 28,
                "role_module_role_id": 1,
                "sidebar_status": 0,
                "type": "module",
                "url": "picwall-photo",
                "view_permission": 0
                ​​  }
                ​​];
                localStorage.setItem('userModulePermission', JSON.stringify(this.userModulePermission));

            }
        this.router.navigate(['/apps/picwall-photo']);

        // this.router.navigate(['/apps/welcome-screen']);
        console.log('unit',unitsId);
        // console.log(this.Initiative);
        // console.log(this.Action_plan);
        // this.router.navigate(['/apps/welcome-screen']);
        // if (this.Stretagic_object == 0 || this.Initiative == 0 || this.Action_plan == 0) {
        //     this.router.navigate(['/apps/Onboard']);
        // }
        // else {
        //     this.router.navigate(['/apps/welcome-screen']);
        // }
    }
}