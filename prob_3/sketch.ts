type Size= "small" | "medium" | "large" | "extra-large" ;

class Pizza {
    private _size: Size;
    private _hasExtraCheese: boolean;
    private _numPepperoniToppings: number;
    private _numHamToppings: number;
    private _numPineappleToppings: number;
  
    constructor(
      size: Size,
      hasExtraCheese: boolean,
      numPepperoniToppings: number,
      numHamToppings: number,
      numPineappleToppings: number
    ) {
      this._size = size;
      this._hasExtraCheese = hasExtraCheese;
      this._numPepperoniToppings = numPepperoniToppings;
      this._numHamToppings = numHamToppings;
      this._numPineappleToppings = numPineappleToppings;
    }
  //setter and getter methods to access and modify these properties
    get size(): Size {
      return this._size;
    }
  
    set size(size: Size) {
      this._size = size;
    }
  
    get hasExtraCheese(): boolean {
      return this._hasExtraCheese;
    }
  
    set hasExtraCheese(hasExtraCheese: boolean) {
      this._hasExtraCheese = hasExtraCheese;
    }
  
    get numPepperoniToppings(): number {
      return this._numPepperoniToppings;
    }
  
    set numPepperoniToppings(numPepperoniToppings: number) {
      this._numPepperoniToppings = numPepperoniToppings;
    }
  
    get numHamToppings(): number {
      return this._numHamToppings;
    }
  
    set numHamToppings(numHamToppings: number) {
      this._numHamToppings = numHamToppings;
    }
  
    get numPineappleToppings(): number {
      return this._numPineappleToppings;
    }
  
    set numPineappleToppings(numPineappleToppings: number) {
      this._numPineappleToppings = numPineappleToppings;
    }

    /**
     * method that calculates the total cost of the pizza based on its size
     * the number of pepperoni, ham , and pineapple
     * if has extra cheese or not.
     * @returns total cost.
     */
    genCost(): number {
      let baseCost = 0;
      let toppingCost = 0;
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
  
      let totalCost = baseCost;
      totalCost += (this._numPepperoniToppings + this._numHamToppings + this._numPineappleToppings) * toppingCost;
  
      if (this._hasExtraCheese) {
        totalCost += toppingCost * 2;
      }
  
      return totalCost;
    }
  }
  
  // TESTING
  const pizza1 = new Pizza('medium', true, 1, 0, 2);
  console.log(pizza1.genCost());
  
  const pizza2 = new Pizza('large', false, 2, 1, 1);
  console.log(pizza2.genCost());
  
  const pizza3 = new Pizza('extra-large', true, 3, 2, 0);
  console.log(pizza3.genCost());