module.exports = class Order {
  #total;
  #items;
  #user;
  constructor(items, user) {
    items.forEach((product, quantity) => {
      if (quantity > product.inStock) {
        throw new Error(`We ran out of this item, sorry!`);
      }
    });
    this.#items = items;
    this.#user = user;
    this.#total = items.reduce((sum, {product, quantity}) => {product.price * quantity}, 0);
  }

  get data(){
    return {
        items: this.#items,
        user: this.#user,
        total: this.#total
    }
  }
};
