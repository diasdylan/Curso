class Market {
  constructor(fullname, email, password, name, description, price) {
    (this.fullName = fullname),
      (this.email = email),
      (this.password = password),
      (this.name = name),
      (this.description = description),
      (this.price = price),
      this.stock = 0;
  }
  login(userEmail, userPassword) {
    if (userEmail === this.email && userPassword === this.password) {
      return " - Login sucessful! - ";
    } else {
      return " - Login failed, please verify your email and password - ";
    }
  }
  addToStock(add) {
    return (this.stock += add);
  }
  calculateDiscount(price) {
    let discount = 0.1;
    let priceWithDiscount = price - price * discount;
    return priceWithDiscount;
  }
}

let macroDrilo = new Market(
  "Super Dilo",
  "md@super.com",
  "salame",
  "Dilo",
  "A very cool market",
  220,
  0
);
// console.log(macroDrilo)

macroDrilo.addToStock(5);
// console.log(macroDrilo)

macroDrilo.calculateDiscount(500);
console.log(macroDrilo);
console.log(macroDrilo.calculateDiscount(500));


function Salame(isSalame, ramon){
  this.salame = isSalame,
  this.pescado = ramon
}

let pescadito = new Salame(true, 'peixe')
console.log(pescadito)