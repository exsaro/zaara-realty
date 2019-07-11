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
    return this.httpservice.get(`${Urls.ADMIN_EDIT_BUILDER}/${builderId}`);
  }
  deleteBuilder(builderId){
    return this.httpservice.get(`${Urls.ADMIN_DELETE_BUILDER}/${builderId}`);
  }
  listProjectData(builderId){
    return this.httpservice.get(`${Urls.ADMIN_LIST_PROJECT}/${builderId}`);
  }
  addProjectData(projData){
    return this.httpservice.post(`${Urls.ADMIN_ADD_PROJECT}`, projData);
  }
  editProjectData(projId){
    return this.httpservice.get(`${Urls.ADMIN_EDIT_PROJECT}/${projId}`);
  }
  deleteproject(projId){
    return this.httpservice.get(`${Urls.ADMIN_DELETE_PROJECT}/${projId}`);
  }
  addamenities(projId, amenData){
    return this.httpservice.post(`${Urls.ADMIN_ADD_AMENITIES}/${projId}`, amenData);
  }
  listamenities(projId){
    return this.httpservice.get(`${Urls.ADMIN_LIST_AMENITIES}/${projId}`);
  }
  deleteamenities(amenId){
    return this.httpservice.get(`${Urls.ADMIN_DELETE_AMENITIES}/${amenId}`);
  }
  addpricing(projId, priceData){
    return this.httpservice.post(`${Urls.ADMIN_ADD_PRICING}/${projId}`, priceData);
  }
  listpricing(projId){
    return this.httpservice.get(`${Urls.ADMIN_LIST_PRICING}/${projId}`);
  }
  deletepricing(priceId){
    return this.httpservice.get(`${Urls.ADMIN_DELETE_PRICING}/${priceId}`);
  }
  addgallery(priceId){
    return this.httpservice.post(`${Urls.ADMIN_ADD_GALLERY}`, priceId);
  }

  loggedIn(){
    return !!localStorage.getItem('Authendication');
  }



}
