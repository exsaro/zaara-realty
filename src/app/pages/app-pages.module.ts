import  { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { ProjectSummaryComponent } from '../shared/components/project-summary/project-summary.component';
import { ProjectDetailsComponent} from './project-details/project-details.component';
import  { RouterModule, Routes} from '@angular/router';

/*const routes:Routes = [ {
    path : '',
    component: HomeComponent
  }];*/

@NgModule({
    declarations : [
        HomeComponent,
        ProjectSummaryComponent,
        ProjectDetailsComponent
    ],
    imports :[
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