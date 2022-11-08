import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoginModule } from 'app/main/apps/login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { AuthGuard } from './_guards';
import { AuthenticationService } from './_services';
const routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: 'invite-user',
        loadChildren: './invite-user/invite-user.module#InviteUserModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
        , canActivate: [AuthGuard]
    },

    //start
    {
        path: 'about',
        loadChildren: './profile/profile.module#ProfileModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'password',
        loadChildren: './change-password/password.module#PasswordModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'company-setup',
        loadChildren: './company-setup/company-setup.module#CompanySetupModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'event-home',
        loadChildren: './event-home/event-home.module#EventHomeModule'
        ,canActivate: [AuthGuard]
    },
    {
        path: 'modules',
        loadChildren: './modules-permission/modules-permission.module#ModulesPermissionModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'setting',
        loadChildren: './module-roles/business-setting/business-setting.module#BusinessSettingModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'module-roles/:id',
        loadChildren: './module-roles/module-roles/module-roles.module#ModuleAccessRolesModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'user-list',
        loadChildren: './module-roles/users-list/user-list.module#UserListModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'unitchange',
        loadChildren: './module-roles/unit-change/unit-change.module#UnitChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'department',
        loadChildren: './module-roles/department-change/department-change.module#DepartmentChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'section',
        loadChildren: './module-roles/section-change/section-change.module#SectionChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'category',
        loadChildren: './module-roles/category-change/category-change.module#CategoryChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'business',
        loadChildren: './module-roles/business-change/business-change.module#BusinessChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'uom',
        loadChildren: './module-roles/uom-change/uom-change.module#UomChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'priority',
        loadChildren: './module-roles/priority-change/priority.module#PriorityChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'faq-change',
        loadChildren: './module-roles/faq-change/faq-change.module#FaqChangeModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'main-dashboard',
        loadChildren: './main-dashboard/main-dashboard.module#MainDashboardModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'dashboards/dashboard',
        loadChildren: './dashboards/dashboard/dashboard.module#TasktrackerDashboardModule'
        , canActivate: [AuthGuard]
    },

    {
        path: 'dashboards/analytics/task/:start',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'dashboards/analytics/:statusColorId',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'dashboards/analytics-dept-name/:deptName',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'dashboards/analytics-status-dept/:statusColorId/:deptName',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'task-events',
        loadChildren: './dashboards/analytics/task-events/task-events.module#TaskEventsModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'dashboards/taskremark/:id',
        loadChildren: './dashboards/analytics-remark/taskremark.module#TaskremarkModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'dashboards/taskfiles/:id',
        loadChildren: './dashboards/analytics-files/taskfiles.module#TaskfilesModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'welcome-screen',
        loadChildren: './welcome-screen/welcome-screen.module#WelcomeScreenModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'picwall-photo',
        loadChildren: './picwall-photo/picwall-photo.module#PicwallPhotoModule'
        ,  
    },
    {
        path: 'people',
        loadChildren: './people-pro/people-pro.module#PeopleProModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'player-setup',
        loadChildren: './player-setup/player-setup.module#PlayerProSetupModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'branding',
        loadChildren: './branding/branding.module#BrandingModule'
        , canActivate: [AuthGuard]
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
        , canActivate: [AuthGuard]
    }
    
    
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        LoginModule,
        RegisterModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        
        //KnowledgeBaseModule
    ],
    providers: [AuthenticationService, AuthGuard],
})
export class AppsModule {
}
