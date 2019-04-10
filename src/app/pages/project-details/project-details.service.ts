import { Injectable } from '@angular/core';
import { HttpService} from '../../shared/services/http.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Urls } from '../../shared/models/url.model';

@Injectable()
export class ProjectDetailsService {
     constructor(private httpService: HttpService) {}

    public getProjectDetails(query: String): Observable<any> {
          return this.httpService.get(Urls.PROJECT_URL+query);
    }
}
