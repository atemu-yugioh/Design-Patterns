class Order {
  constructor(payload) {
    console.log("Service Order");
  }
}

class Auth {
  constructor(payload) {
    console.log("Service Auth:::", payload);
  }
}

class Tms {
  constructor(payload) {
    console.log("Service Tms:::", payload);
  }
}

class Aloline {
  constructor(payload) {
    console.log("Service Aloline:::", payload);
  }
}

const serviceByPort = {
  9999: Auth,
  1234: Order,
  1485: Aloline,
  1484: Tms,
};

class Proxy {
  constructor() {
    this.orderService = new Order();
    this.authService = new Auth();
    this.tmsService = new Tms();
    this.alolineService = new Aloline();
  }

  static redirect(port, payload) {
    return new serviceByPort[port](payload);
  }
}

//? request to server with format
const request = {
  project_id: 1485,
  payload: {
    name: "thieng",
    age: 25,
  },
};

//? proxy redirect to Service same with port
console.log(`Redirect To:::`, Proxy.redirect(request.project_id, request));
