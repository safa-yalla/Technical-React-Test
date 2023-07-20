import Navbar from './comps/Navbar'
import Footer from './comps/Footer'
import {createRoot} from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route, Link,
  Outlet
} from "react-router-dom";
import "./App.css"
import Classes from './pages/Classes';
import Clients from './pages/Clients';
import Home from './pages/Home';
import DetailsClass from './pages/classId/[id]';
import DetailsClient from './pages/clientId/[id]';
import NotFound from './404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = () => (
		<>
<Navbar/>
<Outlet/>
<ToastContainer />
<Footer/>
		</>
);
 
const router = createBrowserRouter([
	{
element: <AppLayout/>,
children: [
  {
    path: "/",
    element:<Home/>,
  },
  {
	path: "classes/*",
	element: <Classes/>,
 
},
  {
    path: "clients", 
    element: <Clients/>,
	
  },
		{
			path: "/classes/:id",
			element:< DetailsClass/>,
		},
{
			path: "/clients/:id",
			element:< DetailsClient/>,
		},
{
			path:'*',
 			element:<NotFound/>
},


],
},
  ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);