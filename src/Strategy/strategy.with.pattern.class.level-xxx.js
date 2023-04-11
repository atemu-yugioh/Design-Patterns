//! Strategy: tách mỗi chiến lượt khuyến mãi thành các class/class riêng

//? default: normal day
class DefaultPromotion {
  constructor(originalPrice) {
    this.originalPrice = originalPrice;
  }

  getPrice() {
    return this.originalPrice;
  }
}

//? PreOrder => discount 20%
class PreOrder extends DefaultPromotion {
  getPrice() {
    return this.originalPrice * 0.8;
  }
}

//? Promotion: original < 200 ? discount 10% : discount 30k
class Promotion extends DefaultPromotion {
  getPrice() {
    return this.originalPrice <= 200
      ? this.originalPrice * 0.9
      : this.originalPrice - 30;
  }
}

//? dayOfMonth: discount 30%
class DayOfMonth extends DefaultPromotion {
  getPrice() {
    return this.originalPrice * 0.7;
  }
}

//? Black Friday: discount 50%
class BlackFriday extends DefaultPromotion {
  getPrice() {
    return this.originalPrice * 0.5;
  }
}

//! Context: Tham chiếu đến đối tượng Strategy (key - function/class)
const getPriceStrategies = {
  preOrder: PreOrder,
  promotion: Promotion,
  dayOfMonth: DayOfMonth,
  blackFriday: BlackFriday,
  default: DefaultPromotion,
};

//! Factory Pattern
class PromotionFactory {
  static promotionRegistry = {}; //! key-class
  // static registerPromotionType(priceStrategies) {
  //   for (const [key, value] of Object.entries(priceStrategies)) {
  //     PromotionFactory.promotionRegistry[key] = value;
  //   }
  //   // PromotionFactory.promotionRegistry[type] = classRef;
  // }

  static registerPromotionType(type, classRef) {
    PromotionFactory.promotionRegistry[type] = classRef;
  }

  static getPrice(originalPrice, typePromotion) {
    const promotionClass = PromotionFactory.promotionRegistry[typePromotion];
    return new promotionClass(originalPrice).getPrice();
  }
}

//? Register Factory
for (const [key, value] of Object.entries(getPriceStrategies)) {
  PromotionFactory.promotionRegistry[key] = value;
}
console.log("-----> PRICE:::", PromotionFactory.getPrice(200, "blackFriday"));
