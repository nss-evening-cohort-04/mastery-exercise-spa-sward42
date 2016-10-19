var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (jsonfile, callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", CarLot.getInventory);
      inventoryLoader.open("GET", jsonfile);
      inventoryLoader.send();
    },

    getInventory: function(){
      inventory = JSON.parse(this.response);
      populatePage(inventory);
      return inventory;      
    }

  };

})(CarLot || {});

