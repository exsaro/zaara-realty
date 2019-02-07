import  { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { ViewComponent} from './view/view.component';
import  { RouterModule, Routes} from '@angular/router';

/*const routes:Routes = [ {
    path : '',
    component: HomeComponent
  }];*/

@NgModule({

    declarations : [
        HomeComponent,
        ViewComponent
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