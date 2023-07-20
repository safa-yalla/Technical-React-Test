import { useParams } from "react-router"
import { useState, useEffect } from "react";
import {Container} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';

const DetailsClass = () => {
	const param = useParams()
	console.log("params",param);
const [classes, setClasses] = useState([])

	const fetchClasses= (id) =>{
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/"+param.id)
	.then(response => {
		return response.json()
	})
	.then(data => {
		setClasses(data)
		console.log("dataClass", data)
	})
	.catch((error) => {
    console.error("Error occurred during the request:", error);
    toast.error('An error occurred.', {
      position: toast.POSITION.TOP_CENTER
    });
	});
}
useEffect(() =>{
	fetchClasses()
}, [])

	return ( 
		<>
		<Container>
			<main>
		<h1>{classes.title}</h1>
		<div style={{borderBelow:"black"}}></div>
		</main>
				<img style={{ width: 280, height: 350, float: "right", padding: '20px'}} src={"/man.jpg"}/>

	 <body>
		
	  <section class="main-content1">
		  <div className="single">

      <h2>Course</h2>
      <p>{classes.description}</p>
	  </div>

	  <div className="single">

      <h2>Coach: {classes.coach_name}</h2>
      <p>{classes.coach_brief}</p>
	  </div>

<div className="single">

      <h2>Price</h2>
      <p>AED {classes.price}</p>
	  </div>

<div className="single">

      <h2>Timing</h2>
      <p>{classes.timing}</p>
	  </div>

    </section>
	  	  </body>
			</Container>
		</>
	 );
}
 
export default DetailsClass;