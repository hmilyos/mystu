import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {StudentFormComponent} from './student/student-form/student-form.component';
import {StudentManageComponent} from './student/student-manage/student-manage.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {StudentServerService} from "./student/student-server.service";

const routeConfig: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stu', component: StudentManageComponent},
  {path: 'stu/:id', component: StudentFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    DashboardComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    StudentFormComponent,
    StudentManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StudentServerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
