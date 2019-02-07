import  { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent} from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({

    declarations : [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports :[],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers:[]

})

export class SharedModule{
    
}