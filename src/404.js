import { useEffect } from "react";
import {Route, Link, Routes} from "react-router-dom";
import Home from './pages/Home';
import { useNavigate } from "react-router-dom";

import'./App.css';

const NotFound = () => {
	  const navigate = useNavigate();


	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		},3000)
	}, [])

	return ( 
		<div className="hero-section">
			<h1>Oops!</h1>
			<h2>Not the page you were looking for...</h2>
			<p>Go back to the <Link href="/">homepage</Link></p>
			<Routes>
            <Route path="/" element={ <Home/> }/>
        </Routes>
		</div>
	 );
}
 
export default NotFound;