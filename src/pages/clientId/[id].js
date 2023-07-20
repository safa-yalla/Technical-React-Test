import { useParams } from "react-router"
import { useState, useEffect } from "react";
import {Container} from '@mui/material';

const DetailsClient = () => {
	const param = useParams()
	console.log("params",param);
const [clients, setClients] = useState([])

	const fetchClients= (id) =>{
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/"+param.id)
	.then(response => {
		return response.json()
	})
	.then(data => {
		setClients(data)
		console.log("dataClient", data)
	})
}
useEffect(() =>{
	fetchClients()
}, [])

	return ( 
		<>
		<Container>
		<h1>{clients.name}</h1>
		<img style={{ width: 200, height: 250, float: "right"}} src={"/man.jpg"}/>

	 <body>
		<main>
	  <section class="main-content">
		  <div className="single">
		  <h2>Phone Number</h2>
      <p>{clients.phone }</p>
	  </div>

		  <div className="single">

      <h2>Address</h2>
      <p>{clients.address }</p>
	  </div>

		  <div className="single">

      <h2>Subscription Type</h2>
      <p>{clients.subscriptionType}</p>
	  </div>
    </section>
	  </main>
	  	  </body>
			</Container>
		</>
	 );
}
 
export default DetailsClient;