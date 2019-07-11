import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private adminservice: AdminService,
    private actrouter: ActivatedRoute,
    private route: Router) { }

    ProjId;
    loading = false;
    pricing = [];
    priceId: number;
    public succMsgFlag = false;
    succMsg = '';

    addPricingPage(projId, event){
      event.preventDefault();
      this.route.navigate(['/admin/addpricing', projId]);
    }

    deletePricing(priceId){
      this.priceId = priceId;
      console.log(this.priceId);
    }

    deletePricingConfirm(){
      this.adminservice.deletepricing(this.priceId).subscribe((res)=>{
        this.getPricingList(this.ProjId);
        this.succMsgFlag = true;
        if(res.code === 'Success'){
          this.succMsg = 'Record deleted successfully.';
        }else if(res.code === 'Failed'){
          this.succMsg = 'Something went wrong, please try after some time.';
        }
        setTimeout(function(){ this.succMsgFlag = false; }.bind(this), 4000);
        console.log(res);
      });
    }

    getPricingList(projId){
      this.loading = true;
      this.adminservice.listpricing(projId).subscribe((res)=>{
        this.pricing = res.response;
        this.loading = false;
        console.log(res);

      });
    }

  ngOnInit() {
    this.actrouter.params.subscribe((projId)=> {
      this.ProjId = projId.id;
      this.getPricingList(this.ProjId);
      console.log(this.ProjId);
    });

  }

}
