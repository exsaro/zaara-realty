import { Injectable } from "@angular/core";
import { HttpClient,HttpResponse,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService {
    constructor(private http:HttpClient){

    }

  // get method
  public get(url):Observable<any>{
      return this.http.get<any>(url);
  }

  // post method1
  public post(url, query, header?){

      return this.http.post<any>(url, query, header);
  }



}
