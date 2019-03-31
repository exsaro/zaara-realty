import { Injectable } from '@angular/core';
import { HttpService} from '../../shared/services/http.service';
import { Urls } from '../../shared/models/url.model';

@Injectable({
  providedIn: 'root'
})
export class MainSearchService {

  constructor(private httpService: HttpService) { }

  search(queryString: String) {
    return this.httpService.get(Urls.SEARCH_URL+queryString);
  }


}
