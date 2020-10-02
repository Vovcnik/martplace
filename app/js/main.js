$(function() {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
        readOnly: true,
        spacing: "5px",
        ratedFill: "#ffc000"
    });
    $(".rate-stars").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true,
        spacing: "5px",
        ratedFill: "#ffc000"
    });
    $(".rate-starss").rateYo({
        rating: 4.5,
        starWidth: "18px",
        readOnly: true,
        spacing: "5px",
        ratedFill: "#ffc000"
    });

    $('.product__item-inner').slick({
        slidesToScroll: 1,
        arrows: true,

    });
    $('.slaider__followers-inner').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        arrows: true,

    });

    $(".js-range-slaider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('input[type="file"], select').styler();


    $('.icon-th-list').on('click', function() {
        $('.mix__items').addClass('list');
        $('.mix__item').removeClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th').removeClass('active');
    });
    $('.icon-th').on('click', function() {
        $('.mix__items').removeClass('list');
        $('.mix__item').addClass('list');
        $('.icon-th').addClass('active');
        $('.icon-th-list').removeClass('active');
    });


    var mixer = mixitup(".release__products-inner");
});