/*Function to display a random featured image*/

let myArray = ["", "Cheese and Bacon Fries", "Barbecue Burger" ,"Arkeids Burger"];

      var min = 1;
      var max = 10;
      var numImagen = Math.floor((Math.random() * (max - min) + min));
      var imagen = "img/" + numImagen.toString() + "-01.jpg";
      $('#imagen-banner').attr("src",imagen);
      //$('#etiqueta').text(myArray[numImagen]);

/*Function to update image inside container of modal window when a new item is clicked to avoid pre-loading 
all pictures*/

function updateImage(img){
    var imgRoute = 'assets/img/' + img;
    $('#foto-modal').attr("src",imgRoute);
}

/*code to scroll down page leaving enough space for fixed header*/

var divId;

  $('.nav-link').click(function(){   
    $('.navbar-collapse').collapse('hide'); 
    divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 300
    }, 100);

  });