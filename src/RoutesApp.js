import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home/home'
import Login from './Pages/login/login'

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='*' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
        </BrowserRouter>
    )
}