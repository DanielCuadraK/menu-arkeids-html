 /*//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/

let myArray = ["", "Cheese and Bacon Fries", "Barbecue Burger" ,"Arkeids Burger"];

      var min = 1;
      var max = 10;
      var numImagen = Math.floor((Math.random() * (max - min) + min));
      var imagen = "img/" + numImagen.toString() + "-01.jpg";
      $('#imagen-banner').attr("src",imagen);
      //$('#etiqueta').text(myArray[numImagen]);

function updateImage(img){
    var imgRoute = 'assets/img/' + img;
    $('#foto-modal').attr("src",imgRoute);
}

var texto_promo = `<h1 class="header-menu-section">BURGER TIME</h1>
                    <h1 class="text-center header-menu-promo">¡PROMO DEL DÍA!</h1><sub class="menu-category-description">Exquisitas hamburguesas con receta casera, hechas con carne 100% de res. Puedes elegir el tamaño estándar de 130g de carne o la versión premium de 200g. Vienen acompañadas de papas fritas, sazónalas por $5 o cámbialas por papas gajo por $15.</sub>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><sub>130 g</sub></td>
                                    <td><sub>200 g</sub></td>
                                </tr>
								<tr>
								    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;pizza-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
								    <td><span class="menu-item">Pizza Burger</span> <br /><sub>Carne, queso manchego, salsa marinara y pepperoni</sub></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
								</tr>
				                <tr>
				                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;oklahoma-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
				                    <td><span class="menu-item">Oklahoma Burger</span> <br /><sub>Carne, queso americano, cebolla caramelizada y pepinillos</sub></td>
                                    <td><span class="precio-promo-ant">$99</span><br>$69</td>
                                    <td><span class="precio-promo-ant">$119</span><br>$89</td>
				                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;chocobo-buffalo-sandwich.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Chicken Buffalo Sandwich</span>&nbsp;<br><sub>Filete de mulso de pollo empanizado bañado en salsa a elegir (buffalo, bbq, ajo parmesano o pimienta limón), aderezo ranch, queso manchego, lechuga, tomate y cebolla.</sub></td>
                                    <td><span><span class="precio-promo-ant">$119</span><br>$83</span><br></td>
                                    <td><br><br></td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"></td>
                                    <td><span class="menu-item">Sweet-Chipotle Burger</span>&nbsp;<br><sub>Carne, aderezo de chipotle con arándano, cebolla caramelizada, queso manchego y tocino.</sub></td>
                                    <td><span><span class="precio-promo-ant">$109</span><br>$76</span><br></td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;chistorra-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Chistorra Burger&nbsp;&nbsp;</span>&nbsp;<br><sub>Carne, chistorra, queso de hebra, cebolla caramelizada, aguacate, tomate y lechuga</sub></td>
                                    <td><span class="precio-promo-ant">$119</span><br>$83</td>
                                    <td><span class="precio-promo-ant">$139</span><br>$103</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;la-argentina.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">La Argentina&nbsp;&nbsp;</span>&nbsp;<br><sub>Carne bañada en chimichurri casero, chorizo argentino, cebolla, tomate y lechuga</sub></td>
                                    <td><span class="precio-promo-ant">$119</span><br>$83</td>
                                    <td><span class="precio-promo-ant">$139</span><br>$103</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><span class="menu-item">Cheese Burger</span>&nbsp;<br><sub>Carne y queso americano</sub></td>
                                    <td><span class="precio-promo-ant">$79</span><br>$55</td>
                                    <td><span class="precio-promo-ant">$99</span><br>$75</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"></td>
                                    <td><span class="menu-item">Pac-Man</span>&nbsp;&nbsp;<br><sub>Carne, queso americano, cebolla, tomate y lechuga</sub><br></td>
                                    <td><span class="precio-promo-ant">$89</span><br>$62</td>
                                    <td><span class="precio-promo-ant">$109</span><br>$82</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;arkeids-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Arkeids&nbsp;</span><img src="assets/img/estrella-animada.gif" style="width: 15px;"><br><sub>Carne, tocino, queso manchego, salsa BBQ y aros de cebolla</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;double-cheese-bacon.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Double Cheese &amp; Bacon</span>&nbsp;<br><sub>Carne, queso americano, queso manchego y tocino</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;nortena.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Norteña</span><br><sub>Carne, salchicha para asar, cebolla caramelizada,&nbsp;queso manchego, tomate y lechuga</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;mexicana-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Mexicana</span><br><sub>Carne, aguacate, queso de hebra, cebolla, tomate y lechuga</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;funky-kong-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Funky Kong Burger</span><br><sub>Carne, piña, jamón, queso americano y tocino</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;mushroom-kingdom-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Mushroom Kingdom</span><br><sub>Carne, champiñones, queso manchego,<br>cebolla caramelizada y tocino</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"></td>
                                    <td><span class="menu-item">Chili Burger</span><br><sub>Carne, chili, queso americano y cebolla.</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;barbecue-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Barbecue Burger</span><br><sub>Carne, queso americano, tocino, tomate, lechuga, cebolla y salsa BBQ&nbsp;</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"></td>
                                    <td><span class="menu-item">Teriyaki Burger</span><br><sub>Carne, salsa teriyaki, queso manchego y piña</sub><br></td>
                                    <td><span class="precio-promo-ant">$109</span><br>$76</td>
                                    <td><span class="precio-promo-ant">$129</span><br>$96</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;thanos-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Thanos' Burger&nbsp;</span><img src="assets/img/estrella-animada.gif" style="width: 15px;"><br><sub>Carne, dedos de queso, tocino, queso crema y salsa marinara</sub><br></td>
                                    <td><span class="precio-promo-ant">$129</span><br>$90</td>
                                    <td><span class="precio-promo-ant">$149</span><br>$110</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;double-double.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Double Double&nbsp;</span><br><sub>Doble Carne de 130g, doble queso americano, doble queso manchego, doble tocino</sub><br></td>
                                    <td><span class="precio-promo-ant">$139</span><br>$97</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;double-double-legendaria.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;"></a></td>
                                    <td><span class="menu-item">Double Double Legendaria&nbsp;</span><br><sub>Doble Carne de 200g, doble queso americano, doble queso manchego, doble tocino</sub><br></td>
                                    <td></td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td style="padding-right: 0;padding-left: 0;"></td>
                                    <td><span class="menu-item">Veggie Burger</span><sub>&nbsp;<img src="assets/img/plant.gif" style="width: 15px;">(90 g)</sub><br><sub>Champiñones gratinados con queso manchego y cebolla caramelizada</sub><br></td>
                                    <td><span class="precio-promo-ant">$79</span><br>$55</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="text-align: center;"><img class="img-fluid" src="assets/img/mexicana-burger.jpg" loading="eager"></td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>`;

        var texto_normal = `<div class="sticky-top sticky-offset">
        <h1 class="header-menu-section">BURGER TIME</h1>
    </div><sub class="menu-category-description">Exquisitas hamburguesas con receta casera, hechas con carne 100% de res. Puedes elegir el tamaño estándar de 130g de carne o la versión premium de 200g. Vienen acompañadas de papas fritas, sazónalas por $5 o cámbialas por papas gajo por $15.</sub>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td><sub>130 g</sub></td>
                    <td><sub>200 g</sub></td>
                </tr>
                <tr>
				    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;pizza-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
				    <td><span class="menu-item">Pizza Burger</span> <br /><sub>Carne, queso manchego, salsa marinara y pepperoni</sub></td>
				    <td><br /><span>$109</span></td>
				    <td><br />$129</td>
				</tr>                
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;oklahoma-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Oklahoma Burger</span> <br /><sub>Carne, queso americano, cebolla caramelizada y pepinillos</sub></td>
                    <td><br /><span>$99</span></td>
                    <td><br /><span>$119</span></td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;chocobo-buffalo-sandwich.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item"> Chicken Buffalo Sandwich</span> <br /><sub>Filete de mulso de pollo empanizado bañado en salsa a elegir (buffalo, bbq, ajo parmesano o pimienta limón), aderezo ranch, queso manchego, lechuga, tomate y cebolla.</sub></td>
                    <td><br /><span>$119</span></td>
                    <td><br /><br /></td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"></td>
                    <td><span class="menu-item"> Sweet-Chipotle Burger</span> <br /><sub>Carne, aderezo de chipotle con arándano, cebolla caramelizada, queso manchego y tocino</sub></td>
                    <td><span>$109</span><br /></td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;chistorra-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Chistorra Burger  </span> <br /><sub>Carne, chistorra, queso de hebra, cebolla caramelizada, aguacate, tomate y lechuga</sub></td>
                    <td><span>$119</span><br /></td>
                    <td>$139</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;la-argentina.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">La Argentina  </span> <br /><sub>Carne bañada en chimichurri casero, chorizo argentino, cebolla, tomate y lechuga</sub></td>
                    <td><span>$119</span><br /></td>
                    <td>$139</td>
                </tr>
                <tr>
                    <td></td>
                    <td><span class="menu-item">Cheese Burger</span> <br /><sub>Carne y queso americano</sub></td>
                    <td><span>$79</span><br /></td>
                    <td>$99</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"></td>
                    <td><span class="menu-item">Pac-Man</span>  <br /><sub>Carne, queso americano, cebolla, tomate y lechuga</sub><br /></td>
                    <td><span>$89</span><br /></td>
                    <td>$109</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;arkeids-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Arkeids </span><img src="assets/img/estrella-animada.gif" style="width: 15px;" /><br /><sub>Carne, tocino, queso manchego, salsa BBQ y aros de cebolla</sub><br /></td>
                    <td><span>$109</span></td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;double-cheese-bacon.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Double Cheese &amp; Bacon</span> <br /><sub>Carne, queso americano, queso manchego y tocino</sub><br /></td>
                    <td><span>$109</span></td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;nortena.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Norteña</span><br /><sub>Carne, salchicha para asar, cebolla caramelizada, queso manchego, tomate y lechuga</sub><br /></td>
                    <td><span>$109</span></td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;mexicana-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Mexicana</span><br /><sub>Carne, aguacate, queso de hebra, cebolla, tomate y lechuga</sub><br /></td>
                    <td>$109</td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;funky-kong-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Funky Kong Burger</span><br /><sub>Carne, piña, jamón, queso americano y tocino</sub><br /></td>
                    <td>$109</td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;mushroom-kingdom-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Mushroom Kingdom</span><br /><sub>Carne, champiñones, queso manchego,<br />cebolla caramelizada y tocino</sub><br /></td>
                    <td>$109</td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"></td>
                    <td><span class="menu-item">Chili Burger</span><br /><sub>Carne, chili, queso americano y cebolla.</sub><br /></td>
                    <td>$109</td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;barbecue-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Barbecue Burger</span><br /><sub>Carne, queso americano, tocino, tomate, lechuga, cebolla y salsa BBQ </sub><br /></td>
                    <td>$109</td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"></td>
                    <td><span class="menu-item">Teriyaki Burger</span><br /><sub>Carne, salsa teriyaki, queso manchego y piña</sub><br /></td>
                    <td>$109</td>
                    <td>$129</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;thanos-burger.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Thanos&#39; Burger </span><img src="assets/img/estrella-animada.gif" style="width: 15px;" /><br /><sub>Carne, dedos de queso, tocino, queso crema y salsa marinara</sub><br /></td>
                    <td>$129</td>
                    <td>$149</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;double-double.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Double Double </span><br /><sub>Doble Carne de 130g, doble queso americano, doble queso manchego, doble tocino</sub><br /></td>
                    <td>$139</td>
                    <td></td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"><a href="#" data-toggle="modal" data-target="#ventana-foto-modal" onclick="updateImage(&#39;double-double-legendaria.jpg&#39;)"><img src="assets/img/bitcam-1-01.png" style="height: 21px;" /></a></td>
                    <td><span class="menu-item">Double Double Legendaria </span><br /><sub>Doble Carne de 200g, doble queso americano, doble queso manchego, doble tocino</sub><br /></td>
                    <td></td>
                    <td>$179</td>
                </tr>
                <tr>
                    <td style="padding-right: 0;padding-left: 0;"></td>
                    <td><span class="menu-item">Veggie Burger</span><sub> <img src="assets/img/plant.gif" style="width: 15px;" />(90 g)</sub><br /><sub>Champiñones gratinados con queso manchego y cebolla caramelizada</sub><br /></td>
                    <td>$79</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div><img class="img-fluid" src="assets/img/mexicana-burger.jpg" loading="eager" />`;

/*var d = new Date();
var n = d.getDay();

if(n == 3)
    $('#seccion-hamburguesas').html(texto_promo);
else
    $('#seccion-hamburguesas').html(texto_normal);*/

var divId;

  $('.nav-link').click(function(){   
    $('.navbar-collapse').collapse('hide'); 
    divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 300
    }, 100);

  });