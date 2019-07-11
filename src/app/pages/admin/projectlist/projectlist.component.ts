import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(private adminservice: AdminService,
    private actRoute:ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  listProjects = [];
  loading = false;
  BuildId;
  projId: number;
  public succMsgFlag = false;
  succMsg = '';
  editProjectForm;
  editProjectData = [];




  formValidation(){
    this.editProjectForm = this.fb.group({
      BID: this.BuildId,
      Project_name: [this.editProjectData['Project_name']],
      project_desc: [this.editProjectData['project_desc']],
      Possession_Date: [this.editProjectData['Possession_Date']],
      Launch_Date: [this.editProjectData['Launch_Date']],
      Project_location: [this.editProjectData['Project_location']],
      area: [this.editProjectData['area']],
      lang_lat: [this.editProjectData['lang_lat']],
      BHK: [this.editProjectData['BHK']],
      minbuilduparea: [this.editProjectData['minbuilduparea']],
      maxbuilduparea: [this.editProjectData['maxbuilduparea']],
      minprice: [this.editProjectData['minprice']],
      total_units: [this.editProjectData['total_units']],
      total_area: [this.editProjectData['total_area']],
      availability: [this.editProjectData['availability']],
      Approvals: [this.editProjectData['Approvals']],
    });
  }

  ngOnInit() {

    this.actRoute.params.subscribe((builderId)=> {
      this.BuildId = builderId;
      this.getProjectList(builderId);
    });

    this.formValidation();

  }

  editProject(projId){
    this.adminservice.editProjectData(projId).subscribe((res)=>{
      this.editProjectData = res[0];
      this.formValidation();
    });
  }

  deleteProject(projId){
    this.projId = projId;
    console.log(this.projId);
  }

  deleteProjectConfirm(){
    this.adminservice.deleteproject(this.projId).subscribe((res)=>{
      console.log(res);
      this.getProjectList(this.BuildId);
      this.succMsgFlag = true;
        if(res.code === 'Success'){
          this.succMsg = 'Record deleted successfully.';
        }else if(res.code === 'Failed'){
          this.succMsg = 'Something went wrong, please try after some time.';
        }
        setTimeout(function(){ this.succMsgFlag = false; }.bind(this), 4000);
    })
  }

  public getProjectList(builderId):void {
    this.loading = true;
    this.adminservice.listProjectData(builderId.id).subscribe((res)=>{
      this.listProjects = res;
      this.loading = false;
      console.log(res)
    });
  }

  public addProject(BuildId, event?):void{
    event.preventDefault();
    this.router.navigate(['admin/addproject',BuildId.id]);
    //console.log(BuildId);
 }

}
