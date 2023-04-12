class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class ShippingNow {
  calc(value) {
    return 25;
  }
}

class ShippingFast {
  calc(value) {
    return 15;
  }
}

class Fee {
  calc(value) {
    return value * 1.05;
  }
}

class TikiFee {
  constructor() {
    this.discount = new Discount();
    this.fee = new Fee();
  }
  calc(price) {
    price = this.discount.calc(price);
    price = this.fee.calc(price);

    return price;
  }
}

class TikiShippingNowFacade extends TikiFee {
  constructor() {
    super();
    this.shipping = new ShippingNow();
  }
  calc(price) {
    price = super.calc(price) + this.shipping.calc(price);
    return price;
  }
}

class TikiShippingFastFacade extends TikiFee {
  constructor() {
    super();
    this.shipping = new ShippingFast();
  }
  calc(price) {
    price = super.calc(price) + this.shipping.calc(price);
    return price;
  }
}

const getShippingType = {
  now: TikiShippingNowFacade,
  fast: TikiShippingFastFacade,
};

const getPrice = (price, type) => {
  return new getShippingType[type]().calc(price);
};

console.log(`Now::::`, getPrice(50, "now"));
console.log(`Fast::::`, getPrice(50, "fast"));
