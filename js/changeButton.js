function changeButton() {
  var $btn = $('.btn');
  $btn.on('mouseover',function() {
    $(this).toggleClass('btn-warning');
});

  $btn.on('mouseleave',function() {
    $(this).toggleClass('btn-warning');

});

}

module.exports = changeButton;
