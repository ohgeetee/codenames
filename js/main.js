var _dblagent,
    _map,
    _colors,
    _ids,
    _$cnDefault,
    _$cnPictures,
    DEFAULT_IDS = ['A1', 'B1', 'C1', 'D1', 'E1', 'A2', 'B2', 'C2', 'D2', 'E2', 'A3', 'B3', 'C3', 'D3', 'E3', 'A4', 'B4', 'C4', 'D4', 'E4', 'A5', 'B5', 'C5', 'D5', 'E5'],
    DEFAULT_COLORS = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    PICTURES_COLORS = [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4]

function shuffle(a) {
    for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
    return a;
};

function setClasses(i, id) {
    $('#' + id).addClass(_map[_colors[i]]);
}

function setDefault(){
    _colors = DEFAULT_COLORS;
    _ids = DEFAULT_IDS;
    _$cnDefault.toggleClass('active', true);
    _$cnPictures.removeClass('active');
    generate();
}

function setPictures(){
    _colors = PICTURES_COLORS;
    _ids = DEFAULT_IDS.slice(0, 20);
    _$cnPictures.toggleClass('active', true);
    _$cnDefault.removeClass('active');
    generate();
}

function generate(){
    _colors = shuffle(_colors);
    _dblagent = shuffle(['red', 'blue']);
    _map = {
        '1': 'assassin',
        '2': _dblagent[0],
        '3': _dblagent[1],
        '4': 'civilian'
    };
    $('.square').removeClass("assassin red blue civilian")
    $(_ids).each(setClasses);
    $('.startplayer').removeClass("red blue civilian").addClass(_dblagent[0]);
}

$(function () {
    _$cnDefault = $('#cnDefault');
    _$cnPictures = $('#cnPictures');
    $('#generate').on("click", generate);
    _$cnDefault.on("click", setDefault);
    _$cnPictures.on("click", setPictures);

    setDefault();
});
