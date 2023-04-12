class Transport {
  constructor({ name, type, price, customerInfo }) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.customerInfo = customerInfo;
  }
}

class Car extends Transport {
  constructor({
    name = "Ford Ranger 2023",
    price = "10 VND",
    type = "Car",
    customerInfo = {},
  }) {
    super({ name, price, type, customerInfo });
  }
}
class Truck extends Transport {
  constructor({
    name = "container 2023",
    price = "100 VND",
    type = "Truck",
    customerInfo = {},
  }) {
    super({ name, price, type, customerInfo });
  }
}

class LogisticsFactory {
  static transportRegistry = {}; //? key - class

  static registerTransport(type, classRef) {
    LogisticsFactory.transportRegistry[type] = classRef;
  }

  static getTransport(type, payload) {
    return new LogisticsFactory.transportRegistry[type](payload);
  }
}

//? Register Service
LogisticsFactory.registerTransport("Car", Car);
LogisticsFactory.registerTransport("Truck", Truck);

//? Order 1 Truck
console.log(
  `Transport With Info::`,
  LogisticsFactory.getTransport("Truck", {
    customerInfo: { name: "Nguyen Van A", cargoVolume: "100" },
  })
);

//? Order 1 Car
console.log(
  `Transport With Info::`,
  LogisticsFactory.getTransport("Car", {
    customerInfo: { name: "Nguyen Van A", cargoVolume: "10" },
  })
);

//? Thêm 1 dịch vụ transport là Ship thì chỉ cần định nghĩa Class Ship rồi đăng ký với (nhà máy) factory là được -> (TÍNH MỞ RỘNG)
//? Hoàn toàn không đụng chạm gì đến code trước đó
//? với LogisticsFactory: người dùng chỉ cần cho biết type thì LogisticsFactory sẽ getTransport được dịch vụ phù hợp -> (TÍNH LINH HOẠT)

// TODO: Add Ship
class Ship extends Transport {
  constructor({
    name = "container ship 2023",
    price = "1000 VND",
    type = "Ship",
    customerInfo = {},
  }) {
    super({ name, price, type, customerInfo });
  }
}
// TODO: Register with Factory
LogisticsFactory.registerTransport("Ship", Ship);
//TODO: Order 1 Ship
console.log(
  `Transport With Info::`,
  LogisticsFactory.getTransport("Ship", {
    customerInfo: { name: "Nguyen Van A", cargoVolume: "500" },
  })
);
