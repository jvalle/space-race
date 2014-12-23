(function ($) {
    var socket = io.connect('http://localhost'),
        $app = $('.app'),
        $joinForm = $('.join');

    socket.on('newPlaya', function (data) {
        console.log(data);
    });

    // listen that the server has updated the player list
    socket.on('players updated', function (players) {
        updatePlayerList(players);
    });

    $joinForm.on('submit', function (e) {
        e.preventDefault();

        var $user = $('#join-username');

        console.log($user.val());

        // emit that a new player has joined
        socket.emit('new player', { username: $user.val() });
    });

    function updatePlayerList (players) {
        var $playerList = $('.players');

        $playerList.empty();

        for (var i = 0, len = players.length; i < len; i ++) {
            $playerList.append('<li>' + players[i].username + '</>');
        }
    };
})(jQuery);