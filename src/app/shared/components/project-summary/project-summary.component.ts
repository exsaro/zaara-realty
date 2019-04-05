import { Component,OnInit,Input, OnChanges} from '@angular/core';
import { Router} from '@angular/router';
import { ProjectSummaryService } from './project-summary.service';
import { Projects } from '../../models/projects.model';

@Component({
    selector: 'app-project-summary',
    templateUrl: 'project-summary.component.html',
    styleUrls: ['project-summary.component.css']
})

export class ProjectSummaryComponent implements OnInit, OnChanges{

    @Input('searchRequestParams') searchRequestParams;
    projectSummaryList: Array<Projects.ResponseModel>;

    constructor(private router:Router,
                private projectSummaryService:ProjectSummaryService){}

    defSerQuery: String = 'All';

    ngOnInit(){
      this.setProjectSummaryList(this.defSerQuery);
      
    }

    ngOnChanges(){
        
        if(this.searchRequestParams){
            const searchRequestParamsLen = this.searchRequestParams.split(',').length;
            let projSummaryRequestParams;
            if(searchRequestParamsLen===1){
                projSummaryRequestParams=`${this.searchRequestParams.split(',')[1]}`;
            }else if(searchRequestParamsLen===2){
                projSummaryRequestParams=`${this.searchRequestParams.split(',')[1]}/${this.searchRequestParams.split(",")[0]}`;
            }
           
          this.setProjectSummaryList(projSummaryRequestParams);
        }
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
