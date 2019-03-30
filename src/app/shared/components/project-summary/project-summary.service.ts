import { Injectable } from '@angular/core';
import { HttpService} from '../../services/http.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Projects} from '../../models/projects.model';

@Injectable()
export class ProjectSummaryService {
    // public projectDetails:Projects.ResponseModel;
    constructor(private httpService: HttpService) {}

    BASE_URL = 'http://www.zaararealty.in/api/public/';
    BUILDER_URL = 'builder/';
    PROJECT_URL = 'projects/';
    SEARCH_URL = 'search/';
    LOCATION_URL = 'location/';
    query = '';


    // zaararealty.in/api/public/location/{All}
    // zaararealty.in/api/public/location/{chennai}
    // zaararealty.in/api/public/location/{chennai}/{Avadi}
    // zaararealty.in/api/public/builder/{chennai}/{avadi}/{Mahindra Lifespaces}
    // zaararealty.in/api/public/projects/{Chennai}/{MAHINDRA HAPPINEST}
    // zaararealty.in/api/public/search/{trichy}

    public getProjectSummaryList(query): Observable<Array<Projects.ResponseModel>> {
       const url = './assets/json/projects.json';
      //  const url = 'http://www.zaararealty.in/api/public/projects';
        return this.httpService.get(this.BASE_URL+this.LOCATION_URL+query);
    }
}
