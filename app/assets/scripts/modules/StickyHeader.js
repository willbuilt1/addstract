import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor(){
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.header');
        this.headerTriggerElement = $('.hero__headline');
        this.createHeaderWaypoint();
        this.pageSections = $(".section");
        this.headerLinks = $(".header__nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints(){
        this.lazyImages.on('load', ()=>{
            Waypoint.refreshAll();
        })
    }
    
    addSmoothScrolling(){
        this.headerLinks.smoothScroll({speed: 500});
    }

    createHeaderWaypoint() {
        //Not needed as arrow function does not alter create new scope
        //var that = this;

        new Waypoint({
            //waypoint expects native JS DOM ELEMENT not jquery. therefore return first element [0]
            element: this.headerTriggerElement[0],
            handler: direction => {
                if(direction == 'down'){
                    this.siteHeader.addClass('header--dark');
                } else {
                    this.siteHeader.removeClass('header--dark');
                }
            }
        });
    }

    createPageSectionWaypoints() {
        this.pageSections.each(el => {
            new Waypoint({
                element: this.pageSections[el],
                handler: direction => {
                    if(direction == 'down'){
                        let matchingHeaderLink = this.pageSections[el].getAttribute("data-matching-link");
                        this.headerLinks.removeClass("current-link");
                        $(matchingHeaderLink).addClass("current-link");
                    }
                },
                offset: "40%"
            });

            new Waypoint({
                element: this.pageSections[el],
                handler: direction => {
                    if(direction == 'up'){
                        let matchingHeaderLink = this.pageSections[el].getAttribute("data-matching-link");
                        this.headerLinks.removeClass("current-link");
                        $(matchingHeaderLink).addClass("current-link");
                    }
                },
                offset: "-40%"
            });

        })
    }
}

export default StickyHeader