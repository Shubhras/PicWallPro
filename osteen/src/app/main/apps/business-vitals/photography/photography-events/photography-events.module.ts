import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule ,MatInputModule, MatDialogModule,MatDatepickerModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { LightboxModule } from 'ngx-lightbox';
import { PhotographyEventsComponent} from 'app/main/apps/business-vitals/photography/photography-events/photography-events.component';
const routes: Routes = [
    {
        path     : '**',
        component: PhotographyEventsComponent,
        resolve  : {

        }
    }
];

@NgModule({
    declarations: [
        PhotographyEventsComponent
    ],
    imports     : [
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
        LightboxModule
    ],
    providers   : [
    ]
})
export class PhotographyEventsModule
{
}

