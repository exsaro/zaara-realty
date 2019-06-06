import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient,HttpResponse,HttpHeaders} from "@angular/common/http";
import { Urls } from '../../shared/models/url.model';
import { HttpService } from '../../shared/services/http.service';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient, private httpservice: HttpService) {}



  adminLogin(loginData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpservice.post(Urls.ADMIN_LOGIN, loginData, httpOptions);
  }

  addBuilderData(formData){
    const httpOptions1 = {
      headers: new HttpHeaders({
             'Z-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTk3NTE2NTEsImV4cCI6MTU1OTc5NDg1MSwibmFtZSI6ImFkbWluIiwic3ViIjoiMTIzNDU2Nzg5MCJ9.fByr9jCq3-B9DArHgUxikiuay2tCDcr05jqPr0T7qzk'
      })
    };
    return this.httpservice.post(Urls.ADMIN_ADD_BUILDER, formData, httpOptions1);
  }

  loggedIn(){
    return !!localStorage.getItem('Authendication');
  }



}
