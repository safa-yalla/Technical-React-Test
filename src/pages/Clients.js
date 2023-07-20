import {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import {
  Container,
  IconButton
} from "@mui/material";
import ClientCard from '../comps/ClientCard'
import "../FormModal.css"
import "../App.css"
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Clients = () => {

const [clients, setClients] = useState([])

const fetchClients= () =>{
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients")
	.then(response => {
		return response.json()
	})
	.then(data => {
		setClients(data)
		console.log("data", data)
	})

};
useEffect(() =>{
	fetchClients()
}, [])

const handleDelete = async (id) =>{
	await fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/" + id,{
	method: "DELETE"
})
const newClients = clients.filter(client => client.id!=id)
setClients(newClients)
}


  const [showModal, setShowModal] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('');

  const subTypes=["Fixed", "Unlimited", "Premium"]

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
	const clientData ={"name": name, 
	"image": image, "address":address, "subscriptionType":subscriptionType, "phone":phone}
	console.log(clientData);
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/" ,{
	method: 'POST',
	headers: {"Content-Type": "application/json"},
	body: JSON.stringify(clientData)
  }).then(()=>{
	  console.log("New client added")
	  toast.success('Form submitted successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
	  handleCloseModal();
  })

	}

	return (
		<>
		<Container>
			<div className="headline">			
	<h1>Clients</h1>
	<div className="button_icon">
	<IconButton  onClick={handleOpenModal}>
			  <FaIcons.FaPlus/>
			  </IconButton>
</div>
</div>

	{showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add a new client</h2>
            <form onSubmit={handleSubmit}>
              {/* Add your form elements here */}
			  <li>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" 
			  name="name" 
			  required 
			  onChange ={(e) => setName(e.target.value)}/>
</li>
<li>
              <label htmlFor="image">Image:</label>
				<input type="file" name="myImage"
				onChange ={(e) => setImage(e.target.value)}/>
</li>
			  <li>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" 
			  required 
			  onChange ={(e) => setAddress(e.target.value)}/>
</li>
			  <li>
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" 
			  required
			  onChange ={(e) => setPhone(e.target.value)} />
</li>
			  <li>
              <label htmlFor="subscriptionType">Subscription Type:</label>
             <select
                id="subscriptionType"
                name="subscriptionType"
                value={subscriptionType}
                onChange={(e) => setSubscriptionType(e.target.value)}
                required
              >
                <option value="">Select Subscription Type</option>
                {subTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
</li>
              <button type="submit">Submit</button>
            </form>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
	<Container>
	<Grid container spacing ={3}>
    {clients.map((client) => (
		<Grid item xs={12}md = {12}>
		<ClientCard data={client} handleDelete = {handleDelete}/>
		</Grid>
	))}
</Grid>
</Container>
	      

</Container>
		</>
	 );
}
 
export default Clients;