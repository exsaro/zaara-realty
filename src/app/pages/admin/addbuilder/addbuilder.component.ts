import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbuilder',
  templateUrl: './addbuilder.component.html',
  styleUrls: ['./addbuilder.component.css']
})
export class AddbuilderComponent implements OnInit {

  addBuilderForm: FormGroup;
  uploadfile:any;
  builderData = new FormData();
  constructor(private fb: FormBuilder, private adminservice: AdminService, private route: Router) {

   }

  onFileSelect(files: FileList) {
    if (files.length > 0) {
      //let file:any = ;
         this.builderData.set('logo', files.item(0),files.item(0).name);
      // this.addBuilderForm.get('builders_logo').setValue(file);
      console.log(files.item(0));
    }
  }

  addBuilder(){

    this.builderData.set('builders_name', this.addBuilderForm.value["builders_name"]);
    this.builderData.set('builders_location', this.addBuilderForm.value["builders_location"]);
    this.builderData.set('builders_area', this.addBuilderForm.value["builders_area"]);
    this.builderData.set('totalprojects', this.addBuilderForm.value["totalprojects"]);
    this.builderData.set('ongoing', this.addBuilderForm.value["ongoing"]);
    this.builderData.set('status', this.addBuilderForm.value["status"]);
    this.builderData.set('builders_spec', this.addBuilderForm.value["builders_spec"]);



console.log(this.builderData.getAll('logo'));
    this.adminservice.addBuilderData(this.builderData).subscribe(
      (res) => console.log(res),
      (err) => {
        if(err instanceof HttpErrorResponse){
          console.log(err);
          if(err.status === 401){
            this.route.navigate(['/admin']);
          }
        }
      }
    );

    //addBuilderForm.reset();
  }

  ngOnInit() {
    this.addBuilderForm = this.fb.group({
      builders_name: ['', [Validators.required]],
      builders_location: ['', [Validators.required]],
      builders_area: ['', [Validators.required]],
      totalprojects: ['', [Validators.required]],
      ongoing: ['', [Validators.required]],
      status: ['', [Validators.required]],
      builders_spec: ['', [Validators.required]],
      builders_logo: ['', [Validators.required]]
    })
  }

}
