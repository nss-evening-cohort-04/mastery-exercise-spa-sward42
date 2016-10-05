var CarLot = (function (eventsCarLot){
	

	eventsCarLot.activateEvents = function (){
		var carInventory = document.getElementsByClassName('cars');
		for (var i = 0; i < carInventory.length; i++) {
			carInventory[i].addEventListener('click', CarLot.carSelect);
		}
			
	}
	return eventsCarLot;
})(CarLot || {});