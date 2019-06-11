import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-builderlist',
  templateUrl: './builderlist.component.html',
  styleUrls: ['./builderlist.component.css']
})
export class BuilderlistComponent implements OnInit {

  constructor(private adminservice: AdminService, private fb: FormBuilder) { }

  builderList:any = [];
  editBuilderForm: FormGroup;
  editBuilderData: any = [];
  deleteBuilderId:Number;

  showBuilderList(){
    this.adminservice.listBuilderData().subscribe((res)=>{
      this.builderList = res;
      console.log(this.builderList);
    })
  }

  editBuilder(builderId, event){
    event.preventDefault();
    this.adminservice.editBuilderData(builderId).subscribe((res)=>{
      this.editBuilderData = res[0];
      console.log(this.editBuilderData);
    })
    this.formValidation();
  }
  deleteBuilder(builderId){
    this.deleteBuilderId = builderId;
  }
  deleteBuilderConfirm(){
    this.adminservice.deleteBuilder(this.deleteBuilderId).subscribe((res)=>{
      console.log(res);
    })
  }

  formValidation(){
    this.editBuilderForm = this.fb.group({
      builders_name: [this.editBuilderData.builders_name, [Validators.required]],
      builders_location: [this.editBuilderData.builders_location, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      builders_area: [this.editBuilderData.builders_area, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      totalprojects: [this.editBuilderData.totalprojects, [Validators.required, Validators.pattern('^[0-9]*$')]],
      ongoing: [this.editBuilderData.ongoing, [Validators.required, Validators.pattern('^[0-9]*$')]],
      status: [this.editBuilderData.status, [Validators.required]],
      builders_spec: [this.editBuilderData.builders_spec, [Validators.required]],
      builders_logo: [this.editBuilderData.logo]
    });
  }



  ngOnInit() {
    this.showBuilderList();
    this.formValidation();
  }



}
