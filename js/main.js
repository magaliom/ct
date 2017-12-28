var scrollY = 0;
$(document).ready(function(e) {
        scrollY = $(window).scrollTop();

    $(window).scroll(function(e){
        scrollY = $(window).scrollTop();
        checkSectionScroll();
        console.log(scrollY);
    });

    $("#owl-example").owlCarousel({

        // Most important owl features
        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        autoPlay : true,
        stopOnHover : false,

        // Navigation
        navigation : true,
        navigationText : [
            "<span class='prev-btn'><i class='fa fa-chevron-left'></i></span>",
            "<span class='next-btn'><i class='fa fa-chevron-right'></i></span>",
        ],
        rewindNav : true,
        scrollPerPage : false,

        //Pagination
        pagination : false,
        paginationNumbers: false,

        // Responsive
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,

        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme",

        //Lazy load
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        //Auto height
        autoHeight : false,

        //JSON
        jsonPath : false,
        jsonSuccess : false,

        //Mouse Events
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        //Transitions
        transitionStyle : false,

        // Other
        addClassActive : false,

        //Callbacks
        beforeUpdate : false,
        afterUpdate : false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging : false,
        afterLazyLoad : false

    })
});

function checkSectionScroll() {
    var elements = $('.js-section');

    $('.main-nav a').removeClass('active');

    for(var i = 0; i < elements.length; i ++) {
        $element = $(elements[i]);

        from = $element.offset().top;
        to = from + $element.height();

        if (scrollY + 106 >= from && scrollY <= to + 106) {
            $("a[href='#" + $element.attr('id') +"']").addClass('active');
            return;
        }
    }
    var ofsset = $('#service').offset().top;

    //switch (scrollY) {
    //    case scrollY >
    //}
}