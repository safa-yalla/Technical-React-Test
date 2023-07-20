import '../App.css';
import * as FaIcons from "react-icons/fa";


const Footer = () => {
	return ( 
			 <footer>
            <ul class="socials">
   <li><a href="#"><FaIcons.FaPlus/></a></li>
   <li><a href="#"><i class="fa fa-twitter"></i></a></li>
   <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
   <li><a href="#"><i class="fa fa-youtube"></i></a></li>
   <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
</ul>
            <p class="copyright">Company Name © 2018</p>
		</footer>
	 );
}
 
export default Footer;