//add HTML to create first row
function prependFirstRow(){
  var html = "" +
  '<tr>' +
    '<td class="item"></td>' +
    '<td>' +
      '<div class="form-group quantity"></div>' +
      '<button type="button" class="btn btn-danger removeButton">Remove</button>' +
    '</td>' +
    '<td class="unitPrice"></td>' +
    '<td class="subTotal"></td>' +
  '</tr>';

  $("#firstRow").prepend(html)
};

//input form data into new row
function inputData() {
  var itemName = $("#itemName").val();
  var itemQuantity = $("#itemQuantity").val();
  var itemPrice = $("#itemPrice").val();

//write the values to a new row (newest row is first)
  $(".item").first().html(itemName);
  $(".quantity").first().html(itemQuantity);
  $(".unitPrice").first().html(itemPrice);
  $(".subTotal").first().html(itemQuantity*itemPrice);
};

//delete row
function bindDelete () {
  $('.removeButton').off().on('click', function () {
    $(this).closest('tr').remove();
  });
}

$(document).ready(function(){
  //calculate and display total price - DOESN'T WORK
  $('#calcBtn').on('click',function(){
    var total = 0;
    $(".subTotal").each(function(index, elem){
      total += parseInt($(elem).html());
    })
    $("#gTotal h2").html(total);
  });

  $("#addItemBtn").on('click', function(){
    prependFirstRow();
    inputData();
    bindDelete();
  });
});


