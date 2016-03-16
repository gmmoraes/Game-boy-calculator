function add() {
  var digitValue = ["#digit0", "#digit1", "#digit2","#digit3", "#digit4", "#digit5", "#digit6","#digit7","#digit8","#digit9","#digit10","#digit11", "#digit13"];
  counter = 0;
  for(var i = 0; i < 13; i++){
    $(digitValue[i]).click(function(){
      var values = $(this).val();
      var input = $( '#screenText' );
      input.val( input.val() + values );

    });
  }

}

module.exports = add;
