import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu.tsx";
import Cart from "./components/Cart.tsx";
import OrderView from "./components/OrderView.tsx";
import {Box} from "@mui/material";
import AboutUs from "./components/AboutUs.tsx";


function App() {

    return (
        <div>
            <Navbar/>
            <Box sx={{marginTop: '64px'}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/order/:id" element={<OrderView/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                </Routes>
            </Box>
            <Footer/>
        </div>
    );
}

export default App;
