function multiplication() {
  $('#digit14').click(function() {
    var multiplicationSign = "*";
    var input = $( '#screenText' );
    input.val( input.val() + multiplicationSign );
  });
}

module.exports = multiplication;
