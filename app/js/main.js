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

    $('.product__item-inner').slick({
        slidesToScroll: 1,
        arrows: true,

    });
    $('.slaider__followers-inner').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        arrows: true,

    });

    $('input[type="file"], select').styler();

    var mixer = mixitup(".release__products-inner");

});