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

const getCurrentUserIndex = () => {
  const token = localStorage.getItem("user_token");

  if (!token) {
    const error = new Error("Unauthorized");
    error.response = {
      data: { message: "Unauthorized" },
    };
    throw error;
  }

  const userId = token.replace("mock-token-", "");

  const users = getUsers();

  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    const error = new Error("User not found");
    error.response = {
      data: { message: "User not found" },
    };
    throw error;
  }

  return { users, index };
};

export const getUserPets = async () => {
  await delay();

  const { users, index } = getCurrentUserIndex();

  return {
    data: users[index].pets || [],
  };
};

export const getPet = async (petId) => {
  await delay();

  const { users, index } = getCurrentUserIndex();

  const pet = users[index].pets?.find(
    (pet) => String(pet.id) === String(petId),
  );

  if (!pet) {
    const error = new Error("Pet not found");
    error.response = {
      data: { message: "Pet not found" },
    };
    throw error;
  }

  return {
    data: pet,
  };
};


export const addNewPet = async (petData) => {
  await delay();

  const { users, index } = getCurrentUserIndex();

  const newPet = {
    id: crypto.randomUUID(),
    vaccinations: [],
    image: null,
    ...petData,
  };

  if (!users[index].pets) {
    users[index].pets = [];
  }

  users[index].pets.push(newPet);

  saveUsers(users);

  return {
    data: newPet,
  };
};


export const editPet = async (petId, petData) => {
  await delay();

  const { users, index } = getCurrentUserIndex();

  const petIndex = users[index].pets.findIndex(
    (pet) => String(pet.id) === String(petId),
  );

  if (petIndex === -1) {
    const error = new Error("Pet not found");
    error.response = {
      data: { message: "Pet not found" },
    };
    throw error;
  }

  users[index].pets[petIndex] = {
    ...users[index].pets[petIndex],
    ...petData,
  };

  saveUsers(users);

  return {
    data: users[index].pets[petIndex],
  };
};

export const deletePet = async (petId) => {
  await delay();

  const { users, index } = getCurrentUserIndex();

  users[index].pets = users[index].pets.filter(
    (pet) => String(pet.id) !== String(petId),
  );

  saveUsers(users);

  return {
    data: {
      message: "Pet deleted successfully",
    },
  };
};

export const addPetImage = async (petId, formData) => {
  await delay();

  const file = formData.get("file");

  const image = await new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

  const { users, index } = getCurrentUserIndex();

  const petIndex = users[index].pets.findIndex(
    (pet) => String(pet.id) === String(petId),
  );

  if (petIndex === -1) {
    const error = new Error("Pet not found");
    error.response = {
      data: { message: "Pet not found" },
    };
    throw error;
  }

  users[index].pets[petIndex].image = image;

  saveUsers(users);

  return {
    data: {
      image,
    },
  };
};
