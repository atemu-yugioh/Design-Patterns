// TODO: Dựa vào khối lượng hàng hóa mà dịch vụ Logistics sẽ chọn ra phương tiện phù hợp để vận chuyển
const serviceLogistics = (cargoVolume) => {
  switch (cargoVolume) {
    case "10":
      return {
        name: "Truck 10",
        doors: 6,
        price: "100.000 vnd",
      };
    case "20":
      return {
        name: "Truck 20",
        doors: 8,
        price: "200.000 vnd",
      };
    default:
      break;
  }
};

console.log(serviceLogistics("10"));
