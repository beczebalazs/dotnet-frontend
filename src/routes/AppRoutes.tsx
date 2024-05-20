import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/sign-up";
import HomePage from "../pages/home";
import UserDetailsPage from "../pages/user-details";
import BuyMemberhipsPage from "../pages/buy-memberhip";
import MembershipsPage from "../pages/memberships";
import ClientsPage from "../pages/clients";
import EntryPage from "../pages/entry";
import EntriesPage from "../pages/entries";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/user-details" element={<UserDetailsPage />} />
      <Route path="/buy-membership" element={<BuyMemberhipsPage />} />
      <Route path="/memberships" element={<MembershipsPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/entry" element={<EntryPage />} />
      <Route path="/entries" element={<EntriesPage />} />
    </Routes>
  );
};

export default AppRoutes;
