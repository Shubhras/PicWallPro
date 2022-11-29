import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, Inject, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { UnitChangeService } from 'app/main/apps/player-setup/unit-change.service';
import { AddUnitDialog } from 'app/main/apps/player-setup/addunit.component';
import { EditUnitDialog } from 'app/main/apps/player-setup/editunit.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from 'app/main/apps/_services';
import { ConfirmationDialogService } from 'app/main/apps/confirmation-dialog/confirmation-dialog.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { random } from 'lodash';
import randomString from 'randomstring';

@Component({
  selector: 'app-player-setup',
  templateUrl: './player-setup.component.html',
  styleUrls: ['./player-setup.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class PlayerProSetupComponent implements OnInit {

  showFilter = false;
  limitSelection = false;
  cities: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  currentUser: any;
  company_id: any;
  /*animal: string;
  name: string;*/
  viewUnitChangeData: any;
  unitChangeAllData: any;
  //module:any;
  status_code: any;
  message: any;
  MessageSuccess: any;
  MessageError: any;
  displayedColumns: string[] = ['name', 'status', 'main_content','ip_address','action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE') table: ElementRef;
  @ViewChild('content') content: ElementRef;
    id: number;
  result: any;
  /**
   * Constructor
   *
   * @param {ActionPlanService} _initiativeService
   */
  constructor(
    private _unitChangeService: UnitChangeService,
    public dialog: MatDialog,
    private userService: UserService,
    private alertService: AlertService,
    private confirmationDialogService: ConfirmationDialogService,
    private _fuseConfigService: FuseConfigService,
  ) {PlayerProSetupComponent
  }
  /**
  * On init
  */
toppingList =['2022','2021','2023'];
category = ['Class of', 'Staff of',
   'Jr Basketball Team', 'Sr Basketball Team', 'Jr Football Team', 'Sr Football Team', 'Jr Soccer Team'
  ];

  data=[{
    "id": 1,
    "name": "Main Entrance",
    "status": "Online",
    "main_content": "Class of",
    "ip_address": "116.206.149.22",
  },
  {
    "id": 2,
    "name": "Gym North Entrance",
    "status": "Online",
    "main_content": "Staff of",
    "ip_address": "116.206.149.22"
  },
  {
    "id": 3,
    "name": "Main Hall East",
    "status": "Online",
    "main_content": "Sports Teams",
    "ip_address": "116.206.149.22"
  },
  {
    "id": 4,
    "name": "Main Entrance",
    "status": "Online",
    "main_content": "Events",
    "ip_address": "116.206.149.22"
  },
  {
    "id": 5,
    "name": "Main Hall East",
    "status": "Online",
    "main_content": "Random",
    "ip_address": "116.206.149.22"
  }
  
]
  ngOnInit(): void {

    this.cities = [
      { item_id: 1, item_text: 'Jr Basketball Team'},
      { item_id: 2, item_text: 'Sr Basketball Team' },
      { item_id: 3, item_text: 'Jr Football Team' },
      { item_id: 4, item_text: 'Sr Football Team' },
      { item_id: 5, item_text: 'Jr Soccer Team' },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Jr Football Team' },
      { item_id: 5, item_text: 'Sr Football Team' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 1,
      allowSearchFilter: this.showFilter,
    };
    //this.dataSource.sort = this.sort;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.data;
    this.toppingList;
    console.log('ii',this.data);
    
    // this.id = this.data.id;
    this.unitChangeGet();
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onSelectAll(item: any) {
    console.log('onSelectAll', item);
  }
  generateCode(){
    let code= random(0,9);
    this.result = randomString.generate(8);
    console.log('hello:',this.result);
  }

  AddUnitPopupOpen(): void {
    const dialogRef = this.dialog.open(AddUnitDialog, {
      panelClass: 'addunit-dial'
    });
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
    dialogRef.afterClosed().subscribe(result => {
      this._fuseConfigService.config = {
        layout: {
          navbar: {
            hidden: false
          },
          // toolbar: {
          //   hidden: true
          // },
        }
      };
      if (result == "YesSubmit") {
        this.unitChangeGet();
      }
    });
  }
  EditUnitPopupOpen(element): void {
    const dialogRef = this.dialog.open(EditUnitDialog, {
      panelClass: 'addunit-dial',
      // width: 'auto',
      data: element
    });
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
    dialogRef.afterClosed().subscribe(result => {
      this._fuseConfigService.config = {
        layout: {
          navbar: {
            hidden: false
          },
          // toolbar: {
          //   hidden: true
          // },
        }
      };
      if (result == "YesSubmit") {
        this.unitChangeGet();
      }
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  unitChangeGet() {
// console.log('data',this.data);

    // let login_access_token = this.currentUser.login_access_token;
    // this.userService.getUnitChange(login_access_token, 1).pipe(first()).subscribe(
    //   (data: any) => {
        this.dataSource = this.data;
    //     this.unitChangeAllData = this.viewUnitChangeData.data;
    //     this.unitChangeAllData.map((UNIT: any, index: number) => {
    //       UNIT.sr_no = index + 1;
    //     });
    //     const ELEMENT_DATA: PeriodicElement[] = this.unitChangeAllData;
    //     this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    //     this.dataSource.paginator = this.paginator;
    //     console.log('llll',this.dataSource);
        
    //   },
    //   error => {
    //     this.alertService.error(error);
    //   });
  }
  DeleteStrategicData(unit_id) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let login_access_token = this.currentUser.login_access_token;
    let user_id = this.currentUser.data.id;
    const confirmResult = this.confirmationDialogService.confirm('unit');
    confirmResult.afterClosed().subscribe((result) => {
      if (result == true) {
        this.userService.deleteUnitChange(login_access_token, unit_id, user_id).pipe(first()).subscribe(
          data => {
            this.status_code = data;
            if (this.status_code.status_code == 200) {
              this.MessageSuccess = data;
              this.alertService.success(this.MessageSuccess.message, true);
              this.unitChangeGet();
            }
            else {
              this.MessageError = data;
              this.alertService.error(this.MessageError.message, true);
            }
          },
          error => {
            this.alertService.error(error);
          });
      }
    });
  }
}
export interface PeriodicElement {
  sr_no: number;
  unit_name: string;
  unit_address: string;
  company_name: string;
  action: string;
}
 