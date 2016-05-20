(function() {
    var app = {
        init: function() {
            $('.sidebar-menu-icon').on('click', function(e) {
                e.preventDefault();
                $('.content').toggleClass('open-sidebar');
                $('.triangle-left').toggleClass('hidden');
            });
            if ($(window).width() < 769) {
                $('.right-nav').addClass('hidden');
                $('.vertical-menu').removeClass('hidden');
            }
            if ($('.box-medium').height() > 600 && $('.box-medium').width() < 480) {
                $('.box-inner-right').css('padding-top', 0);
            } else {
                $('.box-inner-right').css('padding-top', '80px');
            }
            $(window).resize(function() {
                if (($('section.content header').width() < 662) || ($(window).width() < 769)) {
                    $('.right-nav').addClass('hidden');
                    $('.vertical-menu').removeClass('hidden');
                } else {
                    $('.right-nav').removeClass('hidden');
                    $('.vertical-menu').addClass('hidden');
                }
                if ($('.box-medium').height() > 600 && $('.box-medium').width() < 480) {
                    $('.box-inner-right').css('padding-top', 0);
                } else {
                    $('.box-inner-right').css('padding-top', '80px');
                }
            });
            $('a.vertical-menu').on('click', function(e) {
                console.log('click');
                e.preventDefault();
                $('.content .right-nav').toggleClass('hidden');
                $('.content .right-nav').css('display', 'block');
                $('.content .right-nav li').addClass('testing');
            });
        }
    }
    app.init();
}());