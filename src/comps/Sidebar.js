import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

 export const SidebarData = [
	 {
		title: "Home ",
		path: "/",
		icons: <AiIcons.AiFillHome color="black"/>,
		cName: "nav-text"
},
{
		title: "Classes ",
		path: "/classes",
		icons: <MdIcons.MdClass color="black"/>,
		cName: "nav-text"
},
{
		title: "Client ",
		path: "/clients",
		icons: <BsIcons.BsPersonFill color="black"/>,
		cName: "nav-text"
},
]
