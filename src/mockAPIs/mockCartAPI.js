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
    saveCart(cart);

    return { data: { ...existing } };
  }

  const newItem = {
    ...product,
    quantity: product.quantity || 1,
  };

  saveCart([...cart, newItem]);

  return { data: newItem };
};

export const updateCartItemQuantity = async (productId, quantity) => {
  await delay();
  const cart = getCart().map((i) =>
    i.id === productId ? { ...i, quantity } : i,
  );
  saveCart(cart);
  return { data: cart.find((i) => i.id === productId) };
};

export const removeCartItem = async (productId) => {
  await delay();
  saveCart(getCart().filter((i) => i.id !== productId));
  return { data: { message: "Item removed" } };
};

export const clearCart = async () => {
  await delay();
  saveCart([]);
  return { data: { message: "Cart cleared" } };
};
