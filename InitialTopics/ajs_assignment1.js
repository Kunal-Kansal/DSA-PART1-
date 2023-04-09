function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    return `${this.name} is Flying ${(this.isFlying = true)}`;
  };
  Airplane.prototype.land = function () {
    return `${this.name} is Flying ${(this.isFlying = false)}`;
  };
let IndiGo = new Airplane("IndiGo");
console.log(IndiGo.takeOff()); 
console.log(IndiGo.land());