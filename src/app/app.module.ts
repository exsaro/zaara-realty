import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { LayoutComponent} from './shared/layout/layout.component';
import { AppPagesModule} from './pages/app-pages.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import {HttpClientXsrfModule} from '@angular/common/http';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AdminLoginComponent } from './pages/admin/adminlogin.component';
import { BuilderlistComponent } from './pages/admin/builderlist/builderlist.component';
import { AddbuilderComponent } from './pages/admin/addbuilder/addbuilder.component';
import { AddgalleryComponent } from './pages/admin/addgallery/addgallery.component';




const routes: Routes = [{
  path : '',
  component: HomeComponent
},
{
  path : 'project-details/:location/:project',
  component: ProjectDetailsComponent
},
{
  path : 'admin/addgallery',
  component : AddgalleryComponent
},
{
  path : 'admin/builderlist',
  component : BuilderlistComponent
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
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
     headerName: 'Z-Token',
    }),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
