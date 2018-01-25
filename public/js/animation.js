$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    // $(".navLinks").localScroll();    

    // $("active").hover(function() {
    //     <p>This is where an app summary will go</p>
    // });

    function emptySummary() {
        $(projectOutline).empty();
    }

    function maritantSummary() {
        $(projectOutline).html("A React web app utilizing Node, express, MongoDB, and Bootstrap to build a B2B ecommerce-marketplace that allows professionals to locate industrial equipment data. Users – from individuals to large companies – can search for products to purchase or offer products of their own.");
    }

    function recipeSummary() {
        $(projectOutline).html("A recipe app built using an API and mySQL to take specific input from users then provide recipes filling the criteria the user specifies. Users input specific ingredients and criteria based on what type of food they want, how many calories, allergies, etc… and the API searches for recipes fitting the request then records them in MySQL.");
    }

    function schedulerSummary() {
        $(projectOutline).html("A train schedule tracker built using HTML, CSS, and Bootstrap for the front end, firebase as the database, and JQuery to complete the actions of entering a new train and displaying trains stored on firebase on the train switchboard.");
    }

    function collectorSummary() {
        $(projectInfo).html("An HTML and JQuery game where the user is presented with a random number and 4 crystals with unknown values. The object is to click on the crystals and match the random number; a quick, fun game.");
    }

    function reactPortfolioSummary() {
     $(projectOutline).html("A secondary portfolio website - not meant to be my main personal site - built in react.");
    }

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });

}

