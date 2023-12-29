function findCound(item, cart) {
  let obj = cart.find((object) => parseInt(object.id) === parseInt(item.id));
  if (obj) return obj.count;
  else return 0;
}
// takes an item and a cart as parameters and returns the count associated with item in cart

export function updateProductWithItsCount(products, cart) {
  let newArr = [];
  newArr = products.map((item, index) => {
    return {
      id: item.id,
      image: item.image,
      count: findCound(item, cart),
      title: item.title,
    };
  });
  return newArr;
}
// updateProductWithItsCount takes products and cart as parameters and returns a new array where each item in products is updated with its corresponding count from the cart