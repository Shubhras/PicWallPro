import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { AddUnitDialog } from 'app/main/apps/people-pro/addunit.component';
import { EditUnitDialog } from 'app/main/apps/people-pro/editunit.component';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from 'app/main/apps/_services';
import { ConfirmationDialogService } from 'app/main/apps/confirmation-dialog/confirmation-dialog.service';
import { FuseConfigService } from '@fuse/services/config.service';
import * as XLSX from 'xlsx';
import { FormControl } from '@angular/forms';
type AOA = any[][];
@Component({
  selector: 'app-people-pro',
  templateUrl: './people-pro.component.html',
  styleUrls: ['./people-pro.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class PeopleProComponent implements OnInit {
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
  displayedColumns: string[] = ['profile', 'name', 'grade_year', 'activities', 'qoute', 'action'];
  dataSource: any;
  studentData: any =[];
  // exceldata: AOA = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE') table: ElementRef;
  @ViewChild('content') content: ElementRef;
  id: number;
  peopleData: any;
  // dataSourcepeople: { id: number; name: string; grad_year: string; activites: string; qoute: string; }[];
  // dataSource1: { id: number; profile: string; name: string; grad_year: string; activites: string; qoute: string; }[];
  // convertedJsonData: String;
  excelData: any;
  login_access_token: any;
  unit_id: any;
  /**
   * Constructor
   *
   * @param {ActionPlanService} _initiativeService
   */
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private alertService: AlertService,
    private confirmationDialogService: ConfirmationDialogService,
    private _fuseConfigService: FuseConfigService,
  ) {
    PeopleProComponent
  }
  /**
  * On init
  */
  grade_years = ['2017', '2018', '2019', '2020', '2021', '2022'];
  category = ['Class of', 'Staff of', 'Jr Basketball Team', 'Sr Basketball Team', 'Jr Football Team', 'Sr Football Team', 'Jr Soccer Team'];
  staffoflist = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch'];
  
  ngOnInit(): void {
    //this.dataSource.sort = this.sort;
    this.peopleData = JSON.parse(localStorage.getItem('allEntries'));

    // this.data.push(this.peopleData);
    console.log('jk', this.peopleData);
    // this.toppingList;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.login_access_token = this.currentUser.login_access_token;
    this.company_id = this.currentUser.data.company_id;
    this.unit_id = JSON.parse(localStorage.getItem('currentUnitId'));
    this.getStudents();
  }

  AddPeople(): void {
    const dialogRef = this.dialog.open(AddUnitDialog, {
      panelClass: 'addunit-dial',
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
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const addPeopleObj1 = {
          "name": result.name,
          "grade_year": result.grade_year,
          "activities": result.activities,
          "qoute": result.qoute,
          "unit_id": result.unit_id,
          "company_id": result.company_id
        }
        this.userService.addStudents(addPeopleObj1).pipe(first()).subscribe(
          (data: any) => {
            console.log('Students data', data);
            if (data.status_code == 200) {
              this.alertService.success(data.message, true);
              this.getStudents();
            }
          },
          error => {
            this.alertService.error(error);
          });
      }
      this._fuseConfigService.config = {
        layout: {
          navbar: {
            hidden: false
          },
        }
      };
    });
  }

  EditPeople(element): void {
    const dialogRef = this.dialog.open(EditUnitDialog, {
      panelClass: 'addunit-dial',
      data: element
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
    dialogRef.afterClosed().subscribe(result => {
      this._fuseConfigService.config = {
        layout: {
          navbar: {
            hidden: false
          },
        }
      };
      if (result) {
        console.log('editresult', result);
        ///
        this.userService.updateStudents(result).pipe(first()).subscribe(
          (data: any) => {
            // this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
            console.log('Students data', data);
            if (data.status_code == 200) {
              this.alertService.success(data.message, true);
              this.getStudents();
            }
          },
          error => {
            this.alertService.error(error);
          });
        ///
        //   const index = this.data.findIndex(item => item.id === result.id);
        //   this.data.forEach((element, i) => {
        //     if (index == i) {
        //       this.data[index] = result;
        //       this.getStudents();
        //     }
        //   });
      }
    });
  }
 
  gradeYearFilter(grade_year: any) {
    if (grade_year) {
      console.log('this.studentDataff', grade_year);
      const t = this.studentData;
      const ELEMENT_GRADE: PeriodicElement[] = t.filter(object => object.grade_year == grade_year);
      // this.dataSource.filter = grade_year;
      this.dataSource = ELEMENT_GRADE;
    } else {
      this.getStudents();
    }
  }
  // categoryYearFilter(grade_year: any) {
  //   if (grade_year) {
  //     console.log('cat', grade_year);
  //     let temp_data = this.studentData;
  //     temp_data.forEach((row,index )=> {
  //       let temp = row.activities.filter(object => object == grade_year);
  //       row.activities = temp;
  //       temp_data[index] = row;
  //     });
  //     const ELEMENT_DATA: PeriodicElement[] = temp_data;
  //     this.dataSource = ELEMENT_DATA;
      
  //   } else {
  //     this.getStudents();
  //   }
  // }

  categoryYearFilter(event: any) {
    console.log('input',event);
    // console.log('categoryYearFilter', this.studentData);
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getStudents() {
    this.userService.getStudents(this.login_access_token, this.unit_id, this.company_id).pipe(first()).subscribe(
      (data: any) => {

        // data.data.forEach(element => {
        //   element.profile = "../../assets/images/avatars/"+element.profile;
        //   console.log('data', data.data);
        // });
        this.studentData = data.data;
        console.log('data', this.studentData);
        const ELEMENT_DATA: PeriodicElement[] = this.studentData;
        this.dataSource = ELEMENT_DATA;
      },
      error => {
        this.alertService.error(error);
      });
  }

  onFileChange(event: any) {
    /* wire up file reader */
    console.log('hello');

    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event: any) => {
      let binaryData = event.target.result;
      let workBook = XLSX.read(binaryData, { type: 'binary' });
      workBook.SheetNames.forEach(sheet => {
        const data1 = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);
        this.excelData = data1;
        this.excelData.forEach(element => {
          let temp = {
            "id": (this.studentData.length + 1),
            "profile": "assets/images/avatars/profile.jpg",
            "name": element.name,
            "grad_year": element.grad_year,
            "activites": element.activites,
            "qoute": element.qoute,
          }
          this.studentData.push(temp);
        });
        this.getStudents();
        this.dataSource = this.studentData;
        console.log('in on change', this.studentData);

        // this.convertedJsonData = JSON.stringify(data, undefined, 4);
      });
      // console.log('this.convertedJsonData', this.convertedJsonData);
    }

  }
  deletePeople(row: any) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // let login_access_token = this.currentUser.login_access_token;
    // let user_id = this.currentUser.data.id;
    const confirmResult = this.confirmationDialogService.confirm('people');
    confirmResult.afterClosed().subscribe((result) => {
      if (result == true) {
        console.log('yesssss', row);
        this.userService.deleteStudent(row).pipe(first()).subscribe(
          data => {
            this.status_code = data;
            if (this.status_code.status_code == 200) {
              this.MessageSuccess = data;
              this.alertService.success(this.MessageSuccess.message, true);
              this.getStudents();
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
  // sr_no: number;
  // unit_name: string;
  // unit_address: string;
  // company_name: string;
  // action: string;
  id: any,
  profile: any,
  name: any,
  grade_year: any,
  activities: any,
  qoute: any,
}
