$(function () {

    $("button.ligaLed").click(function () {

        $("img.img1").css('display', 'none');
        $("img.img2").css('display', 'block');
        $(".ligaLed").css('display', 'none');
        $(".apagaLed").css('display', 'block');

    })

    $("button.apagaLed").click(function () {

        $("img.img2").css('display', 'none');
        $("img.img1").css('display', 'block');
        $(".ligaLed").css('display', 'block');
        $(".apagaLed").css('display', 'none');

    })

})