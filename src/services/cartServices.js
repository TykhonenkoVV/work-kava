export const createNewCarts = (products, cartArray) => {
  let newCarts = [];
  products.forEach(el => {
    let res = structuredClone(el);
    const id = el.productId;
    const isExist = cartArray.find(current => current._id === id);
    if (isExist) {
      if (el.standart) {
        res.en.standart = isExist.en.standart;
        res.de.standart = isExist.de.standart;
        res.ua.standart = isExist.ua.standart;
      }
      if (el.xl) {
        res.en.xl = isExist.en.xl;
        res.de.xl = isExist.de.xl;
        res.ua.xl = isExist.ua.xl;
      }
      if (el.count) {
        res.en.price = isExist.en.price;
        res.de.price = isExist.de.price;
        res.ua.price = isExist.ua.price;
      }
    }
    newCarts.push(res);
  });
  return newCarts;
};

export const createNewProduct = (cart, product) => {
  let copy = structuredClone(product);
  delete copy._id;
  delete copy.archived;
  delete copy.index;
  delete copy.water;
  delete copy.coffee;
  delete copy.milk;
  delete copy.weight;
  delete copy.de.ingredients;
  delete copy.en.ingredients;
  delete copy.ua.ingredients;
  delete copy.de.standart;
  delete copy.en.standart;
  delete copy.ua.standart;
  delete copy.de.xl;
  delete copy.en.xl;
  delete copy.ua.xl;
  return { ...cart, ...copy };
};

export const totalPrice = (cart, locale) => {
  let res = [];
  cart.forEach(el => {
    if (el.standart) {
      const count = Number(el.standart);
      const price = Number(el[locale].standart);
      res.push(count * price);
    }
    if (el.xl) {
      const count = Number(el.xl);
      const price = Number(el[locale].xl);
      res.push(count * price);
    }
    if (el.count) {
      const count = Number(el.count);
      const price = Number(el[locale].price);
      res.push(count * price);
    }
  });
  let total = 0;
  res.forEach(el => (total = total + el));
  return total;
};
