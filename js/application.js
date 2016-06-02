$(document).ready(function(){
// "Create" button
// create a new line of list of html in table when data entered
// add a row function
$(".create").on('click',function(){
  var foodname = $('#newitem').val();
  var foodprice = $('#newprice').val();
  var qty = '<td class="QTY">QTY</td>';
  var qtyBox = '<td><input type="text" id="'+ foodname + '" value="0"></td>';
  //var cancel = '<td><button class='cancel'>Cancel</button></td>';
  var subtotal = '<td>$0.00</td>';
  var newrow = $('<tr><td>'+foodname+"</td><td>"+"$"+foodprice+'</td></tr>'+qty+qtyBox+subtotal/*+ qtyBox + cancel + subtotal*/);

  newrow.prependTo($('table'));
        });

// another way
// $('.create').click(function() {
//    $('input:text').val();

// });

// "calculate Prices" button:
// two functions here
// 1) subtotal for right side of individual item
// on click function
// 2) Total Price at bottom
$("#calculate").on('click',function(){
// var subtotal = quantity *
 // var subtotal = $(.subtotal);

 // var total =
        });


// "Cancel" button: cancelling the subtotal
$(".cancel").on('click',function(){

        });
});
