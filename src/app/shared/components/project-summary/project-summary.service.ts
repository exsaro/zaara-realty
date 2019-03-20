import { Injectable } from "@angular/core";
import { HttpService} from '../../services/http.service';
import { Observable } from "rxjs/Observable";
import { HttpClient,HttpResponse } from "@angular/common/http";
import { Projects} from '../../models/projects.model'

@Injectable()
export class ProjectSummaryService {
    // public projectDetails:Projects.ResponseModel;
    constructor(private httpService:HttpService){}

    public getProjectSummaryList():Observable<Array<Projects.ResponseModel>>{
       const url = '/assets/json/projects.json';
      //  const url = 'http://www.zaararealty.in/api/public/projects';
        return this.httpService.get(url);
    }
}