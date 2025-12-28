export const createNewCarts = (products, cartArray, locale) => {
  let newCart = [];
  products.forEach(el => {
    let res = {};
    const id = el.productId;
    const isExist = cartArray.find(current => current._id === id);
    if (isExist) {
      res.id = el._id;
      res.productId = el.productId;
      res.category = el.category;
      res.title = isExist?.[locale]?.title;
      if (el.standart) {
        res.standartCount = el.standart;
        res.standartPrise = isExist?.[locale]?.standart;
        if (!res.price) res.price = {};
        res.price.standart = {
          en: isExist?.en?.standart,
          de: isExist?.de?.standart,
          ua: isExist?.ua?.standart
        };
      }
      if (el.xl) {
        res.xlCount = el.xl;
        res.xlPrise = isExist?.[locale]?.xl;
        if (!res.price) res.price = {};
        res.price.xl = {
          en: isExist?.en?.xl,
          de: isExist?.de?.xl,
          ua: isExist?.ua?.xl
        };
      }
      res.imgURL = isExist?.imgURL;
      res.webpImgURL = isExist?.webpImgURL;
      newCart.push(res);
    }
  });
  return newCart;
};

export const totalPrice = cart => {
  let res = [];
  cart.forEach(el => {
    if (el.standartCount) {
      const c = Number(el.standartCount);
      const p = Number(el.standartPrise);
      res.push(c * p);
    }
    if (el.xlCount) {
      const c = Number(el.xlCount);
      const p = Number(el.xlPrise);
      res.push(c * p);
    }
  });
  let total = 0;
  res.forEach(el => (total = total + el));
  return total;
};
