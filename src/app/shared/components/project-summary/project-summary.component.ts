import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
    selector:'app-project-summary',
    templateUrl:'project-summary.component.html',
    styleUrls:['project-summary.component.css']
})

export class ProjectSummaryComponent implements OnInit{
    constructor(private router:Router){}

    ngOnInit(){

    }

    public showProjectDetails():void{
        this.router.navigate(['project-details']);
    }
}