$(document).ready(function () {
        /* Якорь */
        $(".button-on").click(function (f) {
            f.preventDefault();
            var a = $(this).attr("href"),
                b = $(a).offset().top;
            $("body,html").animate({
                scrollTop: b
            }, 500);
    
        });
    /*Видео-отзывы*/
    $(".video-wrapper-rev").click(function () {
        $(".video-wrapper-rev iframe").each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв"><div class="yt-button"></div>');
        })
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
    /*Конец документа*/
});