import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

// mobileMenu is a new instance of the MobileMenu class
var mobileMenu = new MobileMenu();

// revealOnScroll is a new instance of the RevealOnScroll class
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();