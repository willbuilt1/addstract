import StickyHeader from './modules/StickyHeader';
import $ from'jquery';
import RevealOnScroll from './modules/RevealOnScroll'

var stickyHeader = new StickyHeader();
new RevealOnScroll($('.header__right'), '85%');
new RevealOnScroll($('.features__right'), '80%');
new RevealOnScroll($('.mockups__left'), '80%');
new RevealOnScroll($('.goodies__right'), '80%');