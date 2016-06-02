$( document ).ready(function() {

// Recalculate subtotals ---copy from solution
  var updateQuantity = function (event) {

  $('input').on('click', function () {
    var $target = $(event.target);
    var $quantity = $target.val();
    if ( $.isNumeric(quantity)) {
      var $item      = $target.parent('.item');
      var $subtotal  = $item.parent().find('.subtotal');
      var price = $item.find('.unitprice').text();
      $subtotal.text(Number(quantity) * Number(price));
    }
  });

// set new item, unit price & row
  var newItemName = $('#new-item').html();
  var newUnitPrice = $('#new-unitprice').val();
  var newRowHtmlCode =
      '<div class="row show-grid">' +
      '<div class="col-md-3 item">' + newItemName + '</div>' +
      '<div class="col-md-3">$<span class="unitprice">' + newUnitPrice + '</span></div>' +
      '<div class="col-md-4"><input class="qty" type="integer" value="0">' +
          '<button class="btn cancelButton">Cancel</button>' +
        '</div>' +
      '<div class="col-md-2">$<span class="subtotal">' + Number($('subtotal').text()) + '.00</span></div>' +
        '</div>';

  // Cancel button, click on the button and remove it parent row - Only this works
  $('button.btn.cancelButton').on('click', function () {
    $(this).parents('.row').remove();
  });

  // Create Button, but can't add name & unit price
  var newRow = $('button.btn.createButton').click(function () {
  $('.container').prepend(newRowHtmlCode);
    });

});

  // Total Price function
  var totalprice = function () {
    var total = 0;
    $('.subtotal').each(function (index, subtotal) {
    total += Number($('.subtotal').html());
    });
  };