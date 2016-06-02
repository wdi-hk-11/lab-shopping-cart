/*This is a messy native javascript solution that works as such:

1- Create an array of default shop items
2 - Run a setup function that loops through each item in array and creates all elements of main table (name and price columns, qty input column etc...)
3- Seperate functions for the following:
  3a) Add a new item: adds entry to shop items array and RECREATE ENTIRE TABLE (this design sucks-better option is to append directly to HTML, when later calling HTML in java this will return an array of list items anyway...)
  3b) Subtotal calc: this parses out non-numeric figures and calcs each lines' subtotal
  3c) Total calc: this adds up subtotals
  3d) Clear: this removes the line item from the shopping list array and recreates the entire table again
*/

// Initialize arry of items and prices
var audio = new Audio("secret.wav") ;
audio.play();

var shoppingList = [[],[],[],[],[]]
shoppingList[0][0] = "Arrows x20"
shoppingList[0][1] = 20
shoppingList[1][0] = "Bombs x5"
shoppingList[1][1] = 50
shoppingList[2][0] = "Hearts x3"
shoppingList[2][1] = 100
shoppingList[3][0] = "Majora's Mask"
shoppingList[3][1] = 250
shoppingList[4][0] = "Ocarina"
shoppingList[4][1] = 500

// Setup the grid/table
var setup = function(){
  // First clear dat shit up
  document.getElementById("item").innerHTML = null;
  document.getElementById("price").innerHTML = null;
  document.getElementById("Qty").innerHTML = null;
  document.getElementById("insertQty").innerHTML = null;
  document.getElementById("clear").innerHTML = null;
  document.getElementById("subtotal").innerHTML = null;
  // Create Item column
  var itemList = document.createElement("ul");
  for (var i = 0; i < shoppingList.length; i++){
    var item = document.createElement("li");
    item.textContent = shoppingList[i][0];
    itemList.appendChild(item);
  }
  document.getElementById("item").appendChild(itemList);

  // Create prices column
  var priceList = document.createElement("ul");
  for (var i = 0; i < shoppingList.length; i++){
    var price = document.createElement("li");
    price.setAttribute("class", "priceitem");
    price.textContent = "$" + shoppingList[i][1];
    priceList.appendChild(price);
  }
  document.getElementById("price").appendChild(priceList);


  // Create Qty column with input field and clear button
  var qty = document.createElement("ul");
  var subTotals = document.createElement("ul");
  for (var i = 0; i < shoppingList.length; i++){
    // This just marks each row with 'Qty'
    var qtyMarker = document.createElement("li");
    qtyMarker.textContent = "Qty";
    qty.appendChild(qtyMarker);

    // This gives each row an input button
    var inputQtyMarker = document.createElement("input");
    inputQtyMarker.setAttribute("type","integer");
    inputQtyMarker.setAttribute("class", "form-control input-sm qtyvalue numberEntry");
    inputQtyMarker.setAttribute("onfocusout","subtotalCalc()")
    inputQtyMarker.value = 0;
    document.getElementById("insertQty").appendChild(inputQtyMarker);

    // This gives each row a 'clear' button
    var clearBtn = document.createElement("input");
    clearBtn.setAttribute("class", "btn btn-sm clearButton");
    clearBtn.setAttribute("id", "clearBtn" + [i]);
    clearBtn.setAttribute("type", "submit");
    clearBtn.setAttribute("value", "Clear");
    document.getElementById("clear").appendChild(clearBtn);

    // This gives each row a subtotal calc
    var subTotal = document.createElement("li");
    subTotal.setAttribute("class", "subtotalline");
    subTotal.textContent = 0;
    subTotals.appendChild(subTotal);
  };
  document.getElementById("Qty").appendChild(qty);
  document.getElementById("subtotal").appendChild(subTotals);

};

setup();


var subtotalCalc = function(){
  var numSubTotals = document.getElementsByClassName("subtotalline").length;
  var calcedSubTotal = 0;
  for (var i = 0; i < numSubTotals; i++) {

    var parsedPrice = document.getElementsByClassName("priceitem")[i].textContent.replace(/\D/g,'');
    parsedPrice = parseFloat(parsedPrice);

    calcedSubTotal = parseFloat(document.getElementsByClassName("qtyvalue")[i].value)* parsedPrice;
    document.getElementsByClassName("subtotalline")[i].textContent = calcedSubTotal;
  };
};

// Add New Item
document.getElementById("addNewButton").addEventListener("click", function(){
    // console.log("clicked")
    var newItemEntry = document.getElementById("newItemEntry").value
    var newPriceEntry = document.getElementById("newPriceEntry").value

    if( newItemEntry == "" || newPriceEntry == "" ){
      alert("Missing an entry grandma!");
    }
    else{
      var newItemArray = [];
      newItemArray.push(newItemEntry);
      newItemArray.push(newPriceEntry);
      shoppingList.push(newItemArray);
      setup();

    };
  });

// Calculate Total
document.getElementById("calcTotalButton").addEventListener("click", function(){
  // get length of all subtotal classes (it returns array) for each one take the .textContent
  console.log("clicked")
  var numSubTotals = document.getElementsByClassName("subtotalline").length;
  var total = 0;
  for (var i = 0; i < numSubTotals; i++) {
    total += parseFloat(document.getElementsByClassName("subtotalline")[i].textContent);
  };
  document.getElementById("totalhere").textContent = total;
});

// Input Validation
$(document).on('focusout', '.numberEntry', function(){
  if (isNaN(this.value)){
    alert("Entry must be a number grandma!");
    this.value = 0;
  }
  else if(this.value == "" && this.id !== "newPriceEntry"){
    this.value = 0;
  };
});

$(document).on('focusout', '.textEntry', function(){
  if (!isNaN(this.value) && this.value !== ""){
    alert("Entry must be a string grandma!");
    this.value = "";
  };
});

// Clear button - cant figure out how to do this in javascript so using jQuery :(

$(document).on('click', '.clearButton', function() {
  shoppingList.splice(this.id.replace(/\D/g,''), 1);
  setup();
  console.log(this.id.replace(/\D/g,''));
});


 /*ALTERNATIVE SOLUTION USING JQUERY
Functions:
1) Setup- on inital table by appending items
2) Adding elements- simply append new elements
3) Generic columns function- to be called by both f1 and f2, adds everything that isn't item name and price
4)
For adding elements simply append new elements.

var setupJ = function{

  // $( ".inner" ).append( "<p>Test</p>" );
}

*/