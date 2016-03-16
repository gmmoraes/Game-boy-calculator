function sum() {
    $('#digit12').click(function() {
      var opera = $( '#screenText' ).val();
      var result = eval(opera);
      $('#screenText').val("");
      var input = $( '#screenText' );
      input.val( input.val() + result );
    });
  }

module.exports = sum;
