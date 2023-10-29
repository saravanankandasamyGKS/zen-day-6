class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      const fare = this.baseFare +
        (distanceInKilometers * this.costPerKilometer) +
        (timeInMinutes * this.costPerMinute);
      return fare;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator(10, 3, 0.4);
  const distance = 10; // 10 kilometers
  const time = 20; // 20 minutes
  const price = calculator.calculatePrice(distance, time);
  console.log(`Uber Price: $${price}`);