function changeButton() {
  $('.btn').on('mouseover',function() {
  $(this).removeClass('btn btn-default btn-lg ');
  $(this).addClass('btn btn-warning btn-lg');
});

$('.btn').on('mouseleave',function() {
  $(this).removeClass('btn btn-warning btn-lg ');
  $(this).addClass('btn btn-default btn-lg');
});
}

module.exports = changeButton;
