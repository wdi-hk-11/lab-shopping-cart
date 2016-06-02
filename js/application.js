$(document).ready(function(){
  //create item
  var createItem = function() {
    var itemName = $('#createItemName').val() ;
    var itemPrice = $('#createItemPrice').val() ;

    //validate itemPrice as numeric
    if (itemName === '' || itemPrice === '') {
      alert('please input the information');
    } else if ($.isNumeric(itemPrice) === false) {
      alert('please input a number');
    } else {
      //add to table
      var newItem = '<tr class="itemRow">'+
              '<td>'+ itemName +'</td>'+
              '<td class="itemPrice">$'+ Number(itemPrice).toFixed(2) +'</td>' +
              '<td>'+
                '<form class="form-inline">' +
                  '<div class="form-group">'+
                    '<div class="input-group">' +
                      '<span class="input-group-addon">QTY</span>' +
                      '<input type="text" class="form-control itemQuantity" placeholder="Amount">' +
                    '</div> ' +
                     '<button type="button" class="btn btn-default btn-cancel">Cancel</button>' +
                   '</div>' +
                '</form>' +
              '</td>' +
              '<td class="itemTotal">$0.00</td>' +
            '</tr>';

          $(newItem).prependTo($('.table-cart'));
          $('#createItemName').val('');
          $('#createItemPrice').val('');

          $('.itemQuantity').on('keyup', calculateItems);
          $('.btn-cancel').on('click', deleteItem);
    }
  };

  //delete
  var deleteItem = function() {
    $(this).closest('tr').remove();
  };


  var calculateItem = function(index,item) {
    var itemTotal = $('.itemTotal', item);
    var inputQuantity = $('.itemQuantity', item).val();
    var itemPrice = $('.itemPrice',item).text().trim().substring(1);
    var total = Number(inputQuantity) * Number(itemPrice);
    itemTotal.text('$' + total.toFixed(2));
  }

  //calculate item when inputs quantity
  var calculateItems = function() {
    $('.itemRow').each(calculateItem);
  };

  //calculate total
  var calculateTotal = function() {
    var total = 0;

     $('.itemTotal').each(function(index, element) {
        total += Number($(element).text().trim().substring(1));
      });

      $('#totalPrice').text(total.toFixed(2));
  };

  //sort by alphabets
  var sortByAlph = function() {

  };

  //event listener

  $('#btn-createItem').on('click', createItem);
  $('.btn-cancel').on('click', deleteItem);
  $('.itemQuantity').on('keyup', calculateItems);
  $('#calculateTotal').on('click', calculateTotal);
  $('#sortByAlph').on('click', sortByAlph);

});