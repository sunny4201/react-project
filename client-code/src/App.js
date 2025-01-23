import './App.css';
import Home from './component/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './component/Signup';
import Signin from './component/Signin';
// import Navbar from './component/Navbar';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />

  },
  {
    path:"/signup",
    element: <Signup />

  },
  {
    path:"/signin",
    element: <Signin />

  }
]);


function App() {
  return (  
    <>
    <RouterProvider router={router} />
    {/* <Navbar /> */}
    </>
  );
}

export default App;
