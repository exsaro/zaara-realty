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

  // post method
  public post(url, query, header):Observable<any>{
    const headers = new HttpHeaders().set("Content-Type", "application/json") ;
    let leadData = JSON.stringify(query);
    return this.http.post<any>(url, leadData,{headers});
}

}
