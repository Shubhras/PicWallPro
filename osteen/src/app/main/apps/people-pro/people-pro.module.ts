import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule ,MatInputModule, MatDialogModule,MatDatepickerModule,MatCheckboxModule,NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS,MatToolbarModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { PeopleProComponent} from 'app/main/apps/people-pro/people-pro.component';
import { AddUnitDialog} from 'app/main/apps/people-pro/addunit.component';
import { EditUnitDialog} from 'app/main/apps/people-pro/editunit.component';
import { UnitChangeService } from 'app/main/apps/people-pro/unit-change.service';
const routes: Routes = [
    {
        path     : '**',
        component: PeopleProComponent,
        resolve  : {
            data: UnitChangeService
        }
    }
];
@NgModule({
    declarations: [
        PeopleProComponent,
        AddUnitDialog,
        EditUnitDialog
    ],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,
        MatInputModule,
        MatDialogModule ,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),
        ChartsModule,
        NgxChartsModule,
        FuseSharedModule,
        FuseWidgetModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatToolbarModule
    ],
    providers   : [
        UnitChangeService
    ],
   entryComponents : [AddUnitDialog,EditUnitDialog]
})
export class PeopleProModule
{
}

