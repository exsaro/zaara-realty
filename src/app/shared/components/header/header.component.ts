import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MainSearchService } from '../../../pages/home/main-search.service';
import { Projects} from '../../../shared/models/projects.model';

declare let $:any;

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})

export class HeaderComponent implements OnInit {
  public searchResults: string[] = [];
  public searchAllResults: Projects.SearchModel;
  public searchRequestParams;
  public succMsgFlag = false;
  succMsg = '';
  progressFlag = false;
  @ViewChild('mainSearch') mainSearch:ElementRef;
  showSuggest = true;
  disBtn = false;
  loading = false;
  selected = false;
  clients = [];
  quickSearchs = ['Chennai', 'Coonoor', 'Trichy']

    constructor(private searchservice: MainSearchService){

    }

    public displaySuggest(query: string) {
      this.loading = true;
      this.selected = false;
      let searchList: string[] = [];
      //let searchKeys: string[] = [];
      if (query.length > 3) {
        this.searchservice.search(query).subscribe((apiData: Projects.SearchModel) => {
          //searchKeys = Object.keys(apiData);
          this.loading = false;
          //console.log(apiData);
          if (apiData && Object.keys(apiData).length) {
            this.searchAllResults = apiData;
              // if (apiData.Builders.response.length) {
              //   this.searchAllResults.Builders.response = apiData.Builders.response;
              // }

              if (apiData.Location.response.length) {
                this.searchAllResults.Location.type = 'Location';
                this.searchAllResults.Location.response = apiData.Location.response;
                console.log(this.searchAllResults.Location.response)
              }

              if (apiData.Projects.response.length) {
                this.searchAllResults.Projects.type = 'Projects';
                this.searchAllResults.Projects.response = apiData.Projects.response;
                console.log(this.searchAllResults.Projects.response)
              }
              // this.searchAllResults.Builders.response,
              this.searchResults = searchList.concat(this.searchAllResults.Location.response,
                                        this.searchAllResults.Projects.response
                                      );
           }
           if (this.selected === true){
            this.searchResults = [];
            this.showSuggest = true;
            this.disBtn = false;
           }else{
            this.showSuggest = false;
            this.disBtn = true;
           }

        },
        (error) => {
          console.log(error);
        });
      } else {
        this.searchResults = [];
        this.showSuggest = true;
        this.disBtn = false;
     }
    }

    showProjects(e: any, projects: string) {

      e.returnValue = false;
      this.selected = true
      this.searchResults = [];
      this.searchRequestParams = projects;
      this.disBtn = false;
      this.showSuggest = true;
      this.mainSearch.nativeElement.value = '';

      window.scrollTo(0, 1300);

    }

    getData(e: any, value) {
      e.returnValue = false;
      this.mainSearch.nativeElement.value = value;
      this.selected = true
      this.showSuggest = true;
    }

    ngOnInit(){
        this.hamburgerMobileMenu();
    }


    private hamburgerMobileMenu():void{
        //Hamburger Menu for Mobile
        var mobMenu = (function(){
            var navSelector = $(".nav");
            return {
                showMenu: function(){
                    navSelector.animate({right: '0'});
                },
                hideMenu: function(){
                    navSelector.animate({right: '-220px'});
                }
            };
        })();
        $(".hamburger").on('click',mobMenu.showMenu);
        $(".mobileClose").on('click',mobMenu.hideMenu);

    }
}
