import {Component, OnInit} from '@angular/core';
import { Projects} from '../../shared/models/projects.model';
import { ActivatedRoute } from "@angular/router";
import {ProjectDetailsService} from './project-details.service'


@Component({
    selector:'app-view',
    templateUrl:'project-details.component.html',
    styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit{

  loading = false;
    public projectDetails:Projects.ResponseModel;
    constructor(private route:ActivatedRoute,
                private projectDetailsService:ProjectDetailsService
    ){


    }

    ngOnInit(){

        this.route.params.subscribe((projectDetailsRoutingData)=>{
            this.setProjectDetails(projectDetailsRoutingData);
        });

        window.scrollTo(0, 0);

     }

     public setProjectDetails(projectDetailsRoutingData):void{
      this.loading = true;
         const projectDetailsRequestParams = `${projectDetailsRoutingData.location}/${projectDetailsRoutingData.project}`;
         this.projectDetailsService.getProjectDetails(projectDetailsRequestParams).subscribe((apiData)=>{
          this.loading = false;
            if(apiData && apiData.length){
                this.projectDetails = apiData[0];
            }
         },
        error => {
            console.log(error);
        });

     }
}
