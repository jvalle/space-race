(function ($) {
    var socket = io.connect('http://localhost'),
        $app = $('.app'),
        $joinForm = $('.join');

    socket.on('newPlaya', function (data) {
        console.log(data);
    });

    $joinForm.on('submit', function (e) {
        e.preventDefault();
    });
})(jQuery);