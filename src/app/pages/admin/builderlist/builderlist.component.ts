import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-builderlist',
  templateUrl: './builderlist.component.html',
  styleUrls: ['./builderlist.component.css']
})
export class BuilderlistComponent implements OnInit {

  constructor(private adminservice: AdminService, private fb: FormBuilder, private router: Router) { }

  builderList: any = [];
  editBuilderForm: FormGroup;
  editBuilderData: any = [];
  deleteBuilderId: Number;
  public succMsgFlag = false;
  succMsg = '';
  loading = false;
  editBuilderFormData = new FormData();
  builder_Status: any = [ 'Active' , 'DeActive' ];

  showBuilderList() {
    this.loading = true;
    this.adminservice.listBuilderData().subscribe((res) => {
      this.builderList = res;
      console.log(this.builderList);
      this.loading = false;
    } );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
         this.editBuilderFormData.set('logo', file, file.name);
      // this.addBuilderForm.get('builders_logo').setValue(file);
    }
  }

  editBuilderConfirm() {

    this.editBuilderFormData.set('builders_name', this.editBuilderForm.value['builders_name']);
    this.editBuilderFormData.set('builders_location', this.editBuilderForm.value['builders_location']);
    this.editBuilderFormData.set('builders_area', this.editBuilderForm.value['builders_area']);
    this.editBuilderFormData.set('totalprojects', this.editBuilderForm.value['totalprojects']);
    this.editBuilderFormData.set('ongoing', this.editBuilderForm.value['ongoing']);
    this.editBuilderFormData.set('status', this.editBuilderForm.value['status']);
    this.editBuilderFormData.set('builders_spec', this.editBuilderForm.value['builders_spec']);

    this.adminservice.editBuilderData(this.deleteBuilderId).subscribe((res) => {
      console.log(res);
    });



  }

  editBuilder(builderId) {
    this.deleteBuilderId = builderId;
    this.adminservice.editBuilderData(builderId).subscribe((res) => {
      this.editBuilderData = res[0];
      console.log(this.editBuilderData);
      this.formValidation();
    });
    // this.formValidation();
  }
  deleteBuilder(builderId) {
    this.deleteBuilderId = builderId;
  }
  deleteBuilderConfirm() {
    this.adminservice.deleteBuilder(this.deleteBuilderId).subscribe((res) => {
        this.showBuilderList();
        this.succMsgFlag = true;
        if (res.code === 'Success') {
          this.succMsg = 'Record added successfully.';
        } else if (res.code === 'Failed') {
          this.succMsg = 'Something went wrong, please try after some time.';
        }
        setTimeout(function() { this.succMsgFlag = false; }.bind(this), 4000);
    });
  }

  formValidation() {
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


  public projectList(builderId, event): void {
    event.preventDefault();
    this.router.navigate(['admin/projectlist', builderId]);
 }


  ngOnInit() {
    this.showBuilderList();
    this.formValidation();
  }



}
