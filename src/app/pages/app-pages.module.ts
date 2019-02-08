import  { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { ProjectDetailsComponent} from './project-details/project-details.component';
import  { RouterModule, Routes} from '@angular/router';

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
       // RouterModule.forChild(routes)
    ],
    exports: [
       
        RouterModule
    ],
    providers:[]

})

export class AppPagesModule{
    
}