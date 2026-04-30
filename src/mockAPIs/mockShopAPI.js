import { mockProducts } from "@/data/mockProducts";

const delay = (ms = 600) => new Promise((res) => setTimeout(res, ms));

const getProducts = () => {
  const stored = localStorage.getItem("mock_products");
  if (stored) return JSON.parse(stored);
  localStorage.setItem("mock_products", JSON.stringify(mockProducts));
  return mockProducts;
};

export const getAllProducts = async () => {
  await delay();
  return { data: { content: getProducts() } }; // matches data.content in context
};

export const getProduct = async (productId) => {
  await delay();
  const product = getProducts().find((p) => p.id === productId);
  if (!product) {
    const error = new Error("Product not found");
    error.response = { data: { message: "Product not found" } };
    throw error;
  }
  return { data: product };
};

export const addProduct = async (product) => {
  await delay();
  const products = getProducts();
  const newProduct = { ...product, id: crypto.randomUUID() };
  localStorage.setItem(
    "mock_products",
    JSON.stringify([...products, newProduct]),
  );
  return { data: newProduct };
};

export const updateProduct = async (productId, product) => {
  await delay();
  const products = getProducts();
  const updated = products.map((p) =>
    p.id === productId ? { ...p, ...product } : p,
  );
  localStorage.setItem("mock_products", JSON.stringify(updated));
  return { data: updated.find((p) => p.id === productId) };
};

export const deleteProduct = async (productId) => {
  await delay();
  const products = getProducts().filter((p) => p.id !== productId);
  localStorage.setItem("mock_products", JSON.stringify(products));
  return { data: { message: "Product deleted" } };
};
