$(function ($) {
    var colors = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4];
    var ids = ['A1', 'B1', 'C1', 'D1', 'E1', 'A2', 'B2', 'C2', 'D2', 'E2', 'A3', 'B3', 'C3', 'D3', 'E3', 'A4', 'B4', 'C4', 'D4', 'E4', 'A5', 'B5', 'C5', 'D5', 'E5'];
    $('div.button.raised').click(function () {
        colors = $.shuffle(colors);
        var dblagent = ['red', 'blue'];
        dblagent = $.shuffle(dblagent);
        var map = {
            '1': 'assassin',
            '2': dblagent[0],
            '3': dblagent[1],
            '4': 'civilian'
        };
        $(ids).each(function (i) {
            $('#' + ids[i]).removeClass("assassin red blue civilian").addClass(map[colors[i]]);
        });
        $('div.startplayer').removeClass("red blue").addClass(dblagent[0]);
    });

    $.shuffle = function (ids) {
        for(var j, x, i = ids.length; i; j = parseInt(Math.random() * i), x = ids[--i], ids[i] = ids[j], ids[j] = x);
        return ids;
    };
});