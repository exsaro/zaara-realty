import {Component, OnInit} from '@angular/core';
import { Projects} from '../../shared/models/projects.model';


@Component({
    selector:'app-view',
    templateUrl:'project-details.component.html',
    styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit{
    public projectDetails:Projects.ResponseModel;
    constructor(){
    }

    ngOnInit(){
        this.setProjectDetails();
     }

     public setProjectDetails():void{
         if(sessionStorage.getItem('projectDetails')){
            this.projectDetails = JSON.parse(sessionStorage.getItem('projectDetails'));
         }
     }
}
