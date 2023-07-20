import { useParams } from "react-router"
import { useState, useEffect } from "react";
import {Container} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css";

const DetailsClient = () => {
	const param = useParams()
	console.log("params",param);
const [clients, setClients] = useState([])

	const fetchClients= () =>{
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/"+param.id)
	.then(response => {
		return response.json()
	})
	.then(data => {
		setClients(data)
		console.log("dataClient", data)
	})
	.catch((error) => {
    console.error("Error occurred during the request:", error);
    toast.error('An error occurred.', {
      position: toast.POSITION.TOP_CENTER
    });
	});
}
useEffect(() =>{
	fetchClients()
}, [])

	return ( 
		<>
		<Container>
			<main>
		<h1>{clients.name}</h1>
		</main>
		<img style={{ width: 280, height: 350, float: "right", padding: '20px', marginRight:"60px"}} src={"/man.jpg"}/>

	 <body>
	  <section class="main-content1">
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

	  <div className="single">

      <h2>Subscription Plan</h2>
      <p>{clients.subscription_plan}</p>
	  </div>

    </section>
	  	  </body>
			</Container>
		</>
	 );
}
 
export default DetailsClient;