var debug;

$(document).ready(function(){
  var createItem = function(){
    console.log("connected");
    // must check price is integer
    var itemName = $('#new-item-name').val();
    var itemUnitPrice = $('#new-item-unit-price').val();

    if ($.isNumeric(itemUnitPrice) == false){
      alert('Unit price must be a number');
    } else if (itemName == ''){
      alert('Item name cannot be empty');
    } else {
      itemUnitPrice = Number(itemUnitPrice).toFixed(2);
      var newItem = '' +
      '<div class="item row">' +
        '<div class="item-name col-xs-4">'+ itemName + '</div>' +
        '<div class="item-price col-xs-3">'+ itemUnitPrice + '</div>' +
        '<div class="item-qty col-xs-3">' +
          '<label>QTY</label>' +
          '<input class="quantity" value="0">' +
          '<button class="cancel">Cancel</button>' +
        '</div>' +
        '<div class="item-subtotal col-xs-2"> $0.00 </div>' +
      '</div>';

      $('#items-list').prepend(newItem);
      // using animation
      // $(newItem).prependTo($('#items-list')).slideDown('slow');
    }
  };

  $('#new-item-create').on('click', function(){
    createItem();
  });
});
