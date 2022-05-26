import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./pages/Shared/Header";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PurchaseTool from "./pages/Home/sections/Tools/PurchaseTool";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddReview from "./pages/Dashboard/AddReview";
import AllReviews from "./pages/Reviews/AllReviews";
import Require from "./pages/RequireAuth/Require";
import Payment from "./pages/Dashboard/Payment";
import ManageProducts from "./pages/Dashboard/Admin/ManageProducts";
import ManageOrders from "./pages/Dashboard/Admin/ManageOrders";
import ManageUsers from "./pages/Dashboard/Admin/ManageUsers";
import AddProduct from "./pages/Dashboard/Admin/AddProduct";
import RequireAdmin from "./pages/RequireAuth/RequireAdmin";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/purchase/:id" element={<Require><PurchaseTool></PurchaseTool></Require>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/allreviews" element={<AllReviews></AllReviews>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/dashboard" element={<Require><Dashboard></Dashboard></Require>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="myOrders" element={<MyOrders></MyOrders>} />
          <Route path="addReview" element={<AddReview></AddReview>} />
          <Route path="payment/:id" element={<Require><Payment></Payment></Require>} />
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>} />
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>} />
          <Route path="manageUsers" element={<RequireAdmin><ManageUsers></ManageUsers></RequireAdmin>} />
          <Route path="addProducts" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} />
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
