
import HomePage from '../../pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import AllProductsPage from '../../pages/AllProductsPage'
import AllSalesPage from '../../pages/AllSalesPage'
import CartPage from '../../pages/CartPage'
import CategoriesPage from '../../pages/CategoriesPage'
import ROUTES from '../../utils/routes'
import SingleCategory from '../Categories/SingleCategory'
import SingleProduct from '../Products/SingleProduct'
import NotFoundPage from '../../pages/NotFoundPage'


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path={ROUTES.ALLPRODUCTS} element={<AllProductsPage/>}></Route>
        <Route path={ROUTES.ALLSALES} element={<AllSalesPage/>}></Route>
        <Route path={ROUTES.CART} element={<CartPage/>}></Route>
        <Route path={ROUTES.CATEGORIES} element={<CategoriesPage/>}></Route>
        <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}></Route>
        <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes
