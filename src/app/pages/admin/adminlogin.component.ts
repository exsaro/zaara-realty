import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminForm: FormGroup;
  validateFlag = false;
  validateMsg = '';

  constructor(private fb: FormBuilder, private adminservice: AdminService, private route: Router) { }

  adminLogin(loginData){
    let username = this.adminForm.get('adminLogin').value.toLowerCase();
    let password = this.adminForm.get('adminPass').value.toLowerCase();

    loginData = JSON.stringify({
      username: username,
      password: password
    });

    console.log(loginData);

    if( username === 'admin' && password === 'admin' ){
      this.adminservice.adminLogin(loginData).subscribe((res)=>{
          if(!!res['token']){
            localStorage.setItem('Authendication', res['token']);
            this.route.navigate(['/admin', 'addbuilder']);
          }
        },
        (err)=>console.log(err)
      )
    }else{
      this.validateFlag = true;
      this.validateMsg = 'Username and password incorrect';
    }
  }

  ngOnInit() {
    this.adminForm = this.fb.group({
      adminLogin: ['', [Validators.required]],
      adminPass: ['', [Validators.required]]
    })
  }

}

