const delay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

const getCart = () => JSON.parse(localStorage.getItem("mock_cart") || "[]");
const saveCart = (cart) =>
  localStorage.setItem("mock_cart", JSON.stringify(cart));

export const getUserCart = async () => {
  await delay();
  return { data: { products: getCart() } };
};

export const addCartItem = async (product) => {
  await delay();

  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += product.quantity || 1;
  } else {
    cart.push({
      ...product,
      quantity: product.quantity || 1,
    });
  }

  saveCart(cart);

  return { data: cart };
};

export const updateCartItemQuantity = async (productId, quantity) => {
  await delay();

  const cart = getCart().map((i) =>
    i.id === productId ? { ...i, quantity } : i,
  );

  saveCart(cart);

  return { data: cart };
};

export const removeCartItem = async (productId) => {
  await delay();

  const cart = getCart().filter((i) => i.id !== productId);

  saveCart(cart);

  return { data: cart };
};

export const clearCart = async () => {
  await delay();

  saveCart([]);

  return { data: [] };
};
