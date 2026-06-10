const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms));

const getOrders = () => JSON.parse(localStorage.getItem("mock_orders") || "[]");

const saveOrders = (orders) =>
  localStorage.setItem("mock_orders", JSON.stringify(orders));

export const getUserOrders = async () => {
  await delay();
  return { data: getOrders() };
};

export const getOrderById = async (id) => {
  await delay();

  const order = getOrders().find((o) => o.id === id);

  return { data: order };
};

export const createOrder = async (orderData) => {
  await delay();
  const orders = getOrders();

  const newOrder = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "processing",
    estimatedDelivery: new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000,
    ).toISOString(), // +5 days
    ...orderData,
  };
  saveOrders([newOrder, ...orders]);
  return { data: newOrder };
};

export const cancelOrder = async (id) => {
  await delay();

  const updated = getOrders().map((order) =>
    order.id === id ? { ...order, status: "canceled" } : order,
  );

  saveOrders(updated);

  return {
    data: updated.find((o) => o.id === id),
  };
};
