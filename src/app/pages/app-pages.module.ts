import  { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeComponent} from './home/home.component';
import { ProjectDetailsComponent} from './project-details/project-details.component';
import  { RouterModule, Routes} from '@angular/router';
import { SharedModule } from "../shared/shared.module";


/*const routes:Routes = [ {
    path : '',
    component: HomeComponent
  }];*/

@NgModule({
    declarations : [
        HomeComponent,
         ProjectDetailsComponent
    ],
    imports :[
         SharedModule,
         CommonModule
        // ProjectSummaryComponent
       // RouterModule.forChild(routes)
    ],
    exports: [
       
        RouterModule
    ],
    providers:[]

})

export class AppPagesModule{
    
}