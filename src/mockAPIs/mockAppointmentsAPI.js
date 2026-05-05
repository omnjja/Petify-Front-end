const delay = (ms = 600) => new Promise((res) => setTimeout(res, ms));

const getAppointments = () => {
  const stored = localStorage.getItem("mock_appointments");
  if (stored) return JSON.parse(stored);
  localStorage.setItem("mock_appointments", JSON.stringify([]));
  return [];
};

export const getMyAppointments = async () => {
  await delay();
  return { data: getAppointments() };
};

export const bookService = async (payload) => {
  await delay();
  const appointments = getAppointments();
  const newAppointment = {
    id: crypto.randomUUID(),
    ...payload,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };
  const updated = [...appointments, newAppointment];
  localStorage.setItem("mock_appointments", JSON.stringify(updated));
  return { data: newAppointment };
};

export const cancelAppointment = async (appointmentId) => {
  await delay();
  const appointments = getAppointments().filter((appt) => appt.id !== appointmentId);
  localStorage.setItem("mock_appointments", JSON.stringify(appointments));
  return { data: { message: "Appointment cancelled" } };
};