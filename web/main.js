function mod(n, m) {
    return ((n % m) + m) % m;
}

$('.slider .photos .buttons').click(function(e) {
    // get increment
    let inc = e.target.className == 'prev' ? -1 : 1;
    let parent = $(e.target).parent().parent();
    // get index of visible kid relative to parent
    let idx = $(parent).find('.visible').index();
    // get list of children
    let children = $(parent).children('img');

    // toggle the old visible one to false
    $(children[idx]).toggleClass('visible', false);
    // update index based on increment, cycling if necessary
    idx = mod(idx + inc, children.length);
    // toggle the new bunny :)
    $(children[idx]).toggleClass('visible', true);
})

$('.tablinks').click(function (e) {
    let id = $(e.target).text()
    // for each tab, disable them unless they have the clicked id
    $('.tabcontent').each(function() {
        if (this.id === id) {
            this.style.display = "block";
        } else {
            this.style.display = "none";
        }
   });
})

$(document).ready(function() {
    // activate the default one
    $('.tabcontent.default').css("display", "block");
    $('span#year').text(new Date().getFullYear())
});
