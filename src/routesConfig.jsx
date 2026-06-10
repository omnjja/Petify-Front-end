
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ViewProduct from "./components/shop-components/ViewProduct";
import Cart from "./components/shop-components/Cart";
import Checkout from "./components/checkout-components/Checkout";
import Vets from "./pages/Vets";
import ViewVet from "./components/vets-components/ViewVet";
import PetServices from "./pages/PetServices";
import ViewService from "./components/pet-services-components/ViewService";
import NearbyPlaces from "./components/nearby-places-components/NearbyPlaces";
import BeginnerGuide from "./pages/BeginnerGuide";
import Profile from "./pages/Profile";
import UserInfo from "./components/profile-components/UserInfo";
import AllProfiles from "./components/profile-components/AllProfiles";
import Orders from "./components/profile-components/Orders";
import Appointments from "./components/profile-components/Appointments";
import SPDashboard from "./components/sp-components/SPDashboard";
import MainDashboard from "./components/sp-components/MainDashboard";
import ManageServices from "./components/sp-components/ManageServices";
import ManageAppointments from "./components/sp-components/ManageAppointments";
import ManageProducts from "./components/sp-components/ManageProducts";
import ServiceProviderProfile from "./components/sp-components/ServiceProviderProfile";
import AdminDashboard from "./components/admin-components/AdminDashboard";
import UsersTable from "./components/admin-components/UsersTable";
import ProductsTable from "./components/admin-components/ProductsTable";
import ServicesTable from "./components/admin-components/ServicesTable";
import { Navigate } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

export const petOwner = [
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/shop/view-product/:id", element: <ViewProduct /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/order-details/:id", element: <OrderDetailsPage /> },
  { path: "/vets", element: <Vets /> },
  { path: "/vets/view-vet/:id", element: <ViewVet /> },
  { path: "/services", element: <PetServices /> },
  { path: "/services/view-service/:id", element: <ViewService /> },
  { path: "/nearby-places", element: <NearbyPlaces /> },
  { path: "/beginner-guide", element: <BeginnerGuide /> },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      { index: true, element: <Navigate to="my-profile" replace /> },
      { path: "my-profile", element: <UserInfo /> },
      { path: "my-pets", element: <AllProfiles /> },
      { path: "orders", element: <Orders /> },
      { path: "appointments", element: <Appointments /> },
    ],
  },
];

export const serviceProvider = [
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <SPDashboard />,
    children: [
      { index: true, element: <MainDashboard /> },
      { path: "services", element: <ManageServices /> },
      { path: "appointments", element: <ManageAppointments /> },
      { path: "products", element: <ManageProducts /> },
      { path: "profile", element: <ServiceProviderProfile /> },
    ],
  },
];

export const admin = [
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <AdminDashboard />,
    children: [
      { index: true, element: <Navigate to="users" replace /> },
      { path: "users", element: <UsersTable /> },
      { path: "products", element: <ProductsTable /> },
      { path: "services", element: <ServicesTable /> },
    ],
  },
];
