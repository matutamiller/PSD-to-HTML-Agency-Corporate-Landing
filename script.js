;'use strict';
// Menu
(function () {
    document.getElementById('menu_button').onclick = function () {
        if (this.className != 'active'){
            this.className = 'active';
            document.getElementsByTagName('nav')[0].className = 'active';
        } else {
            this.className = '';
            document.getElementsByTagName('nav')[0].className = '';
        }
    }
})();

// Sticky header
(function() {
    var header = document.querySelector('header');

    var body = document.body;
    var headerPaddingTop = getComputedStyle(header).paddingTop.slice(0,-2) - 0;

    var headerSticky = function() {
        var offsetTop = Math.abs(body.getBoundingClientRect().top - getComputedStyle(body).marginTop.slice(0,-2));

        if (headerPaddingTop - 16 - offsetTop <= 0) {
            header.className = "sticky";
        } else {
            header.className = '';
        }
    };
    window.addEventListener('scroll',headerSticky,true);
})();