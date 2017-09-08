const bottles = {
  totalBottles: 0,
  currBottles: 0,
  currCaps: 0,
  totalPurchased: 0,
  totalFromBottleExchange: 0,
  totalFromCapExchange: 0,
  exchangeBottles: function() {
    this.totalBottles++; // +1 to the total
    this.currBottles--; // exchange 2 and get 1 back (net -1)
    this.currCaps++; // also add a cap
    this.totalFromBottleExchange++; // +1 to from bottle exchange count
  },
  exchangeCaps: function() {
    this.totalBottles++; // +1 to the total
    this.currCaps -= 3; // exchange 4 and get 1 back (net -3)
    this.currBottles++; // also add a bottle
    this.totalFromCapExchange++; // +1 to from cap exchange count
  },
  poppinBottles: function(investment) {
    this.totalPurchased = Math.floor(investment / 2); // round down (can only have whole bottles)
    this.currBottles = this.totalPurchased;
    this.currCaps = this.totalPurchased;
    this.totalBottles = this.totalPurchased;

    // continue exchanging as long as there are
    // at least 2 bottles or at least 4 caps
    while (this.currBottles >= 2 || this.currCaps >= 4) {
      if (this.currBottles >= 2) {
        this.exchangeBottles();
      }
      if (this.currCaps >= 4) {
        this.exchangeCaps();
      }
    }
    console.log("TOTAL BOTTLES: " + this.totalBottles);
    console.log("REMAINING BOTTLES: " + this.currBottles);
    console.log("REMAINING CAPS: " + this.currCaps);
    console.log("TOTAL EARNED: ");
    console.log(" BOTTLES: " + this.totalFromBottleExchange);
    console.log(" CAPS: " + this.totalFromCapExchange);
  }
}


bottles.poppinBottles(Number(process.argv[2]));