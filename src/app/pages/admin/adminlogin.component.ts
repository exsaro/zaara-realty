import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
      adminEmail: ['', Validators.required, Validators.email],
      adminPass: ['', Validators.required]
    })
  }

}

