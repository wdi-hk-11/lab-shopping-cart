$(document).ready(function(){
  var calculateTotal = function() {
    var total = 0;
    $('.item-subtotal').each(function(index, subtotal) {
      total += Number($(subtotal).text().trim().substring(1));
    });

    $('#total-price').text('$' + total.toFixed(2));
  };

  var updateQuantity = function(event) {
    var $target = $(event.target);
    var quantity = $target.val();
    if ($.isNumeric(quantity)) {
      var $item = $target.parents('.item');
      var $subtotal = $item.find('.item-subtotal');
      var price = $item.find('.item-price').text().trim().substring(1);
      $subtotal.text('$' + (Number(quantity) * Number(price)).toFixed(2));

      calculateTotal();
    }
  };

  var removeItem = function(event) {
    $(event.target).parents('.item').remove();

    calculateTotal();
  };

  var createItem = function(){
    var itemName = $('#new-item-name').val();
    var itemUnitPrice = $('#new-item-unit-price').val();

    // must check price is integer
    if ($.isNumeric(itemUnitPrice) === false){
      alert('Unit price must be a number');
    } else if (itemName === ''){
      alert('Item name cannot be empty');
    } else {
      itemUnitPrice = Number(itemUnitPrice).toFixed(2);
      var newItem = '' +
      '<div class="item row">' +
        '<div class="item-name col-xs-4">'+ itemName + '</div>' +
        '<div class="item-price col-xs-3">$'+ itemUnitPrice + '</div>' +
        '<div class="item-qty col-xs-3">' +
          '<label>QTY</label>' +
          '<input class="quantity" value="0">' +
          '<button class="cancel">Cancel</button>' +
        '</div>' +
        '<div class="item-subtotal col-xs-2"> $0.00 </div>' +
      '</div>';

      $(newItem).prependTo($('#items-list')).slideDown('slow');
      $('#new-item-name').val('');
      $('#new-item-unit-price').val('');

      $('input.quantity').off().on('keyup', updateQuantity);
      $('.cancel').off().on('click', removeItem);
    }
  };

  var init = function() {
    // Event listeners set up
    $('#calc-price-button').on('click', calculateTotal);
    $('#new-item-create').on('click', createItem);

    // Just in case if there are any hard-coded items here
    $('input.quantity').on('keyup', updateQuantity);
    $('.cancel').on('click', removeItem);
  }

  init();
});