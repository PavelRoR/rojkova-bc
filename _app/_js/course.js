//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend flipclock.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../css/course-ie.min.css";
    head.appendChild(link);
}
$(document).ready(function () {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    /* Таймер */

    $(function () {
        var clock;
        var dates = new Array(
            new Date("March 27, 2020 00:00 UTC+3"),
            new Date("March 28, 2020 00:00 UTC+3"),
            new Date("March 29, 2020 00:00 UTC+3")
        );

        var currentDate = new Date();

        var sale1 = {
            name: $('#sale-1'),
            saleText: new Array('1 000р.', '500р.')
        };
        var sale2 = {
            name: $('#sale-2'),
            saleText: new Array('2 000р.', '1 000р.')
        };
        var sale3 = {
            name: $('#sale-3'),
            saleText: new Array('4 000р.', '2 000р.')
        };
        var today1 = {
            name: $('#today-1'),
            todayText: new Array('14 400р.', '14 900р.')
        };
        var today2 = {
            name: $('#today-2'),
            todayText: new Array('29 900р.', '30 900р.')
        };
        var today3 = {
            name: $('#today-3'),
            todayText: new Array('49 900р.', '51 900р.')
        };
        var link1 = {
            name: $('#link-1'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4607&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4608&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4609&clean=true&lg=ru')
        };
        var link2 = {
            name: $('#link-2'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4611&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4612&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4613&clean=true&lg=ru')
        };
        var link3 = {
            name: $('#link-3'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4615&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4616&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4617&clean=true&lg=ru')
        };
        var prep_link = {
            name: $('#prepayment-link'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4618&clean=true&lg=ru ', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4618&clean=true&lg=ru ')
        }
        if (currentDate < dates[0]) {
            var futureDate = dates[0];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.clock-stop').addClass("alert-danger");
                        ("alert-danger");
                        $('.clock-stop').html("Скидка уменьшилась!");
                        sale1.name.text(sale1.saleText[0]);
                        sale2.name.text(sale2.saleText[0]);
                        sale3.name.text(sale3.saleText[0]);
                        today1.name.text(today1.todayText[0]);
                        today2.name.text(today2.todayText[0]);
                        today3.name.text(today3.todayText[0]);
                        link1.name.attr('href', link1.linkText[0]);
                        link2.name.attr('href', link2.linkText[0]);
                        link3.name.attr('href', link3.linkText[0]);
                        prep_link.name.attr('href', prep_link.linkText[0]);
                    }
                }
            });
        } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
            var futureDate = dates[1];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.clock-stop').addClass("alert-danger");
                        ("alert-danger");
                        $('.clock-stop').html("Скидка уменьшилась!");
                        sale1.name.text(sale1.saleText[1]);
                        sale2.name.text(sale2.saleText[1]);
                        sale3.name.text(sale3.saleText[1]);
                        today1.name.text(today1.todayText[1]);
                        today2.name.text(today2.todayText[1]);
                        today3.name.text(today3.todayText[1]);
                        link1.name.attr('href', link1.linkText[1]);
                        link2.name.attr('href', link2.linkText[1]);
                        link3.name.attr('href', link3.linkText[1]);
                        prep_link.name.attr('href', prep_link.linkText[1]);
                    }
                }
            });
        } else {
            var futureDate = dates[2];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
                        $('.cost-full span').addClass('unbroken');
                        link1.name.attr('href', link1.linkText[2]);
                        link2.name.attr('href', link2.linkText[2]);
                        link3.name.attr('href', link3.linkText[2]);
                    }
                }
            });
        }
    });

    // конец документа
});