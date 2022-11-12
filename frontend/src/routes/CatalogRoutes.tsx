import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import ProductDetails from 'pages/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const CatalogRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/products" />
        <Route path="/admin/categories" />
        <Route path="/admin/users" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default CatalogRoutes;
