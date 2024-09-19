$(document).ready(function(){

    $('.section').first().addClass('active');

    $('.nav-link').click(function(event){
        event.preventDefault();

        $('.nav-link').removeClass('active');
        $('.section').removeClass('active');

        $(this).addClass('active');
        let sectionShow = $(this).attr('href');
        $(sectionShow).addClass('active')
    });

    let openToggle = $('#open-toggle');
    let closeToggle = $('#close-toggle');
    let menu = $('#navbar-toggle');

    openToggle.addClass('visible');
    closeToggle.removeClass('visible');
    menu.removeClass('visible'); 

    $('#nav-toggle').on('click', function() {
        if (menu.hasClass('visible')) {
            menu.removeClass('visible');
            openToggle.addClass('visible');
            closeToggle.removeClass('visible');
        } else {
            menu.addClass('visible');
            openToggle.removeClass('visible');
            closeToggle.addClass('visible');
        }
    });

    $(".btn-config").click(function(){
        $(".btn-config").toggleClass("action");
    });

    let configMenu = $('#config-menu');
    configMenu.removeClass('visible');
    $('.config').on('click', function(){
        if(configMenu.hasClass('visible')){
            configMenu.removeClass('visible');
        }else{
            configMenu.addClass('visible');
        }
    });

    

});