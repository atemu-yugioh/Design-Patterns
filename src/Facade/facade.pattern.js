class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc(value) {
    return 5;
  }
}

class Fee {
  calc(value) {
    return value * 1.05;
  }
}

class ShoppeFacadePattern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fee = new Fee();
  }
  calc(price) {
    price = this.discount.calc(price);
    price = this.fee.calc(price);
    price += this.shipping.calc(price);

    return price;
  }
}

function buy(price) {
  const shoppe = new ShoppeFacadePattern();
  console.log(`Price:::`, shoppe.calc(price));
}

buy(1200000);
