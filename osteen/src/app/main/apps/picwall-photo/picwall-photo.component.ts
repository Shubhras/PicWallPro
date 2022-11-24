import { Component, OnInit} from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { DataYearService } from 'app/layout/components/toolbar/year-select-data.service';
import { trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { fuseAnimations } from '@fuse/animations';
 
declare var $: any;
export interface DialogData {
    animal: string;
    name: string;
}
@Component({
    selector: 'app-picwall-photo',
    templateUrl: './picwall-photo.component.html',
    animations:[fuseAnimations,
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
    unit_id: any;
    userListAllData: any;
    unit_name: any;
    designation: any;
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
    department_alot: any;
    user_alotID: any;
    profileValue = false;
    dataSourceAssinOther: any;
    dataSource: any;
    currentYearSubscription: Subscription;
    UserName: any;
    userPicture: any;
    Name: any;
    images: { name: string; avatar: string; }[];
    category: string[];
    years: string[];
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
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
      
        this.user_name = this.currentUser.data.name;
        this.unit_id = localStorage.getItem('currentUnitId');
        this.unit_name = localStorage.getItem('currentUnitName');
        this.userModulePermission = JSON.parse(localStorage.getItem('userModulePermission'));
        this.currentYearSubscription = this.dataYearService.currentMessageYear.subscribe(messageYear => {
            this.userSelectedYear = messageYear;
            this.currentYearPlusOne = Number(this.userSelectedYearHalf) + 1;
        });
        this.years  =['2017','2018','2019','2020','2021','2022'];
        this.category=['Class of', 'Staff of','Jr Basketball Team','Sr Basketball Team','Jr Football Team','Sr Football Team','Jr Soccer Team'];

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
selectedFiles: FileList;
fileName: string;

detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
  }
    ngOnDestroy(): void {
        this.currentYearSubscription.unsubscribe();

    }
}