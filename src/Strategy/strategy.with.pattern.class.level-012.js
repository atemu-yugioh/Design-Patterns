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

function getPrice(originalPrice, typePromotion) {
  return new getPriceStrategies[typePromotion](originalPrice).getPrice();
}

console.log("-----> PRICE:::", getPrice(200, "dayOfMonth"));
