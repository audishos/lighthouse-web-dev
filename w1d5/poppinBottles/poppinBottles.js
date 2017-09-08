const bottles = {
  totalBottles: 0,
  currBottles: 0,
  currCaps: 0,
  exchangeBottles: function() {
    this.totalBottles++; // +1 to the total
    this.currBottles--; // exchange 2 and get 1 back (net -1)
    this.currCaps++; // also add a cap
  },
  exchangeCaps: function() {
    this.totalBottles++; // +1 to the total
    this.currCaps -= 3; // exchange 4 and get 1 back (net -3)
    this.currBottles++; // also add a bottle
  },
  poppinBottles: function(investment) {
    this.currBottles = Math.floor(investment / 2);
    this.currCaps = this.currBottles;
    this.totalBottles = this.currBottles;

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
    return this.totalBottles;
  }
}

console.log("The total bottles received will be: " + bottles.poppinBottles(Number(process.argv[2])));