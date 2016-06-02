$(document).ready(function(){

//update price

var total = 0

var calculateTotal = function() {
    var total = 0;
    $('.selectedprice').each(function(index, subtotal) {
      total += Number($(subtotal).text().trim().substring(1));
    });

    $('#total').text('$' + total.toFixed(2));
  };

var updateQuantity = function(event) {
    var $target = $(event.target);
    var quantity = $target.val();
    if ($.isNumeric(quantity)) {
      var $item = $target.parents('.item');
      var $subtotal = $item.find('.selectedprice');
      var price = $item.find('.itemprice').text().trim().substring(1);
      console.log("q" + quantity);
      console.log(price);
      console.log(quantity * price);
      $subtotal.text('$' + (Number(quantity) * Number(price)).toFixed(2));

        console.log(price);
        console.log(quantity * price);
      calculateTotal();
    }
  };


  // create item
var createItem = function(){
    var itemName = $('#newitem').val();
    var UnitPrice = $('#newprice').val();

    // must check price is integer
    if ($.isNumeric(UnitPrice) === false){
      alert('Unit price must be a number');
    } else if (itemName === ''){
      alert('Item name cannot be empty');
    } else {
      UnitPrice = Number(UnitPrice).toFixed(2);
      var newItem = '' +
      '<div class="item row">' +
        '<div id="itemname col-xs-3">'+ itemName + '</div>' +
        '<div class="itemprice col-xs-3">$'+ UnitPrice + '</div>' +
        '<div class="item-qty col-xs-3">'+ '<label>QTY</label>' +
          '<input class="quantity" value="0">' + '<button class="cancel">Cancel</button>'+
        '</div>' +
        '<div class="selectedprice col-xs-3"> $0.00 </div>' +
      '</div>';

      $(newItem).prependTo($('#itemslist')).slideDown('slow');
      $('#newitem').val('');
      $('#newprice').val('');
      console.log( $('#newitem'));
      console.log(UnitPrice)
      $('input.quantity').off().on('keyup', updateQuantity);
      $('.cancel').off().on('click', removeItem);
    }
  };








 var init = function() {
    // Event listeners set up
    $('#calbutton').on('click', calculateTotal);
    $('#new-item-create').on('click', createItem);



    // Just in case if there are any hard-coded items here
    $('input.quantity').on('keyup', updateQuantity);
    $('.cancel').on('click', removeItem);
  }
  init();

//create

//calculte



});