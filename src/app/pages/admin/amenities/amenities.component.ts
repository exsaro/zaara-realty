import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css', '../admin.component.css']
})
export class AmenitiesComponent implements OnInit {

  constructor(private adminservice: AdminService,
    private actrouter: ActivatedRoute,
    private route: Router) { }

  amenities = [];
  ProjId;
  ProjName;
  BuildId;
  BuildName;
  loading = false;
  amanId: number;
  public succMsgFlag = false;
  succMsg = '';


  addAmenitiesPage(projId, projName, event){
    event.preventDefault();
    this.route.navigate(['/admin/addamenities', projId, projName]);
  }

  getamenList(projId){
    this.loading = true;
    this.adminservice.listamenities(projId).subscribe((res)=>{
      this.amenities = res.response;
      this.loading = false;
      console.log(res.response);
    });
  }

  deleteAmenities(amenId){
    this.amanId = amenId;
    console.log(this.amanId);
  }

  deleteAmenitiesConfirm(){
    this.adminservice.deleteamenities(this.amanId).subscribe((res)=>{
      this.getamenList(this.ProjId);
      this.succMsgFlag = true;
      if(res.code === 'Success'){
        this.succMsg = 'Record deleted successfully.';
      }else if(res.code === 'Failed'){
        this.succMsg = 'Something went wrong, please try after some time.';
      }
      setTimeout(function(){ this.succMsgFlag = false; }.bind(this), 4000);
    });
  }

  ngOnInit() {

    this.actrouter.params.subscribe((projId)=> {
      this.ProjId = projId.id;
      this.ProjName = projId.name;
      this.getamenList(this.ProjId);
      console.log(this.ProjId);
    });


    this.BuildId = localStorage.getItem('BuilderId');
    this.BuildName = localStorage.getItem('BuilderName');





  }



}
