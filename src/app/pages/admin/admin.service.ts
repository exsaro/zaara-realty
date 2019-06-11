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
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };
    return this.httpservice.post(Urls.ADMIN_LOGIN, loginData);
  }

  addBuilderData(formData){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'multipart/form-data'
    //   })
    // };
    return this.httpservice.post(Urls.ADMIN_ADD_BUILDER, formData);
  }

  listBuilderData(){
    return this.httpservice.get(Urls.ADMIN_LIST_BUILDER);
  }
  editBuilderData(builderId){
    return this.httpservice.get(Urls.ADMIN_EDIT_BUILDER+'/'+builderId);
  }
  deleteBuilder(builderId){
    return this.httpservice.delete(Urls.ADMIN_DELETE_BUILDER+'/'+builderId);
  }


  loggedIn(){
    return !!localStorage.getItem('Authendication');
  }



}
