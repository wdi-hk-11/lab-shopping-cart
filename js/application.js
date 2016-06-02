

$(document).ready(function(){


   function createitem(){


      var product_name = $(".product_name").val();
      var product_price = $(".product_price").val();

      console.log(product_name);
      console.log(product_price);

      if ($.isNumeric(product_price)===false){
         alert("Please enter a number");
      }else if (product_name===" "){
        alert('Please enter the product name');
      } else{
        var item=''+ '<div class="item row" >'+ '<div class="productname col-xs-3" >'+product_name+'</div>'+ '<div class="unitpriced col-xs-3" >'+'$'+product_price+'</div>' + '<div class="quantity col-xs-4" >' + '<input class="quantityinput form-control" value="0">' + '<button class="cancel btn btn-danger">Cancel</button>' + '</div>' + '<div class="subtotal col-xs-1">$0.00 </div>';


        $(item).prependTo($('#itemlist')).slideDown('slow');}
        $('.quantityinput').off().on('keyup', calculateSubtotal);
        $('.cancel').off().on('click', removeitem);

      };






   function removeitem(event){

   $(event.target).parents('.item').fadeOut( "slow").remove();



   };

  function  calculateSubtotal (event){
   var $target=$(event.target);  //target is the quantity
   var quantity = $target.val();
   if ($.isNumeric(quantity)){
    var $item = $target.parents('.item'); //find the parent of the quantity==> the whole item row
    var $subtotal = $item.find('.subtotal'); //find the subtotal class in the whole item
    var price = $item.find('.unitpriced').text().trim().substring(1);
    $subtotal.text('$'+(Number(quantity)*Number(price)).toFixed(2));
   }

  };



  function  calculatetotal (){
    var total=0;
    $('.subtotal').each(function(index,subtotal){
       total += Number($(subtotal).text().trim().substring(1));
    });

    $('.totalprice').text('$' + total);


  };


  function click (){

  $( ".create" ).on('click',createitem);
  $( ".calculate" ).on('click',calculatetotal);
  $( ".cancel" ).on('click',removeitem);
  $('.quantityinput').on('keyup', calculateSubtotal);

  };

  click ();



});