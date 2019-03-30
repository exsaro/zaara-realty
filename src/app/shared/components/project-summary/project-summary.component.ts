import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProjectSummaryService } from './project-summary.service';
import { Projects } from '../../models/projects.model';

@Component({
    selector: 'app-project-summary',
    templateUrl: 'project-summary.component.html',
    styleUrls: ['project-summary.component.css']
})

export class ProjectSummaryComponent implements OnInit{

    projectSummaryList: Array<Projects.ResponseModel>;

    constructor(private router:Router,
                private projectSummaryService:ProjectSummaryService){}

    defSerQuery: String = 'All';

    ngOnInit(){
      this.setProjectSummaryList(this.defSerQuery);
    }

    public setProjectSummaryList(defSerQuery) {
        this.projectSummaryService.getProjectSummaryList(defSerQuery).subscribe((apiData: Array<Projects.ResponseModel>) => {
            if (apiData && apiData.length) {
                this.projectSummaryList = [...apiData];
                console.log(this.projectSummaryList);
            };
        },
        error=> {
            console.log(error);
        });
    }

    public showProjectDetails(projectId):void{
        // this.projectSummaryService.projectDetails = this.projectSummaryList[projectId];
        sessionStorage.setItem('projectDetails', JSON.stringify(this.projectSummaryList[projectId]));
        this.router.navigate(['project-details']);
    }
}
