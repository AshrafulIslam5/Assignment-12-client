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


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/purchase/:id" element={<PurchaseTool></PurchaseTool>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/allreviews" element={<AllReviews></AllReviews>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>} />
          <Route path="myProfile" element={<MyProfile></MyProfile>} />
          <Route path="addReview" element={<AddReview></AddReview>} />
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
