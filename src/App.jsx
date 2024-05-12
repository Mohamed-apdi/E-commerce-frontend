import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import OurStore from "./pages/OurStore"
import Blog from "./pages/Blog"
import CompareProduct from "./pages/CompareProduct"
import Wishlist from "./pages/Wishlist"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import SignUp from "./pages/SignUp"
import ForgetPassword from "./pages/ForgetPassword"
import SingleBlog from "./pages/SingleBlog"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import RefundPolicy from "./pages/RefundPolicy"
import ShippingPolicy from "./pages/ShippingPolicy"
import TermsConditions from "./pages/TermsAndConditions"
import FAQ from "./pages/FAQ"
import SingleProduct from "./pages/SingleProduct"
import Checkout from "./pages/Checkout"
import Shipping from "./pages/Shipping"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<OurStore/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
        <Route path="/compare-product" element={<CompareProduct/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/refund-policy" element={<RefundPolicy/>}/>
        <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
        <Route path="/terms-conditions" element={<TermsConditions/>}/>
        <Route path="/faq" element={<FAQ/>}/>
      </Route>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
