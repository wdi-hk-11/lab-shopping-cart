//add HTML to create first row
function prependFirstRow(){$("#firstRow").prepend('<tr><td class="item"></td></td><td><div class="form-group quantity"></div><button type="button" class="btn btn-danger removeButton">Remove</button></form></td><td class="unitPrice"></td><td class="subTotal"></td></tr>')};

//input form data into new row
function inputData() {
  var itemName = $("#itemName").val();
  var itemQuantity = $("#itemQuantity").val();
  var itemPrice = $("#itemPrice").val();

//write the values to a new row (newest row is first)
  $(".item").first().html(itemName);
  $(".quantity").first().html(itemQuantity);
  $(".unitPrice").first().html(itemPrice);
  $(".subTotal").first().html((itemQuantity*itemPrice));
};

//calculate and display total price - DOESN'T WORK
$(document).on('click', '#calcBtn',function(){
  // var total = parseInt($(".subTotal").html());
var total = ($(".subTotal").each(function(){
  var sum = 0;
  sum += parseInt($(this).html()
   )}
  )
);

    $("#gTotal h2").append(total);

  });




//delete row
$(document).on('click', '.removeButton', function () {
  $(this).closest('tr').remove();
  return false;
 });


$(document).ready(function(){
$("#addItemBtn").click(prependFirstRow).click(inputData);
});


