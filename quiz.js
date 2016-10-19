
CarLot.loadInventory("inventory.json");


 function populatePage (inventory) {

        var carsHTML = "";
        for (var i = 0; i < inventory.cars.length; i++){
          carsHTML += `<div id="car-${i}" class="col-md-4 cars">`;
            carsHTML += `<div>${inventory.cars[i].make}</div>`;
                carsHTML += `<div>${inventory.cars[i].model}</div>`;
      			carsHTML += `<div>${inventory.cars[i].year}</div>`
      			carsHTML += `<div>${inventory.cars[i].price}</div>`
      			carsHTML += `<div id="carDesc-${i}">${inventory.cars[i].description}</div>`
            carsHTML += `</div>`;
        }
        document.getElementById("carOutput").innerHTML = carsHTML;
		
		   CarLot.activateEvents();
	};	




