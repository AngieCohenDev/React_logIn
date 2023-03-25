import {BrowserRouter, Route, Routes} from 'react-router-dom';
// Layout
import AuthLayout from './layouts/auth/AuthLayout';
//pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';
import ChangePassword from './pages/auth/ChangePassword';
import Error404 from './pages/auth/Error404';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path='register' element={<Register />}/>
        <Route path='olvide-password' element={<ForgetPassword />}/>
        <Route path='restablecer-password/:token' element={<ChangePassword />}/>
      </Route>
      <Route path='*' element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
