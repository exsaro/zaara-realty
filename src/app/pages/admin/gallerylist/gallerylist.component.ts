import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.css']
})
export class GallerylistComponent implements OnInit {
  constructor(private adminservice: AdminService, private actRoute: ActivatedRoute,
    private router: Router) { }
  galarylist: any;

  projid: any;
  ngOnInit() {
    this.actRoute.params.subscribe((project) => {
      this.projid = project.id;
      this.listgalleries(this.projid);
    });
  }
listgalleries(projid) {
//    this.loading = true;
    this.adminservice.listgallery(projid).subscribe((res) => {
      console.log(res);
      this.galarylist = res.response;
      console.log(this.galarylist);
    //  this.loading = false;
    } );
}
remove(galleryID) {
  this.adminservice.deletegallery(galleryID).subscribe((res) => {
    console.log(res);
  //  this.loading = false;
  } );
  console.log(galleryID);
}

onFileSelect(event) {
  const galleryadd = new FormData();
   if (event.target.files.length > 0) {
    const files = event.target.files;
    if (files.length > 0) {
      for (const file of files) {
        galleryadd.append('gimage', file);
    }
    this.adminservice.addgallery(this.projid, galleryadd).subscribe((res) => {
      console.log(res);
    //  this.loading = false;
    },
    (error) => {
    console.log(error);
    });
    }
    // this.addBuilderForm.get('builders_logo').setValue(file);
  }
}
}
