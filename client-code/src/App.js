import './App.css';
import Home from './component/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Navbar from './component/Navbar';
const router = createBrowserRouter([
  {
    path:"/",
    element: <>
      <Navbar />
    </>

  },
  {
    path:"/",
    element: <>
      <Navbar />
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
  return (  
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
