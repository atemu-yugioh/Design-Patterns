class ServiceLogistics {
  constructor(doors = 6, price = "100.000 VND", name = "Truck 10T") {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }

  static getTransport = (cargoVolume) => {
    switch (cargoVolume) {
      case "10":
        return new ServiceLogistics();
      case "20":
        return new ServiceLogistics(16, "1.000.000 VND", "Truck 20T");
      default:
        break;
    }
  };
}

console.log(ServiceLogistics.getTransport("20"));

//! Dựa vào tham số đầu vào là cargoVolume mà sẽ lựa chọn dịch vụ phù hợp để ship hàng
//? Phương thức getTransport cho phép nhận vào cargoVolume và return ra dịch vụ phù hợp
//! Nhược điểm:
//? Khi có thêm dịch vụ mới (mở rộng code) (ví dụ: cargoVolume = '30') thì phải đi vào hàm getTransport để add thêm 1 trường hợp nữa
//? ==> Nếu sảy ra lỗi sẽ ảnh hưởng đến toàn bộ code trong hàm này ==> Vi phạm nguyên tắc đóng mở (Open - close) trong SOLID
