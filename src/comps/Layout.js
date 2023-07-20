import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return ( 
		<div classname="content">
			<Navbar/>
			{ children }
			<Footer/>
		</div>
	 );
}
 
export default Layout;