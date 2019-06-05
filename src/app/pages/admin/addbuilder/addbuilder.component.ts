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

  constructor(private fb: FormBuilder, private adminservice: AdminService, private route: Router) { }

  addBuilder(formBuildData){
    const builderData = new FormData();
    builderData.append('buildername', this.addBuilderForm.get('builders_name').value);
    builderData.append('builderlocation', this.addBuilderForm.get('builders_location').value);
    builderData.append('builderarea', this.addBuilderForm.get('builders_area').value);
    builderData.append('totalproject', this.addBuilderForm.get('totalprojects').value);
    builderData.append('ongoing', this.addBuilderForm.get('ongoing').value);
    builderData.append('status', this.addBuilderForm.get('status').value);
    builderData.append('builderspec', this.addBuilderForm.get('builders_spec').value);
    builderData.append('buildername', this.addBuilderForm.get('builders_name').value);
    builderData.append('logo', this.addBuilderForm.get('builders_logo').value);

    console.log(builderData);

    this.adminservice.addBuilderData(builderData).subscribe(
      (res) => console.log(res),
      (err) => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.route.navigate(['/admin']);
          }
        }
      }
    );

    formBuildData.reset();
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
