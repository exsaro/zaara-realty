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

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
         this.builderData.append('logo', file);
      // this.addBuilderForm.get('builders_logo').setValue(file);
    }
  }

  addBuilder(){

    this.builderData.append('buildername', this.addBuilderForm.value["builders_name"]);
    this.builderData.append('builderlocation', this.addBuilderForm.value["builders_location"]);
    this.builderData.append('builderarea', this.addBuilderForm.value["builders_area"]);
    this.builderData.append('totalproject', this.addBuilderForm.value["totalprojects"]);
    this.builderData.append('ongoing', this.addBuilderForm.value["ongoing"]);
    this.builderData.append('status', this.addBuilderForm.value["status"]);
    this.builderData.append('builderspec', this.addBuilderForm.value["builders_spec"]);




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
