import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";


const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const CreateStore = lazy(() => import('../pages/CreateStore'));
const ListProduct = lazy(() => import('../pages/ListProduct'));
const MarketPlace = lazy(() => import('../pages/MarketPlace'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Store = lazy(() => import('../pages/Store'));
const SellerProductDetails = lazy(() => import('../pages/SellerProductDetails'));


const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path="/create-store" element={<CreateStore />} />
      <Route path="/list-product" element={<ListProduct />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/store" element={<Store />} />
      <Route path="/sellerproductdetails" element={<SellerProductDetails />} />
    </Route>
    
  </Route>
))



const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
  );
};

export default AllRoutes;