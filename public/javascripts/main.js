(function ($) {
    var socket = io.connect('http://localhost');

    socket.on('newPlaya', function (data) {
        console.log(data);
    });
})(jQuery);