import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
declare let $:any;

@Component({
    selector:'app-home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})

export class HomeComponent implements OnInit{
    constructor(private router:Router){}

    ngOnInit(){
        this.setClients();
        this.setParallaxEffectForContent();
    }


    private setClients():void{
        $(".owl-carousel").owlCarousel({
            items: 5,
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        $( ".owl-prev").html('<img src="assets/images/svg/arrow-left.svg" width="32" />');
        $( ".owl-next").html('<img src="assets/images/svg/arrow-right.svg" width="32" />');
    }


    private setParallaxEffectForContent():void{
       //Parallax Effect
        $(window).scroll(function(){
            $('.parallax').each(function(){
                if ($(this).offset().top < $(window).scrollTop()) {
                var difference = $(window).scrollTop() - $(this).offset().top;
                var half = (difference / 2) + 'px',
                transform = 'translate3d( 0, ' + half + ',0)';
                $(this).find('img').css('transform', transform);
            } else {
                $(this).find('img').css('transform', 'translate3d(0,0,0)');
            }
            });

        });
    }


    public showProjectDetails():void{
        this.router.navigate(['project-details']);
    }
}