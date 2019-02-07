import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import  { RouterModule, Routes} from '@angular/router';
import  { LayoutComponent} from './shared/layout/layout.component';
import { AppPagesModule} from './pages/app-pages.module';
import { HomeComponent } from './pages/home/home.component';
import { ViewComponent } from './pages/view/view.component';

const routes:Routes = [ {
  path : '',
  component: HomeComponent
},

{
  path : 'view',
  component: ViewComponent
}

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppPagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
