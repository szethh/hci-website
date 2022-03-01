function mod(n, m) {
    return ((n % m) + m) % m;
}

$('.slider .photos .buttons').click(function(e) {
    let inc = e.target.className == 'prev' ? -1 : 1;
    let parent = $(e.target).parent().parent();
    let idx = $(parent).find('.visible').index();
    let children = $(parent).children('img');

    $(children[idx]).toggleClass('visible', false);
    idx = mod(idx + inc, children.length);
    $(children[idx]).toggleClass('visible', true);
})