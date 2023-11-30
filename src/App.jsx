import{BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'
import Home from './page/home'
import Login from './page/login'
import About from './page/about'
import Products from './page/products'
import ProductsList from './page/productsList'
import SingleProduct from './page/singleProduct'
import NavBar from './component/navbar'




function App() {
  return (
    
<BrowserRouter>
<NavBar />

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login'element={<Login/>} />
<Route path='/about'element={<About/>} />
<Route path='/products'element={<Products/>}> 
    <Route index element ={<ProductsList />} />
    <Route path=':id'element={<SingleProduct />} />
</Route>
</Routes>


</BrowserRouter>

   
  
  )
}

export default App
