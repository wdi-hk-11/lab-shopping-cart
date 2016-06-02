$(document).ready(function(){

  // function to calculate total price
  var calTotal = function(){
    var total = 0;
    $('.amount').each(function(index, subtotal){
      total += Number($(subtotal).text().trim().substring(1));
    });
    $('#total-price').text('$' + total.toFixed(2));
  };

  // function to cancel an item
  var cancelItem = function(event){
    $(event.target).parents('.item').remove();
    calTotal();
  };

  // function to calculate amount
  var calAmount = function(event){
    var $target = $(event.target);
    var qty = $target.val();
    var $item = $target.parents('.item');
    var $amount = $item.find('.amount');
    var price = $item.find('.item-price').text();
    $amount.text('$' + (Number(qty)*Number(price)).toFixed(2));

    calTotal();
  };

  // function to add new item
  var newItem = function(){
    var item = $('#item').val();
    var price = $('#price').val();
    var info = ''+
    '<div class="row item">'+
      '<div class="col-xs-3">' + item + '</div>' +
      '<div class="item-price col-xs-3">' + price + '</div>' +
      '<div class="col-xs-3">' +
        '<label>QTY</label>' +
        '<input class="quantity" class="form-control" placeholder="0">' +
        '<button class="cancel">Cancel</button>' +
      '</div>' +
      '<div class="amount col-xs-3">$0.00</div>'+
    '</div>';

    // Prepend to list
    $(info).prependTo($('#buttonrow')).slideDown('slow');
    // $('#buttonrow').prepend($(info)).slideDown('slow');
    // Reset values
    $('#item').val('');
    $('#price').val('');

    $('input.quantity').off().on('keyup', calAmount);
    $('.cancel').off().on('click', cancelItem);
  };

  var init = function(){
    $('#create').on('click', newItem);
    $('.cancel').on('click', cancelItem);
  }

  init();
});






