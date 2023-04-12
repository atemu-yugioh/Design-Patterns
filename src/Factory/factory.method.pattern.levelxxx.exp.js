class Product {
  constructor({
    product_name,
    product_thumb,
    product_description,
    product_price,
    product_quantity,
    product_type,
    product_shop,
    product_attributes,
  }) {
    this.product_name = product_name;
    this.product_thumb = product_thumb;
    this.product_description = product_description;
    this.product_price = product_price;
    this.product_quantity = product_quantity;
    this.product_type = product_type;
    this.product_shop = product_shop;
    this.product_attributes = product_attributes;
  }
  createProduct() {
    console.log(`Product Name::`, this.product_name);
  }
}

class Clothing extends Product {
  createProduct() {
    console.log(`Clothing Product::`, this.product_attributes);
    super.createProduct();
    return "Clothing Product::";
  }
}

class Electronic extends Product {
  createProduct() {
    console.log(`Electronic Product::`, this.product_attributes);
    super.createProduct();
    return "Electronic Product::";
  }
}

class Furniture extends Product {
  createProduct() {
    console.log(`Furniture Product::`, this.product_attributes);
    super.createProduct();
    return "Furniture Product::";
  }
}

class ProductFactory {
  static productRegistry = {}; // key - class
  static registerProductType(type, classRef) {
    ProductFactory.productRegistry[type] = classRef;
  }
  static createProduct(type, payload) {
    return new ProductFactory.productRegistry[type](payload).createProduct();
  }
}

//? Register Product Type
ProductFactory.registerProductType("Clothing", Clothing);
ProductFactory.registerProductType("Electronic", Electronic);
ProductFactory.registerProductType("Furniture", Furniture);

//? Create 1 Clothing
const payloadClothing = {
  product_name:
    "Áo khoác gió nam nữ 2 lớp lót lông cừu cao cấp siêu ấm, áo gió nam nữ phủ nano chống gió chống thấm nước",
  product_thumb: "product_thumb",
  product_description:
    "Áo khoác gió nam nữ 2 lớp lót lông cừu cao cấp siêu ấm, áo gió nam nữ phủ nano chống gió chống thấm nước",
  product_price: 129.0,
  product_quantity: 1000,
  product_type: "Clothing",
  product_attributes: {
    brand: "shopee ",
    size: "L",
    material: "cotton",
  },
};
console.log(
  `Product::`,
  ProductFactory.createProduct(payloadClothing.product_type, payloadClothing)
);
