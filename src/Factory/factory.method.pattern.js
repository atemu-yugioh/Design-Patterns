class Car {
  constructor({
    name = "Ford Ranger 2023",
    price = "10 VND",
    doors = 4,
    customerInfo = {},
  }) {
    this.name = name;
    this.price = price;
    this.doors = doors;
    this.customerInfo = customerInfo;
  }
}

class ServiceLogistics {
  transportClass = Car;
  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo);
  };
}

//? order for customer by Car
const carService = new ServiceLogistics();

console.log(
  `CarService::`,
  carService.getTransport({
    customerInfo: { name: "nguyen van a", cargoVolume: "10" },
  })
);

//? Mở rộng thêm dịch vụ xe tải
class Truck {
  constructor({
    name = "container 2023",
    price = "100 VND",
    doors = 8,
    customerInfo = {},
  }) {
    this.name = name;
    this.price = price;
    this.doors = doors;
    this.customerInfo = customerInfo;
  }
}

//? Định nghĩa service cho TruckService
class TruckService extends ServiceLogistics {
  transportClass = Truck;
}

//? order for customer by Trucks
const truckService = new TruckService();

console.log(
  `TruckService::`,
  truckService.getTransport({
    customerInfo: { name: "nguyen van a", cargoVolume: "100" },
  })
);

//! Mỗi khi dựa án cần mở rộng thì chỉ cần tạo đối tượng và dịch vụ kế thừa từ ServiceLogistics là OKE
// ! Không ảnh hưởng đên code đang có
//? vd: Ship => ShipClass => ShipService
//? đến đây thì viêc dùng các service chưa được linh động lắm
//? vẫn gọi trực tiếp đến service để thực hiện
//? ==> level xxx
