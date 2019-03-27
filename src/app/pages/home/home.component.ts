import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    dispFlag = false;
    constructor(private router: Router) {}

    displaySuggest() {
      this.dispFlag = true;
    }
    hideSuggest() {
      this.dispFlag = false;
    }

    ngOnInit() {

    }
}
