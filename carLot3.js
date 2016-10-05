var CarLot = (function (stylesCarLot) {
	var targetDesc = "";
	var targetCar;

	stylesCarLot.carSelect = function(){
		var userInput = document.getElementById("userInput")
		targetDesc = this.childNodes[4];
		targetCar = this;
				
		this.classList.add("selected-car");
		userInput.value = "";
		userInput.focus();
		userInput.addEventListener('keypress', CarLot.editText);
		
	}

	stylesCarLot.editText = function(event){
		targetDesc.innerHTML = userInput.value;	
		if (event.keycode === 13 || event.which === 13) {
			event.preventDefault();
			userInput.value = "";
		userInput.removeEventListener('keypress', CarLot.editText);
		targetCar.classList.remove("selected-car");
		userInput.blur();
		}
		
	}

	return stylesCarLot;
})(CarLot || {});