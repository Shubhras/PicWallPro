import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule ,MatInputModule, MatDialogModule,MatDatepickerModule,MatCheckboxModule,NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS,MatTooltipModule,MatToolbarModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { ProcedureComponent} from 'app/main/apps/business-vitals/procedure-template/procedure.component';
import { AddProcedureDialog} from 'app/main/apps/business-vitals/procedure-template/add-procedure.component';
import { EditProcedureDialog} from './edit-procedure.component';

const routes: Routes = [
    {
        path     : '**',
        component: ProcedureComponent,
        resolve  : {

        }
    }
];
@NgModule({
    declarations: [
        ProcedureComponent,
        AddProcedureDialog,
        EditProcedureDialog
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
        MatTooltipModule,
        MatToolbarModule
    ],
    providers   : [
    ],
   entryComponents : [AddProcedureDialog,EditProcedureDialog]
})
export class ProcedureModule
{
}

