//? PreOrder => discount 20%
function preOrder(originalPrice) {
  return originalPrice * 0.8;
}

//? Promotion: original < 200 ? discount 10% : discount 30k
function promotion(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

//? default: normal day
function defaultPromotion(originalPrice) {
  return originalPrice;
}

//! Thêm 2 chiến lượt khuyến mãi cho ngày trong tháng và black friday ???
//? dayOfMonth: discount 30%
function dayOfMonth(originalPrice) {
  return originalPrice * 0.7;
}

//? Black Friday: discount 50%
function blackFriday(originalPrice) {
  return originalPrice * 0.5;
}

function getPrice(originalPrice, typePromotion) {
  if (typePromotion === "preOrder") {
    return preOrder(originalPrice);
  }

  if (typePromotion === "promotion") {
    return promotion(originalPrice);
  }

  if (typePromotion === "default") {
    return defaultPromotion(originalPrice);
  }

  //! Thêm 2 chiến lượt khuyến mãi cho ngày trong tháng và black friday ???
  if (typePromotion === "dayOfMonth") {
    return dayOfMonth(originalPrice);
  }

  if (typePromotion === "blackFriday") {
    return blackFriday(originalPrice);
  }
}

// ! Thêm 1 chiến lượt khuyến mãi cho ngày trong tháng và black friday ???
// * ==> Vào hàm getPrice if thêm 2 trường hợp nữa là OKE.
// * ==> Thay đổi logic của 1 chiến lượt ở hàm getPrice KHÔNG LÀM ẢNH HƯỞNG đến logic của các chiến lươt khác => TRÁCH NHIỆM ĐƠN LẺ (SINGLETON)
// * ==> Vẫn phải đi vào hàm getPrice để thêm chiến lượt => chưa tối ưu lắm
// * ==> Nguyên tắc là cái gì đang chạy thì đừng sửa nó :))

console.log("-----> PRICE:::", getPrice(200, "blackFriday"));
