import "./App.css";
import Footer from "./components/shared/ui/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UseRole from "./hooks/UseRole";
import { petOwner, serviceProvider, admin } from "./routesConfig";
import SPNavbar from "./components/sp-components/SPNavbar";
import AdminNavbar from "./components/admin-components/AdminNavbar";
import AdminFooter from "./components/admin-components/AdminFooter";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/shared/ui/ScrollToTop";

function App() {
  const role = UseRole();

  const getRoutes = () => {
    switch (role) {
      case "PET_OWNER":
        return petOwner;
      case "SERVICE_PROVIDER":
        return serviceProvider;
      case "ADMIN":
        return admin;
      default:
        return petOwner;
    }
  };

  // recursive way to handle nested routes for any depth
  const renderRoutes = (routes) =>
    routes.map(({ path, element, children, index }, i) => (
      <Route key={path || i} path={path} element={element} index={index}>
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <>
      <ScrollToTop />
      {role === "ADMIN" ? (
        <AdminNavbar />
      ) : role === "SERVICE_PROVIDER" ? (
        <SPNavbar />
      ) : (
        <Navbar />
      )}
      <Routes>
        {renderRoutes(getRoutes())}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-center" />
      {role === "ADMIN" || role === "SERVICE_PROVIDER" ? (
        <AdminFooter />
      ) : (
        <Footer />
      )}
    </>
  );
}

/*notes
update home links before login
  */
export default App;
