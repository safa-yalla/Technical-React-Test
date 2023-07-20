import { Note } from '@mui/icons-material';
import {Card, CardActions,
	CardContent,CardActionArea,
CardHeader, IconButton, Typography, ListItem} from '@mui/material';
import { Link as RouterLink, Route, Routes} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import Details from '../pages/clientId/[id]';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientCard = ({data, handleDelete}) => {
	console.log(data.id);
	const client = data;
	
  const [showModal, setShowModal] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState(data.name);
  const [address, setAddress] = useState(data.address);
  const [phone, setPhone] = useState(data.phone);
  const [subscriptionType, setSubscriptionType] = useState(data.subscriptionType);

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
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/" + data.id,{
	method: 'PUT',
	headers: {"Content-Type": "application/json"},
	body: JSON.stringify(clientData)
  }).then(()=>{
	  console.log("Client edited")
	  toast.success('Form submitted successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
	  handleCloseModal();
  }).catch((error) => {
    console.error("Error occurred during the request:", error);
    toast.error('An error occurred.', {
      position: toast.POSITION.TOP_CENTER
    });
	});
  }
	return ( 
		<>
		<Card sx={{
        minWidth: 275,
        backgroundColor: '#f0f0f0',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: 2,
		elevation : 3,
		border: '1px solid #ccc',
		borderRadius: '8px', 
	}}>
				<RouterLink to={"/clients/"+ data.id} component={CardActionArea}>
			<CardHeader
			sx={{
        minWidth: 275,
        backgroundColor: '#bac1da',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
		border: '1px solid #ccc',
		borderRadius: '8px', 
	}}
				action={
					<img style={{ width: 100, height: 150, display: "flex"}} src={"/man.jpg"}/>
				}
				title = {client.name}
				subheader = {client.subscriptionType}
				
/>
			<CardContent>
				<Typography variant = "body2" color = "textSecondary">
					<ListItem sx={{display: 'list-item'}}>
					Phone Number: {client.phone}
					</ListItem>

					<ListItem sx={{display: 'list-item'}}>
					Address: {client.address}
					</ListItem>

					<ListItem sx={{display: 'list-item'}}>
						Subscription Type: {client.subscriptionType}
					</ListItem>

				</Typography>
				</CardContent>
				<Routes>
                <Route path={"/clients/"+ data.id}                 
				element = {<Details item={data}/>}>
                </Route>
              </Routes>
			</RouterLink>
				<IconButton onClick={() => handleDelete(client.id)}>
						<FaIcons.FaTrash color="#202A44"/>
					</IconButton>
					<IconButton onClick={handleOpenModal}>
					  <FaIcons.FaPen color="#202A44"/>
    			</IconButton>
					<CardActions>

					{showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit client</h2>
            <form onSubmit={handleSubmit}>
			  <li>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" 
			  name="name" 
			  required 
			  value = {name}
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
			  value = {address}
			  onChange ={(e) => setAddress(e.target.value)}/>
</li>
			  <li>
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" 
			  required
			  value = {phone}
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
            </CardActions>

		</Card>
		</>
	 );
}
 
export default ClientCard;