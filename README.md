Javascript and Jquery Exercise - Shopping Cart
=============================

1. Fork the project on Github
2. Clone the project to your computer
3. Make the shopping cart total price calculator using Javascript and Bootstrap


Pseudo-code
========================
css / html
1. A table with
  <tr>
    <th>
    <th>
  </tr>
  <tr>
    <td>
  </tr>
  a) Item
  b) Unit Price
  c) Qty & inputbox (only integers) & cancel button
  d) function of Unitprice * input = subtotal

  at the end of row:
  a) text inputbox
  b)  uniteprice inputbox
  c) create button
  d) empty cell / test over if it works with less one cell

2.  'Calculate Prices' button - function to sum of subtotals

3.  'Total Price:' & retrieve total price

use Bootstrap to find anything useful for table & element positioning

JavaScript & jQuery
1. remember to put $('body').ready(function(){});
2. Create button -->
  on.('click').xxxxxx
  before successfully add an item:
    a) check iteminput 'name' where not duplicated(bonus)
    b) check unitprice input as a number
    c) check qty input as an integer && integer > 0
  If yes, create a new row at the top.
  If no, popup ('Not so easy. Correct yourself').
3. when finish inputting Qty, function to calculate
3. cancel button: delete the corresponding row
4. Calculate Prices:
    on.('click').xxxxxx


Bonus:
Sort the rows by items
popup('You have successfully add an item')
show up the website => popup('Price is cheap. No bargain')