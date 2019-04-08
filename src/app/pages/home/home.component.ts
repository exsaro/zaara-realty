import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { MainSearchService } from './main-search.service';
import { Projects} from '../../shared/models/projects.model';

declare let $: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

  public searchResults: string[] = [];
  public searchAllResults: Projects.SearchModel;
  public searchRequestParams;

  @ViewChild('mainSearch') mainSearch:ElementRef;
  showSuggest = false;
  disBtn = false;

  constructor(private router: Router, private searchservice: MainSearchService) {}

  public displaySuggest(query: string) {
      let searchList: string[] = [];
      if (query.length > 3) {
        this.searchservice.search(query).subscribe((apiData: Projects.SearchModel) => {
          if (apiData && Object.keys(apiData).length) {
            this.searchAllResults = apiData;
              if (apiData.Builders.response.length) {
                this.searchAllResults.Builders.response = apiData.Builders.response;
              }

              if (apiData.Location.response.length) {
                this.searchAllResults.Location.response = apiData.Location.response;
              }

              if (apiData.Projects.response.length) {
                this.searchAllResults.Projects.response = apiData.Projects.response;
              }
              this.searchResults = searchList.concat(this.searchAllResults.Builders.response,
                                        this.searchAllResults.Location.response,
                                        this.searchAllResults.Projects.response
                                      );
           }
           this.showSuggest = true;
           this.disBtn = true;
        },
        (error) => {
          console.log(error);
        });
      } else {
        this.searchResults = [];
        this.showSuggest = false;
        this.disBtn = false;
     }
    }

    getData(value) {
      this.mainSearch.nativeElement.value = value;
      this.showSuggest = false;
    }

    public navigateToProjectDetails(): void {
      this.router.navigate(['/project-details']);
    }

    public showProjects(e: any, projects: string) {
        e.returnValue = false;
        this.searchResults = [];
        this.searchRequestParams = projects;
        window.scrollTo(0, 1300);
        this.mainSearch.nativeElement.value = '';
        this.disBtn = false;
    }


  ngOnInit() {}

}
