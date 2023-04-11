function getPrice(originalPrice, typePromotion = "default") {
  //? PreOrder => discount 20%
  if (typePromotion === "preOrder") {
    return originalPrice * 0.8;
  }

  //? Promotion: original < 200 ? discount 10% : discount 30k
  if (typePromotion === "promotion") {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
  }

  //? default: normal day
  if (typePromotion === "default") {
    return originalPrice;
  }
}

// ! Thêm 1 chiến lượt khuyến mãi cho ngày trong tháng và black friday ???
// * ==> Vào hàm getPrice if thêm 2 trường hợp nữa là OKE
// * ==> Thay đổi logic của 1 chiến lượt ở hàm getPrice có thể sẽ làm ảnh hưởng đến logic của các chiến lươt khác => không nên
// * ==> VI PHẠM NGUYÊN TẮC SOLID

console.log("-----> PRICE:::", getPrice(200, "preOrder"));
