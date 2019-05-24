import { Injectable } from '@angular/core';
import { HttpService} from '../../shared/services/http.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Urls } from '../../shared/models/url.model';

@Injectable()
export class ProjectDetailsService {
     constructor(private httpService: HttpService) {}

     headerDict = {
      'Content-Type': 'application/json'
    };

    requestOptions = {
      headers: new Headers(this.headerDict),
    };

    public getProjectDetails(query: String): Observable<any> {
          return this.httpService.get(Urls.PROJECT_URL+query);
    }

    public postProjectLeads(query) {
      return this.httpService.post(Urls.LEAD_URL, query, this.requestOptions);
    }
}
