import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MainSearchService } from './main-search.service';
declare let $: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

    searchResults: any[] = [];
    dispFlag = false;

    constructor(private router: Router, private searchservice: MainSearchService) {}

    displaySuggest(query: String) {
      if(query.length > 3){
        this.searchservice.search(query).subscribe(res=>{
          this.searchResults = res;
          console.log(this.searchResults['Location']);
        });
        if(this.searchResults['Location']['response'].length===0){
          this.dispFlag = true;
        }
      }
    }
    // hideSuggest() {
    //   this.dispFlag = false;
    // }

    ngOnInit() {

    }
}
