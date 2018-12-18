function Calculator() {
  this.result = 0;
  
  Calculator.prototype.add = function(num) {
    if (num || num === 0) {
      this.result += num;
    }
    return this;
  };
  
  Calculator.prototype.subtract = function(num) {
    if (num || num === 0) {
      this.result -= num;
    }
    return this;
  };
  
  Calculator.prototype.multiply = function(num) {
    if (num || num === 0) {
      this.result *= num;
    }
    return this;
  };
  
   Calculator.prototype.divide = function(num) {
    if (num || num === 0) {
      this.result /= num;
    }
    return this;
  };
  
   Calculator.prototype.getResult = function() {
    return this.result;
  };
  
   Calculator.prototype.reset = function() {
    this.result = 0;
    return this;
  };
  
   Calculator.prototype.setState = function(num) {
    if (num) {
      this.result = num;
    }
    return this;
  };
  
}


function SimpleCalculator() {
   Calculator.apply(this);
}

SimpleCalculator.prototype = Object.create(Calculator.prototype);
SimpleCalculator.prototype.constructor = SimpleCalculator;

SimpleCalculator.prototype.sqrt = function() {
    this.result = Math.sqrt(this.result);
    return this;
}

SimpleCalculator.prototype.percent = function(num) {
    this.result = (num/100)*this.result;
    return this;
}


var calculator = new SimpleCalculator();

calculator.add(10);
console.log(calculator.getResult());
calculator.subtract(8);
console.log(calculator.getResult());
calculator.multiply(8);
console.log(calculator.getResult());
calculator.sqrt();
console.log(calculator.getResult());
calculator.percent(10);
console.log(calculator.getResult());
calculator.reset();
console.log(calculator.getResult());

function EngineeringCalculator() {
  SimpleCalculator.apply(this)
}

EngineeringCalculator.prototype = Object.create(SimpleCalculator.prototype);
EngineeringCalculator.prototype.constructor = EngineeringCalculator;

EngineeringCalculator.prototype.sin = function() {
    this.result = Math.sin(this.result);
    return this;
}

EngineeringCalculator.prototype.cos = function() {
    this.result = Math.cos(this.result);
    return this;
}

EngineeringCalculator.prototype.pow = function(num) {
    this.result = Math.pow(this.result, num);
    return this;
}

EngineeringCalculator.prototype.round = function() {
    this.result = Math.round(this.result);
    return this;
}

console.log('EngineeringCalculator')
calculator = new EngineeringCalculator();

calculator.add(1);
calculator.sin();
console.log(calculator.getResult());
calculator.round();
console.log(calculator.getResult());
calculator.cos();
console.log(calculator.getResult());
calculator.round();
calculator.add(1);
calculator.pow(3);
console.log(calculator.getResult());
