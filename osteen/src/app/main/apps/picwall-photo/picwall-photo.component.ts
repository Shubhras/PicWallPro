import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AlertService, UserService } from '../_services';
import { LoaderService } from 'app/main/apps/loader/loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Subscription, pipe } from 'rxjs';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
declare let d3pie: any;
import * as moment from 'moment';
import { KpiDefinition } from '../common-dialog/kpi-definition/kpi-definition.component';
// import { DialogComponent } from 'app/main/apps/welcome-screen/newUser.component';
import { DataYearService } from 'app/layout/components/toolbar/year-select-data.service';
import { STATUSES } from '../_constants';
import { trigger } from '@angular/animations';
import { map } from 'lodash';
import { DatePipe } from '@angular/common';

declare var $: any;
export interface DialogData {
    animal: string;
    name: string;
}
@Component({
    selector: 'app-picwall-photo',
    templateUrl: './picwall-photo.component.html',
    animations: [
        trigger('animate', [
        ])
    ],
    styleUrls: ['./picwall-photo.component.scss']
})
export class PicwallPhotoComponent implements OnInit {
    currentUser: any;
    designation_name: any;
    user_name: any;
    truth: any;
    userModulePermission: any;
    //order: string = 'hierarchy';
    dataDepartment: any;
    unit_id: any;
    userListAllData: any;
    unit_name: any;
    designation: any;
    totalTaskData: any = {};
    todayDate: any;
    currentyMonth: any;
    login_access_token: any;
    userSelectedYear: any;
    currentYearFull: any;
    userSelectedYearFull: any;
    userSelectedYearHalf: any;
    currentYearPlusOne: any;
    allDetailsCompany: any;
    companyFinancialYear: any;
    company_id: any;
    total_objectives: any;
    //selectedYearVal:any;
    displayedColumnsSIA: string[] = ['name_StrInitia', 'total', 'green', 'yellow', 'red', 'gray', 'blue'];
    dataSourceSIA: any;
    displayedColumnsLesent: string[] = ['lesent_name', 'lesent_description'];
    //   dataSourceLesent = new MatTableDataSource<PeriodicElementLesent>(ELEMENT_DATA_LESENT);
    displayedColumnsKPI: string[] = ['dept_name', 'total_kpi', 'green', 'yellow', 'red', 'gray'];
    dataSourceKPI: any;
    displayedColumnsKpiLesent: string[] = ['lesent_name', 'lesent_description'];
    //   dataSourceKpiLesent = new MatTableDataSource<PeriodicElementKpiLesent>(ELEMENT_DATA_KPI_LESENT);

    displayedColumnsTASK: string[] = ['task_name', 'priority_name', 'status_name'];
    dataSourceAssinSelf: any;
    department_alot: any;
    user_alotID: any;
    profileValue = false;
    dataSourceAssinOther: any;
    dataSourceCrateTask: any;
    displayedColumnsReAction: string[] = ['category', 'status', 'reminder_date'];
    dataSourceReAction: any;
    displayedColumnsReKPI: string[] = ['kpi_name', 'month'];
    dataSourceReKPI: any;
    displayedColumnsReKPIComing: string[] = ['kpi_name', 'month'];
    dataSourceReKPIComing: any;
    KpiYearMonth = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    displayedColumnsLeadKPI = ['kpi_name', 'kpi_definition', 'unit_of_measurement', 'ideal_trend', 'section_name', 'year_for', 'one_year', 'two_year', 'three_year',
        'four_year'];
    dataSource: any;
    renderKPIData: Array<any>;
    currentYearSubscription: Subscription;




    @ViewChild('pieChartObj') pieChartObj: ElementRef;
    @ViewChild('pieChartIni') pieChartIni: ElementRef;
    @ViewChild('pieChartAction') pieChartAction: ElementRef;
    @ViewChild('pieChartKPI') pieChartKPI: ElementRef;
    // @ViewChild('pieChartTASK') pieChartTASK: ElementRef;
    @ViewChild('pieChartLeadKPI') pieChartLeadKPI: ElementRef;
    UserName: any;
    userPicture: any;
    Name: any;
    dataDepartment2: any;
    showkpireminders: boolean;
    images: { name: string; avatar: string; }[];
    powers: string[];
    class: string[];
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private router: Router,
        public dialog: MatDialog,
        private userService: UserService,
        private alertService: AlertService,
        private loaderService: LoaderService,
        private dataYearService: DataYearService,
        public datepipe: DatePipe
    ) {
        // Configure the layout

        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: false,
                    folded: true
                },
                toolbar: {
                    hidden: false
                },
                footer: {
                    hidden: false
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
        this.showkpireminders = true;
        let nowCurrentYear = new Date();
        this.todayDate = new Date().getDate();
        this.currentyMonth = moment(nowCurrentYear, 'YYYY-MM-DD').format('MMM');
        this.currentYearFull = moment(nowCurrentYear, 'YYYY-MM-DD').format('YYYY');
        this.designation_name = JSON.parse(localStorage.getItem('LoginUserDetails'));
        this.designation = this.designation_name.designation;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.login_access_token = this.currentUser.login_access_token;
        this.department_alot = this.currentUser.dept_id;
        this.user_alotID = this.currentUser.data.id;
        // console.log("useriddddddd", this.user_alotID);
        this.UserName = this.currentUser ? this.currentUser.data.name : null;
        this.userPicture = this.currentUser ? this.currentUser.data.profile_picture : null;
        if (this.userPicture != '') {

            this.userPicture = this.userPicture;
        }
        else {
            this.profileValue = true;
            this.Name = this.UserName[0].toUpperCase()

            //this.userPicture = "assets/images/avatars/profile.jpg";
        }
        // this.allDetailsCompany = JSON.parse(localStorage.getItem('allDetailsCompany'));
        // this.companyFinancialYear = this.allDetailsCompany.general_data[0].financial_year;
        // this.company_id = this.allDetailsCompany.general_data[0].company_id;
        // console.log('this.company_id', this.company_id);
        //set header by financial year and month
        if (this.companyFinancialYear == "april-march") {
            this.displayedColumnsLeadKPI.push('apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar', 'ytd_target_actual');
        }
        else {
            this.displayedColumnsLeadKPI.push('jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'ytd_target_actual');
        }
        this.user_name = this.currentUser.data.name;
        this.unit_id = localStorage.getItem('currentUnitId');
        // console.log("zxzxzxx", this.unit_id);
        this.unit_name = localStorage.getItem('currentUnitName');
        // console.log("zxzxzxx", this.unit_name);

        this.userModulePermission = JSON.parse(localStorage.getItem('userModulePermission'));
        this.currentYearSubscription = this.dataYearService.currentMessageYear.subscribe(messageYear => {
            this.userSelectedYear = messageYear;
            this.userSelectedYearFull = this.userSelectedYear;
            this.userSelectedYearHalf = this.userSelectedYear.toString().substr(2, 2);
            this.currentYearPlusOne = Number(this.userSelectedYearHalf) + 1;
            // this.userService.getAllDepartment(this.login_access_token, this.unit_id).pipe(first()).subscribe(
            //   (data: any) => {
            //     this.dataDepartment2 = data.data;
            //     console.log("ALL DEPARTMENT", this.dataDepartment2[0].id);

            //   });
            // console.log("ALL DEPARTMENT222", this.dataDepartment2[0].id);
            //   this.viewStrategicDashboard();
            let role_id = this.currentUser.role_id;
            let dept_id = this.currentUser.dept_id;
            // 112
            // this.currentUser.dept_id
            let selectedYear = this.userSelectedYear;
            let financialYear = this.companyFinancialYear;

            this.userService.strategicDashboardView(this.login_access_token, this.unit_id, role_id, dept_id, selectedYear, financialYear).pipe(first()).subscribe(
                (data: any) => {
                    this.total_objectives = data.data;
                    //  console.log("thisss", this.total_objectives);
                    //   if (this.total_objectives.action_plans.total == 0) {
                    //     this.openWelcomeDialog();
                    //   }
                });

        });
        //this.userLisetGet();
        //this.selectedYearVal = this.currentYearFull;
      this.class = ['10th', '11th','12th'];
        this.powers = ['2013', '2014','2015', '2016','2017', '2018',
    ];
         this.images = [
                {
                    'name': 'Garry Newman',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Carl Henderson',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Jane Dean',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Garry Arnold',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Alice Freeman',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Andrew Green',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Jane Dean',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Garry Arnold',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Alice Freeman',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Andrew Green',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Alice Freeman',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Andrew Green',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Andrew Green',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Alice Freeman',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Andrew Green',
                    'avatar': 'assets/images/avatars/user-icon.png'
                },
                {
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/user-icon.png'
                }
            
            ];
       
    }
    ngOnDestroy(): void {
        this.currentYearSubscription.unsubscribe();

    }

    kpiDefinitionOpen(element): void {
        const dialogRef = this.dialog.open(KpiDefinition, {
            data: element
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    // POPUOOOO

    //   openWelcomeDialog() {
    //     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //       disableClose: true,
    //       // width:'400px',
    //       panelClass: 'adding-dial',

    //       data: {
    //         animal: 'panda',
    //       },
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //       // console.log('The dialog was closed');
    //       // this.animal = result;
    //     });
    //   }







    prepareDataForChart(data: any) {
        const totalStr = data.strategic_objectives.total;
        const totalInt = data.initiatives.total;
        const totalAction = data.action_plans.total;
        const graphDataStr = [
            {
                "label": (data.strategic_objectives.green * 100 / totalStr).toFixed(1) + '%',
                "value": data.strategic_objectives.green,
                "color": "#4caf50",
                "colorName": "Green"
            }, {
                "label": (data.strategic_objectives.yellow * 100 / totalStr).toFixed(1) + '%',
                "value": data.strategic_objectives.yellow,
                "color": "#FFD933",
                "colorName": "Yellow"
            }, {
                "label": (data.strategic_objectives.red * 100 / totalStr).toFixed(1) + '%',
                "value": data.strategic_objectives.red,
                "color": "#f44336",
                "colorName": "Red"
            },
            {
                "label": (data.strategic_objectives.blue * 100 / totalStr).toFixed(1) + '%',
                "value": data.strategic_objectives.blue,
                "color": "#7dabf5",
                "colorName": "Blue (Hold)"
            },
            {
                "label": (data.strategic_objectives.gray * 100 / totalStr).toFixed(1) + '%',
                "value": data.strategic_objectives.gray,
                "color": "#a9b7b6",
                "colorName": "Gray (Started)"
            },
        ];
        const graphDataIni = [
            {
                "label": (data.initiatives.green * 100 / totalInt).toFixed(1) + '%',
                "value": data.initiatives.green,
                "color": "#4caf50",
                "colorName": "Green"
            }, {
                "label": (data.initiatives.yellow * 100 / totalInt).toFixed(1) + '%',
                "value": data.initiatives.yellow,
                "color": "#FFD933",
                "colorName": "Yellow"
            }, {
                "label": (data.initiatives.red * 100 / totalInt).toFixed(1) + '%',
                "value": data.initiatives.red,
                "color": "#f44336",
                "colorName": "Red"
            },
            {
                "label": (data.initiatives.blue * 100 / totalInt).toFixed(1) + '%',
                "value": data.initiatives.blue,
                "color": "#7dabf5",
                "colorName": "Blue (Hold)"
            },
            {
                "label": (data.initiatives.gray * 100 / totalInt).toFixed(1) + '%',
                "value": data.initiatives.gray,
                "color": "#a9b7b6",
                "colorName": "Gray (Started)"
            },
        ];
        const graphDataAction = [
            {
                "label": (data.action_plans.green * 100 / totalAction).toFixed(1) + '%',
                "value": data.action_plans.green,
                "color": "#4caf50",
                "colorName": "Green"
            }, {
                "label": (data.action_plans.yellow * 100 / totalAction).toFixed(1) + '%',
                "value": data.action_plans.yellow,
                "color": "#FFD933",
                "colorName": "Yellow"
            }, {
                "label": (data.action_plans.red * 100 / totalAction).toFixed(1) + '%',
                "value": data.action_plans.red,
                "color": "#f44336",
                "colorName": "Red"
            },
            {
                "label": (data.action_plans.blue * 100 / totalAction).toFixed(1) + '%',
                "value": data.action_plans.blue,
                "color": "#7dabf5",
                "colorName": "Blue (Hold)"
            },
            {
                "label": (data.action_plans.gray * 100 / totalAction).toFixed(1) + '%',
                "value": data.action_plans.gray,
                "color": "#a9b7b6",
                "colorName": "Gray (Started)"
            },
        ];
        /*const totalStr =data.strategic_objectives.total;
        const totalInt = data.initiatives.total;
        const totalAction = data.action_plans.total;*/
        this.fucnPieChart("pieChartObj", graphDataStr, totalStr);
        this.fucnPieChart("pieChartIni", graphDataIni, totalInt);
        this.fucnPieChart("pieChartAction", graphDataAction, totalAction);
    }
    viewKpiDashboardData() {
        let login_access_token = this.currentUser.login_access_token;
        let unit_id = this.unit_id;
        let role_id = this.currentUser.role_id;
        let dept_id = this.currentUser.dept_id;
        let selectedYear = this.userSelectedYear;
        let financialYear = this.companyFinancialYear;
        this.userService.kpiDashboardDataView(login_access_token, unit_id, role_id, dept_id, selectedYear, financialYear).pipe(first()).subscribe((data: any) => {
            this.processData(data.data);
            // kpi total for table
            // data.data.map((kpi: any, index: number) => {
            //   kpi.sr_no = index + 1;
            // });
            let KPIDATA = data.data;
            const KpiTotal = KPIDATA.reduce((sum, item) => sum + item.total_kpi, 0);
            const greenTotal = KPIDATA.reduce((sum, item) => sum + item.green, 0);
            const redTotal = KPIDATA.reduce((sum, item) => sum + item.red, 0);
            const yellowTotal = KPIDATA.reduce((sum, item) => sum + item.yellow, 0);
            const grayTotal = KPIDATA.reduce((sum, item) => sum + item.gray, 0);
            const KPI_DATA_TOTAL = {
                // sr_no: 0,
                dept_name: 'Total',
                total_kpi: KpiTotal,
                green: greenTotal,
                yellow: yellowTotal,
                red: redTotal,
                gray: grayTotal
            };

        },
            error => {
                this.alertService.error(error);
            });
    }

    // userLisetGet() {
    //   let role_id = this.currentUser.role_id;
    //   let company_id = this.currentUser.data.company_id;
    //   this.userService.getAllUserList(this.login_access_token, role_id, company_id).pipe(first()).subscribe(
    //     (data: any) => {
    //       this.userListAllData = data.data;
    //       this.designation = this.userListAllData.designation;
    //       console.log("Designation", this.designation);

    //       console.log("hiiii", this.userListAllData);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //     });
    // }
    processData(KPIDATA: any): any {
        // kpi total for pie chart
        const KpiTotal = KPIDATA.reduce((sum, item) => sum + item.total_kpi, 0);
        const greenTotal = KPIDATA.reduce((sum, item) => sum + item.green, 0);
        const redTotal = KPIDATA.reduce((sum, item) => sum + item.red, 0);
        const yellowTotal = KPIDATA.reduce((sum, item) => sum + item.yellow, 0);
        const grayTotal = KPIDATA.reduce((sum, item) => sum + item.gray, 0);

        // console.log('KpiTotal',KpiTotal);
        // console.log('greenTotal',greenTotal);
        // console.log('redTotal',redTotal);
        // console.log('yellowTotal',yellowTotal);
        // console.log('grayTotal',grayTotal);

        this.prepareDataForKPI(KpiTotal, greenTotal, redTotal, yellowTotal, grayTotal);
    }
    prepareDataForKPI(KpiTotal, greenTotal, redTotal, yellowTotal, grayTotal) {
        const totalKPI = KpiTotal;
        const graphDataKPI = [
            {
                "label": (redTotal * 100 / KpiTotal).toFixed(1) + '%',
                "value": redTotal,
                "color": "#f44336"
            }, {

                "label": (greenTotal * 100 / KpiTotal).toFixed(1) + '%',
                "value": greenTotal,
                "color": "#4caf50"
            }, {
                "label": (yellowTotal * 100 / KpiTotal).toFixed(1) + '%',
                "value": yellowTotal,
                "color": "#FFD933"
            },
            {
                "label": (grayTotal * 100 / KpiTotal).toFixed(1) + '%',
                "value": grayTotal,
                "color": "#a9b7b6"
            }
        ];
        this.fucnPieChart("pieChartKPI", graphDataKPI, totalKPI);
    }
    /*   kpiDataByYear() {
        //console.log(this.selectedYearVal);
      } */
    viewLeadKpiDashboardData() {
        let login_access_token = this.currentUser.login_access_token;
        let unit_id = this.unit_id;
        let role_id = this.currentUser.role_id;
        let dept_id = this.currentUser.dept_id;
        let selectedYear = this.userSelectedYear;
        let financialYear = this.companyFinancialYear;
        this.userService.leadKpiDashboardView(login_access_token, unit_id, role_id, dept_id, selectedYear, financialYear).pipe(first()).subscribe(
            (data: any) => {
                this.processLeadData(data.data);
                // console.log("LEADKPI DATA", data.data);

            },
            error => {
                this.alertService.error(error);
            });
    }
    processLeadData(LeadKPIDATA: any): any {
        // kpi total for pie chart
        const leadKpiTotal = LeadKPIDATA.reduce((sum, item) => sum + item.total_kpi, 0);
        // console.log("LEADKPI DATA", leadKpiTotal);
        const leadGreenTotal = LeadKPIDATA.reduce((sum, item) => sum + item.green, 0);
        // console.log("LEADKPI DATA", leadGreenTotal);
        const leadRedTotal = LeadKPIDATA.reduce((sum, item) => sum + item.red, 0);
        // console.log("LEADKPI DATA", leadRedTotal);
        const leadYellowTotal = LeadKPIDATA.reduce((sum, item) => sum + item.yellow, 0);
        // console.log("LEADKPI DATA", leadYellowTotal);
        const leadGrayTotal = LeadKPIDATA.reduce((sum, item) => sum + item.gray, 0);
        // console.log("LEADKPI DATA", leadGrayTotal);
        this.prepareLeadForChart(leadKpiTotal, leadGreenTotal, leadRedTotal, leadYellowTotal, leadGrayTotal);
    }
    prepareLeadForChart(leadKpiTotal, leadGreenTotal, leadRedTotal, leadYellowTotal, leadGrayTotal) {
        const totalLeadKPI = leadKpiTotal;
        const graphDataLeadKPI = [
            {
                "label": (leadRedTotal * 100 / leadKpiTotal).toFixed(1) + '%',
                "value": leadRedTotal,
                "color": "#f44336"
            }, {

                "label": (leadGreenTotal * 100 / leadKpiTotal).toFixed(1) + '%',
                "value": leadGreenTotal,
                "color": "#4caf50"
            }, {
                "label": (leadYellowTotal * 100 / leadKpiTotal).toFixed(1) + '%',
                "value": leadYellowTotal,
                "color": "#FFD933"
            },
            {
                "label": (leadGrayTotal * 100 / leadKpiTotal).toFixed(1) + '%',
                "value": leadGrayTotal,
                "color": "#a9b7b6"
            }
        ];
        this.fucnPieChart("pieChartLeadKPI", graphDataLeadKPI, totalLeadKPI);
    }
    totalTaskDataGet() {
        let login_access_token = this.currentUser.login_access_token;
        let unit_id = this.unit_id;
        let role_id = this.currentUser.role_id;
        let dept_id = this.currentUser.dept_id;
        let selectedYear = this.userSelectedYear;
        let financialYear = this.companyFinancialYear;
        this.userService.tasksDashboardView(login_access_token, unit_id, role_id, dept_id, selectedYear, financialYear).pipe(first()).subscribe(
            (data: any) => {
                this.totalTaskData = data.data.task_data;
            },
            error => {
                this.alertService.error(error);
            });
    }
    ViewTasks() {
        let login_access_token = this.currentUser.login_access_token;
        let unit_id = this.unit_id;
        let user_id = this.currentUser.data.id;
        let role_id = this.currentUser.role_id;
        let dept_id = this.currentUser.dept_id;
        let selectedYear = this.userSelectedYear;
        let financialYear = this.companyFinancialYear;
        this.userService.TasksView(login_access_token, unit_id, role_id, dept_id, selectedYear, financialYear).pipe(first()).subscribe(
            (data: any) => {
                const tasks = data.data;
                // console.log('tasks', tasks);
                if (tasks.length > 0) {
                    tasks.forEach(task => {
                        if ((task.completion_date != '0000-00-00')) {
                            // console.log('date before', task.completion_date);

                            task.completion_date = this.datepipe.transform(task.completion_date, 'dd-MM-yyyy');
                            // console.log('date', task.completion_date);
                        }
                    });
                }
                // this.datepipe.transform(treminderdate, 'dd-MM-yyyy');
                // filter Assigned task create self (task Open and Delayed)
                const assignedSelf = tasks
                // filter Assigned task create other (task Open and Delayed)
                const assignedOther = tasks.filter((task) => {
                    const assignOther: Array<number> = JSON.parse(task.assign_to);
                    return ((task.status_name === "Open" || task.status_name === "Delayed") && assignOther.indexOf(user_id) !== -1 && user_id != task.create_to_user_id);
                });
                // filter created task (task Open and Delayed)
                const createdTasks = tasks.filter((task) => {
                    return (task.status_name === "Open" || task.status_name === "Delayed") && task.user_id === user_id;
                });

            },
            error => {
                this.alertService.error(error);
            });
    }
    statusGetColor(element) {
        switch (element) {
            case 'Closed':
                return '#4caf50';
            case 'Open':
                return '#d68e0a';
            case 'Delayed':
                return '#f44336';
            case 'Closed with Delay':
                return '#a9b7b6';
            case 'On Hold':
                return '#7dabf5';
        }
    }
    fucnPieChart(element: string, data: Array<any>, totalText: any) {
        this[element].nativeElement.innerHTML = '';
        let redirectPage = element;
        let pie = new d3pie(element, {
            "header": {
                "title": {
                    "text": totalText,
                    "fontSize": 24,
                    //"font": "courier",
                    "fontWeight": 600
                },
                "location": "pie-center",
                "titleSubtitlePadding": 10
            },
            "footer": {
                "color": "#999999",
                "fontSize": 10,
                "font": "open sans",
                "location": "bottom-left"
            },
            "size": {
                "canvasHeight": 220,
                "canvasWidth": 265,
                "pieInnerRadius": "50%",
                "pieOuterRadius": "80%"
            },
            "data": {
                "sortOrder": "value-desc",
                "content": data
            },
            callbacks: {
                onClickSegment: function (e) {
                    let colorName;
                    if (e.data.colorName) { colorName = e.data.colorName; }
                    else { colorName = ''; }
                    this.clickableForAllPieChart(redirectPage, colorName);
                }.bind(this)
            },
            "labels": {
                "outer": {
                    "pieDistance": 5
                },
                "inner": {
                    "format": "value",
                    "hideWhenLessThanPercentage": 2
                },
                "mainLabel": {
                    "fontSize": 12
                },
                "percentage": {
                    "color": "#ffffff",
                    "decimalPlaces": 1
                },
                "value": {
                    "color": "#333333",
                    "fontSize": 12
                },
                "lines": {
                    "enabled": true
                },
                "truncation": {
                    "enabled": true
                }
            },
            "tooltips": {
                "enabled": true,
                "type": "placeholder",
                // "string": "{label}: {value},{percentage}%"
                "string": "{percentage}%"
            },
            "effects": {
                "pullOutSegmentOnClick": {
                    "effect": "linear",
                    "speed": 400,
                    "size": 8
                }
            }/*,
          "misc": {
            "gradient": {
              "enabled": true,
              "percentage": 100
            }
          }*/
        });
    }
    clickableForAllPieChart(redirectPage, colorName) {
        let statusId;
        for (const key of Object.entries(STATUSES)) {
            if (key[1] == colorName) {
                statusId = key[0];
            }
        }
        if (redirectPage == "pieChartKPI") {
            this.router.navigate(['/apps/kpitrackers/keyperformance']);
        } else if (redirectPage == "pieChartLeadKPI") {
            this.router.navigate(['/apps/strategic-obj/leadkpi']);
        }
        else if (redirectPage == "pieChartObj") {
            this.router.navigate(['/apps/strategic-obj/strategic/' + statusId]);
        }
        else if (redirectPage == "pieChartIni") {
            this.router.navigate(['/apps/strategic-obj/initiative-data/' + statusId]);
        }
        else if (redirectPage == "pieChartAction") {
            this.router.navigate(['/apps/strategic-obj/action-plan/' + statusId]);
        }
        else {
            this.router.navigate(['/apps/prima-welcome']);
        }
    }
    getColorActual(eleYear, eleMonth, eleLabel) {
        if (eleYear === 'Actual' && eleMonth !== null) {
            if (eleLabel == '#f40000' || eleLabel == '#4caf50') {
                return {
                    'background-color': eleLabel,
                    'color': '#fff',
                    'font-weight': '700',
                    //'font-size': '12px'
                };
            }
            else {
                return {
                    'background-color': eleLabel,
                    'font-weight': '700',
                    //'font-size': '12px'
                };
            }
        }
        else {
            return { 'background-color': '' };
        }
    }


    mainDashboardPDF() {
        this.loaderService.show();
        var data = document.getElementById('prima-welcome');
        html2canvas(data).then(canvas => {
            var imgWidth = 210;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf('p', 'mm', 'a4');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('maindashboard.pdf');
            this.loaderService.hide();
        });
    }

}