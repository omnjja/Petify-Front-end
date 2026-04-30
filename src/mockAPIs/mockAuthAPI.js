import { mockUsers } from "@/data/mockUsers";
const saveUsers = (users) =>
  localStorage.setItem("mock_users", JSON.stringify(users));

const getUsers = () => {
  const stored = localStorage.getItem("mock_users");
  if (stored) return JSON.parse(stored);
  saveUsers(mockUsers);
  return mockUsers;
};
const delay = (ms = 600) => new Promise((res) => setTimeout(res, ms));

export const signup = async (formData) => {
  await delay();
  const users = getUsers();

  if (users.find((u) => u.email === formData.email)) {
    const error = new Error("Email already registered");
    error.response = {
      data: { message: "Email already registered", field: "email" },
    };
    throw error;
  }

  const newUser = {
    id: crypto.randomUUID(),
    name: formData.name,
    email: formData.email,
    password: formData.password,
    role: "PET_OWNER",
  };

  saveUsers([...users, newUser]);

  return {
    data: {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token: `mock-token-${newUser.id}`,
    },
  };
};

export const login = async (formData) => {
  await delay();
  const users = getUsers();
  const user = users.find(
    (u) => u.email === formData.email && u.password === formData.password,
  );

  if (!user) {
    const error = new Error("Invalid credentials");
    error.response = { data: { message: "Invalid email or password" } };
    throw error;
  }

  return {
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: `mock-token-${user.id}`,
    },
  };
};

export const logout = async () => {
  await delay(300);
  return { data: { message: "Logged out" } };
};

export const forgotPassword = async (email) => {
  await delay();
  const users = getUsers();
  const user = users.find((u) => u.email === email);

  if (!user) {
    const error = new Error("Email not found");
    error.response = {
      data: { message: "No account found with this email", field: "email" },
    };
    throw error;
  }

  return { data: { message: "Password reset email sent" } };
};

export const changePassword = async (userData) => {
  await delay();
  const users = getUsers();
  const index = users.findIndex((u) => u.email === userData.email);

  if (index === -1) {
    const error = new Error("User not found");
    error.response = { data: { message: "User not found" } };
    throw error;
  }

  users[index].password = userData.newPassword;
  saveUsers(users);
  return { data: { message: "Password changed successfully" } };
};
