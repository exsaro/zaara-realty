import  { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeComponent} from './home/home.component';
import { ProjectDetailsComponent} from './project-details/project-details.component';
import  { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { ProjectDetailsService} from '../pages/project-details/project-details.service';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/adminlogin.component';
import { BuilderlistComponent } from './admin/builderlist/builderlist.component';
import { AddbuilderComponent } from './admin/addbuilder/addbuilder.component';
import { AdminSidebarComponent } from './admin/adminsidebar.component';
import { AgmCoreModule } from '@agm/core';
import { SafePipe } from './safe.pipe';


const routes:Routes = [

  {
    path : 'admin',
    component: AdminLoginComponent
  },
  {
    path : 'admin/builderlist',
    component: BuilderlistComponent
  },
  {
    path : 'admin/addbuilder',
    component: AddbuilderComponent
  }
];

@NgModule({
    declarations : [
        HomeComponent,
         ProjectDetailsComponent,
         AdminLoginComponent,
         BuilderlistComponent,
         AddbuilderComponent,
         AdminSidebarComponent,
         AdminComponent,
         SafePipe
    ],
    imports :[
         SharedModule,
         CommonModule,
         FormsModule,
         ReactiveFormsModule,
         AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBlVqyB--wrkGpks1i74mHuZLpGu1pwVq8'
        }),
        // ProjectSummaryComponent
       RouterModule.forChild(routes)
    ],
    exports: [

        RouterModule
    ],
    providers:[ProjectDetailsService]

})

export class AppPagesModule{

}
