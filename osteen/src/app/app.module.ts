import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DIALOG_DATA, MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatTooltipModule, MatToolbarModule } from '@angular/material';
//import {CommonMaterialModule }from './common-module/common-material.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './main/apps/_helpers';
import { AlertComponent } from './main/apps/_components';
import { JwtInterceptor, ErrorInterceptor } from './main/apps/_helpers';
import { AuthGuard } from './main/apps/_guards';
import { AuthenticationService } from './main/apps/_services';
import { DataService } from './main/apps/event-home/unit-data.service';
import { ConfirmationDialogComponent } from 'app/main/apps/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from 'app/main/apps/confirmation-dialog/confirmation-dialog.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './main/apps/loader/loader.component';
import { LoaderService } from './main/apps/loader/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ChartModule } from 'angular-highcharts';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighchartsService } from './main/apps/_services/highcharts.service'
import { DataYearService } from './layout/components/toolbar/year-select-data.service';
import { LoginUserAllDataService } from './layout/components/toolbar/login-user-all-data.service';
import { TextFieldModule } from '@angular/cdk/text-field';
// import * as _ from 'underscore';
import { OrderModule } from 'ngx-order-pipe';
import { AddDeptUserDialog, AddUserDialog } from './main/apps/module-roles/users-list/add-user.component';
import { AddDepartmentDialog } from './main/apps/module-roles/department-change/adddepartment.component';
import { AddSectionDialog } from './main/apps/module-roles/section-change/addsection.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ColorPaletteComponent } from './color-picker/color-palette/color-palette.component';
import { TwoDigitDecimaNumberDirective } from './main/apps/directives/two-digit-decima-number.directive';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';
const appRoutes: Routes = [
    {
        path: 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path: '**',
        redirectTo: 'apps/home'
    },
];

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        ConfirmationDialogComponent,
        AddDeptUserDialog,
        LoaderComponent,
        TwoDigitDecimaNumberDirective,
        jqxChartComponent,
        AddUserDialog,
        AddDepartmentDialog,
        AddSectionDialog,
        ColorPaletteComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ChartModule,

        RouterModule.forRoot(appRoutes, { useHash: true }),
        //RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        // Material moment date module
        MatMomentDateModule,
        // Material
        //CommonMaterialModule,
        MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatTooltipModule, MatToolbarModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        // App modules
        LayoutModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        //AutosizeModule
        TextFieldModule,
        OrderModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        // provider used to create fake backend
        fakeBackendProvider,
        AuthenticationService, AuthGuard,
        DataService,
        DataYearService,
        LoginUserAllDataService,
        ConfirmationDialogService,
        LoaderService,
        HighchartsService,
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [ConfirmationDialogComponent],
    entryComponents: [ConfirmationDialogComponent,
        AddUserDialog,
        AddDepartmentDialog,
        AddSectionDialog,
        AddDeptUserDialog],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AppModule {
}