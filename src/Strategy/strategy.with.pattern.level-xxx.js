//! Strategy: tách mỗi chiến lượt khuyến mãi thành các function/class riêng
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

//? dayOfMonth: discount 30%
function dayOfMonth(originalPrice) {
  return originalPrice * 0.7;
}

//? Black Friday: discount 50%
function blackFriday(originalPrice) {
  return originalPrice * 0.5;
}

//! Context: Tham chiếu đến đối tượng Strategy (key - function/class)
const getPriceStrategies = {
  preOrder: preOrder,
  promotion: promotion,
  dayOfMonth: dayOfMonth,
  blackFriday: blackFriday,
  default: defaultPromotion,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originalPrice);
}

// ! Thêm 1 chiến lượt khuyến mãi cho ngày trong tháng và black friday ???
// * ==> Định nghĩa thêm 2 chiến lượt function/class và khai báo ở Context tham chiếu getPriceStrategies
// * ==> Thay đổi logic của 1 chiến lượt KHÔNG LÀM ẢNH HƯỞNG đến logic của các chiến lươt khác => TRÁCH NHIỆM ĐƠN LẺ (SINGLETON)
// * ==> Không cần dùng if else hay switch nữa
// * ==> không chỉnh sửa hàm getPrice => đảm bảo nguyên tắc SOLID

console.log("-----> PRICE:::", getPrice(200, "blackFriday"));
