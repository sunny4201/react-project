import './App.css';
import Home from './component/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Navbar from './component/Navbar';
// import { useState } from 'react';
const router = createBrowserRouter([
  {
    path:"/",
    element: <>
      <Navbar />
    </>

  },
  {
    path:"/home",
    element: <>
      {/* <Navbar /> */}
      <Home />
    </>

  },
  {
    path:"/signup",
    element: <>
      <Navbar />
      <Signup />
    </>

  },
  {
    path:"/signin",
    element: <>
      <Navbar />
      <Signin />
    </>

  }
]);



function App() {
  
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  
  // const privateRoute= ({ element }) =>{
  //   return isAuthenticated ? element : navigate("/home");
  
  // };

  return (  
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
