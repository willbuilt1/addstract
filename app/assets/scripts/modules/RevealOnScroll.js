import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset){
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitally();
        this.createWaypoints();
    }

    hideInitally() {
        this.itemsToReveal.addClass('reveal-item');
    }
    //ES6 method with arrow functions
    createWaypoints(){
        this.itemsToReveal.each(el => {
            new Waypoint({
                element: this.itemsToReveal[el],
                handler: () => {
                    $(this.itemsToReveal[el]).addClass('reveal-item--visible');
                },
                offset: this.offsetPercentage
            })
        })
    }
    //Previous method shown below
    /*
    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function() {
            let currentItem =this;
            new Waypoint({
                element: currentItem,
                handler: function(){
                    $(currentItem).addClass('reveal-item--visible');
                },
                offset: that.offsetPercentage
            })
        })
    }
    */
}

export default RevealOnScroll;