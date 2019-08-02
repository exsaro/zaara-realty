import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.css']
})
export class GallerylistComponent implements OnInit {

  constructor(private adminservice: AdminService) { }
  galarylist: any;
  ngOnInit() {
  }
listgalleries() {
//    this.loading = true;
    this.adminservice.listBuilderData().subscribe((res) => {
      this.galarylist = res;
      console.log(this.galarylist);
    //  this.loading = false;
    } );
}
deletegalleries() {
}
}
