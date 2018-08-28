import $ from 'jquery';

class MobileMenu {
    constructor(){
        this.button = $('.header__button');
        this.menuContent = $('.header__nav');
        this.events();
    }

    events() {
        this.button.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('header__nav--open');
        this.button.toggleClass('header__button--open')
    }

}

export default MobileMenu;