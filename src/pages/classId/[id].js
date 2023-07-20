import { useParams } from "react-router"
import { useState, useEffect } from "react";
import {Container} from '@mui/material';

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
}
useEffect(() =>{
	fetchClasses()
}, [])

	return ( 
		<>
		<Container>
		<h1>{classes.title}</h1>
		
	 <body>
		<main>
	  <section class="main-content">
		  <div className="single">

      <h2>Coach</h2>
      <p>{classes.coach_name}</p>
	  </div>
		  <div className="single">

      <h2>Description</h2>
      <p>{classes.description}</p>
	  </div>

    </section>
	  </main>
	  	  </body>
			</Container>
		</>
	 );
}
 
export default DetailsClass;