import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from '@angular/core/src/console';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.css']
})
export class GallerylistComponent implements OnInit {
  uploadForm: FormGroup;
  uploadfile: any;
  formData = new FormData();
  constructor(private adminservice: AdminService, private actRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { }
  galarylist: any;

  projid: any;
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      gimage: ['']
    });

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

   if (event.target.files.length > 0) {
    const files = event.target.files;

      for (const file of files) {
        this.formData.append('gimage[]', file, file.name);
    }

    // this.addBuilderForm.get('builders_logo').setValue(file);
  }
}
onSubmit() {
 console.log(this.formData.get('gimage'));
  this.adminservice.addgallery(this.projid, this.formData).subscribe((res) => {
    console.log(res);
  //  this.loading = false;
  },
  (error) => {
  console.log(error);
  });
}

}
