class Leader {
  receiverRequest(offer) {
    console.log(`Boss said OK!:::`, offer);
  }
}

//? proxy
class Secretary {
  constructor() {
    this.leader = new Leader();
  }

  receiverRequest(offer) {
    this.leader.receiverRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }

  applyFor(target) {
    target.receiverRequest(this.offer);
  }
}

//? Use
//? 1 thằng dev có 1 offer tăng lương
const dev = new Developer("Upto 5k USD");

//? gửi yêu cầu tăng lương đến cho con thư ký
dev.applyFor(new Secretary());

//? Thư ký sẽ gửi đến cho leader chứ thằng Dev không được quyền gửi trực tiếp cho leader

//! Proxy: Bao bọc 1 đối tượng để kiểm soát quyền truy cập vào nó

//? Thông thường Proxy thường đứng giữ Client và Server đóng vai trò như middleware
//? - Điều hướng
//? - Authentication
