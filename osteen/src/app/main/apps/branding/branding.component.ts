import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { AlertService, UserService } from 'app/main/apps/_services';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class BrandingComponent implements OnInit {
  test: any;
  id: number;
  userFile: any;
  imageSelected: any;
  color = 'blue';
  message = 'Empty';
  fg: FormGroup;
  public selectedColor: string = 'blue';
  currentUser: any;
  company_id: any;
  colorData: any;
  MessageSuccess: any;
  MessageError: any;
  /**
   * Constructor
   *
   * @param {ActionPlanService} _initiativeService
   */
  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService,
    private alertService: AlertService) {
    // console.log(this.message);
    this.fg = this.fb.group({
      color: [this.color, Validators.required]
    });
    //  this.dialog.open( );
  }

  selectedFiles: FileList;
  fileName: string;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log('selectedFiles: ' + this.fileName);
  }
  imageSrc: string;
  url: any; //Angular 11, for stricter type
  msg = "";


  selectFile(event: any) { //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }
  }
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.company_id = this.currentUser.data.company_id;
    this.getColor();
  }


  addColor(event: any) {
    if (event == 'blue') {
      alert('please select a color')
    } else {
      console.log('kkkkkk', event);
      console.log('\nkkkkkk', event.toString(16));
      this.userService.addColorCode(event, this.company_id).pipe(first()).subscribe(
        (data: any) => {
          // console.log('color:', data.status_code);
          if (data.status_code == 200) {
            this.MessageSuccess = data;
            this.getColor();
            this.alertService.success(this.MessageSuccess.message, true);
          } else {
            this.MessageError = data;
            this.alertService.error(this.MessageError.message, true);
          }
          // this.colorData = data;
        },
        error => {
          this.alertService.error(error);
        });
    }
  }

  getColor() {
    this.userService.getColorCode(this.company_id).pipe(first()).subscribe(
      (data: any) => {
        if (data.data) {
          this.colorData = data.data;
          console.log('color code:', this.colorData.code);
        }
      },
      error => {
        this.alertService.error(error);
      });
  }
}

