//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}
$(document).ready(function () {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this),
            switch_title = $('.switch-title'),
            switch_text = $('.switch-text'),
            currDate = new Date(),
            startDate = new Array(
                new Date("March 26 2020 18:30 UTC+3"),
                new Date("March 27 2020 18:30 UTC+3"),
                new Date("March 28 2020 18:30 UTC+3")),
            endDate = new Array(
                new Date("March 26 2020 21:00 UTC+3"),
                new Date("March 27 2020 21:00 UTC+3"),
                new Date("March 28 2020 21:00 UTC+3")),
            rooms = new Array(
                '',
                '',
                '');

        function roomSwitch() {
            $('#main').addClass('switch-main');
            $('.mail-container').addClass("switch-mail-container");
            switch_title.html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР?<br>ЖДЕМ ТОЛЬКО ВАС!').css('lineHeight', '1.2');

            switch_text.removeClass('hide').html('<span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span><br>Присоединяйтесь к интенсиву и окунитесь в мир практической философии! Познайте этот мир и себя в нём!');
            button.text('Зайти!');
            $('.modal-col:first-of-type').addClass('switch-col');
        }
        if ((currDate > startDate[0] && currDate < endDate[0]) || (currDate > startDate[1] && currDate < endDate[1]) || (currDate > startDate[2] && currDate < endDate[2])) {
            roomSwitch();
        }
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                if (currDate > startDate[0] && currDate < endDate[0]) {
                    window.open(rooms[0]);
                }
                if (currDate > startDate[1] && currDate < endDate[1]) {
                    window.open(rooms[1]);
                }
                if (currDate > startDate[2] && currDate < endDate[2]) {
                    window.open(rooms[2]);
                }

                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    /*Конец документа*/
});