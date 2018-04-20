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


//Slider
(function () {

    var elem = document.createElement('li');
    elem.innerHTML = '';
    var sliders = [];
    [].forEach.call(document.getElementsByClassName('slider'),function (item) {
        sliders.push(item);
    });
    sliders.forEach(function (item) {
        var count = item.getElementsByClassName('sliderItems')[0].getElementsByTagName('li').length;
        for(var i = 1; i <= count; i++){
            var newElem = elem.cloneNode(true);
            newElem.setAttribute('index', i + '');
            newElem.onclick = function () {
                var index = this.getAttribute('index');
                document.querySelector('.sliderItems .active').removeAttribute('class');
                document.querySelector('.sliderItems li:nth-child('+index+')').className = 'active';
                document.querySelector('.sliderNav .active').removeAttribute('class');
                this.className = 'active';
            };
            item.getElementsByClassName('sliderNav')[0].appendChild(newElem);
        }
        document.querySelector('.sliderNav li').className = 'active';

    })
})();

 //Pop ups on click
(function () {
    //adding function for opening pop ups
    var elems = [];
    [].forEach.call(document.getElementsByClassName('show_popup'), function (item) {
        elems.push(item);
    });
    elems.forEach(function (item) {
        item.addEventListener('click',function (event) {
            event.preventDefault('click');
            this.parentNode.nextElementSibling.classList.add('active');
        });
    });
    elems = [];

   //adding function for closing pop ups
    [].forEach.call(document.getElementsByClassName('close_popup'), function (item) {
        elems.push(item);
    });
    elems.forEach(function (item) {
        item.addEventListener('click',function (event) {
            event.preventDefault('click');
            this.parentNode.classList.remove('active');
        });
    });
})();