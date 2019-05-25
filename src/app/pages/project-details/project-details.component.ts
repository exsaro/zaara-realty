import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projects} from '../../shared/models/projects.model';
import { ActivatedRoute } from "@angular/router";
import {ProjectDetailsService} from './project-details.service'

declare let $: any;


@Component({
    selector:'app-view',
    templateUrl:'project-details.component.html',
    styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit{

  leadForm: FormGroup;

  loading = false;
  latLang = [];
  lat: number;
  lang: number;
  selectedImg: number;
  //mapUrl = "https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&amp;key=AIzaSyBlVqyB--wrkGpks1i74mHuZLpGu1pwVq8"
    public projectDetails:Projects.ResponseModel;
    constructor(private route:ActivatedRoute,
                private projectDetailsService:ProjectDetailsService,
                private fb: FormBuilder
    ){ }

    showPop(index) {
      this.selectedImg = index;
    }

    leads(form){
      let leadData = JSON.stringify(form.value);
      console.log(leadData);


      this.projectDetailsService.postProjectLeads(form.value).subscribe( (res)=>{
        console.log(res);
      });

    }
    // `${window.location.href}`

    ngOnInit(){

      this.leadForm = this.fb.group({
        Last_Name: ['', [Validators.required]],
        Email: ['', [Validators.required, Validators.email]],
        Phone: ['', [Validators.required]],
        Referrer: ['www.zaararealty.in/chennai/mahindra Happinest']
      });

      $('.carousel').carousel();

      $('#galleryModel').on('hidden.bs.modal', function (e) {
        $('.carousel-item').removeClass('active');
      })

        this.route.params.subscribe((projectDetailsRoutingData)=>{
            this.setProjectDetails(projectDetailsRoutingData);
        });

        window.scrollTo(0, 0);

     }

     public setProjectDetails(projectDetailsRoutingData):void{
      this.loading = true;
         const projectDetailsRequestParams = `${projectDetailsRoutingData.location}/${projectDetailsRoutingData.project}`;
         this.projectDetailsService.getProjectDetails(projectDetailsRequestParams).subscribe((apiData)=>{
          this.loading = false;
          this.latLang = apiData[0].lang_lat.split(',');
          this.lat = this.latLang[0];
          this.lang = this.latLang[1];
          // tslint:disable-next-line:max-line-length
          //this.mapUrl = `https://www.google.com/maps/embed/v1/place?q=${this.lat},${this.lang}&amp;key=AIzaSyBlVqyB--wrkGpks1i74mHuZLpGu1pwVq8`
          console.log(this.latLang[0]);
            if(apiData && apiData.length){
                this.projectDetails = apiData[0];
            }
         },
        error => {
            console.log(error);
        });

     }
}
