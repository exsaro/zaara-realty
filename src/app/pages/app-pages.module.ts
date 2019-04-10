import  { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeComponent} from './home/home.component';
import { ProjectDetailsComponent} from './project-details/project-details.component';
import  { RouterModule, Routes} from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { ProjectDetailsService} from '../pages/project-details/project-details.service';


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
    providers:[ProjectDetailsService]

})

export class AppPagesModule{
    
}