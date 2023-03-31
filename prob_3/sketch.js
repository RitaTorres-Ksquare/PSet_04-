var Pizza = /** @class */ (function () {
    function Pizza(size, hasExtraCheese, numPepperoniToppings, numHamToppings, numPineappleToppings) {
        this._size = size;
        this._hasExtraCheese = hasExtraCheese;
        this._numPepperoniToppings = numPepperoniToppings;
        this._numHamToppings = numHamToppings;
        this._numPineappleToppings = numPineappleToppings;
    }
    Object.defineProperty(Pizza.prototype, "size", {
        //setter and getter methods to access and modify these properties
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "hasExtraCheese", {
        get: function () {
            return this._hasExtraCheese;
        },
        set: function (hasExtraCheese) {
            this._hasExtraCheese = hasExtraCheese;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "numPepperoniToppings", {
        get: function () {
            return this._numPepperoniToppings;
        },
        set: function (numPepperoniToppings) {
            this._numPepperoniToppings = numPepperoniToppings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "numHamToppings", {
        get: function () {
            return this._numHamToppings;
        },
        set: function (numHamToppings) {
            this._numHamToppings = numHamToppings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "numPineappleToppings", {
        get: function () {
            return this._numPineappleToppings;
        },
        set: function (numPineappleToppings) {
            this._numPineappleToppings = numPineappleToppings;
        },
        enumerable: false,
        configurable: true
    });
    //method that calculates the total cost of the pizza based on its size, the number of pepperoni, ham , and pineapple
    //if has extra cheese or not.
    Pizza.prototype.genCost = function () {
        var baseCost = 0;
        var toppingCost = 0;
        switch (this._size) {
            case 'small':
                baseCost = 10;
                toppingCost = 2;
                break;
            case 'medium':
                baseCost = 12;
                toppingCost = 2;
                break;
            case 'large':
                baseCost = 14;
                toppingCost = 3;
                break;
            case 'extra-large':
                baseCost = 18;
                toppingCost = 4;
                break;
            default:
                break;
        }
        var totalCost = baseCost;
        totalCost += (this._numPepperoniToppings + this._numHamToppings + this._numPineappleToppings) * toppingCost;
        if (this._hasExtraCheese) {
            totalCost += toppingCost * 2;
        }
        return totalCost;
    };
    return Pizza;
}());
// TESTING
var pizza1 = new Pizza('medium', true, 1, 0, 2);
console.log(pizza1.genCost());
var pizza2 = new Pizza('large', false, 2, 1, 1);
console.log(pizza2.genCost());
var pizza3 = new Pizza('extra-large', true, 3, 2, 0);
console.log(pizza3.genCost());
