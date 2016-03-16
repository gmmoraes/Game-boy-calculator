function my_event_handler(e) {
  var digits = [1,2,3,'+',4,5,6,'-',7,8,9,'.','=','/','x','c']
  for (var i = 0; i < 16; i++) {
    $('#digitCol').append("<input type='button' class='btn btn-default btn-lg ' id='digit" + i + "''" + " " + "value='" + digits[i] +  "'></input");
  }
}

module.exports = my_event_handler;
