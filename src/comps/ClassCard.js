import {Card, CardActions,
	CardContent, CardActionArea,
CardHeader, IconButton, Typography, ListItem} from '@mui/material';
import { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import { Link as RouterLink, Route, Routes} from 'react-router-dom';
import Details from '../pages/classId/[id]';
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClassCard = ({data, handleDelete}) => {
console.log("classcard", data.title)

  const [showModal, setShowModal] = useState('');
  const [title, setTitle] = useState(data.title);
  const [image, setImage] = useState('');
  const [coach_name, setCoachName] = useState(data.coach_name);
  const [timing, setTiming] = useState(data.timing);
  const [price, setPrice] = useState(data.price);
  const [description, setDescription] = useState(data.description);
  const [coach_brief, setCoachBrief] = useState(data.coach_brief);

  
  const handleOpenModal = () => {
    setShowModal(true);

  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
	const classData ={"title": title, 
	"image": image, "coach_name":coach_name, "timing":timing, "price":price, "description":description, "coach_brief":coach_brief}
	console.log(classData);
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/" + data.id,{
	method: 'PUT',
	headers: {"Content-Type": "application/json"},
	body: JSON.stringify(classData)
  }).then(()=>{
	  toast.success('Form submitted successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
	  console.log("Class edited")
	  handleCloseModal();
  })
  .catch((error) => {
    console.error("Error occurred during the request:", error);
    toast.error('An error occurred while editing the class.', {
      position: toast.POSITION.TOP_CENTER
    });
	});

}
	return ( 
		<>
		<Card 
		 sx={{
        minWidth: 275,
        backgroundColor: '#f0f0f0',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: 2,
		elevation : 3,
		border: '1px solid #ccc',
		borderRadius: '8px', 
	}}
		>

		<RouterLink to={"/classes/"+ data.id} component={CardActionArea}>
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
				title = {data.title}
				subheader = {"Coach: " + data.coach_name}
				
/>
			<CardContent>
				<Typography variant = "body2" color = "textSecondary">
					<ListItem sx={{display: 'list-item'}}>
					Timing: {data.timing}
					</ListItem>

					<ListItem sx={{display: 'list-item'}}>
					Price: AED {data.price}
					</ListItem>

				</Typography>
				</CardContent>
				 <Routes>
                <Route path={"/classes/"+ data.id}                 
				element = {<Details item={data}/>}>
                </Route>
              </Routes>
			</RouterLink>
				<IconButton onClick={() => handleDelete(data.id)}>
						<FaIcons.FaTrash color="202A44"/>
				</IconButton>
				<IconButton onClick={handleOpenModal}>
					  <FaIcons.FaPen  color="202A44"/>
    			</IconButton>
					<CardActions>
						{showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit class</h2>
            <form onSubmit={handleSubmit}>
			  <li>
              <label htmlFor="title">Class Title:</label>
              <input type="text" id="name" 
			  name="name" 
			  required 
			  value = {title}
			  onChange ={(e) => setTitle(e.target.value)}/>
</li>
<li>
              <label htmlFor="image">Image:</label>
				<input type="file" name="myImage"
				onChange ={(e) => setImage(e.target.value)}/>
</li>
			  <li>
              <label htmlFor="coach_name">Coach Name:</label>
              <input type="text" id="coach_name" name="coach_name" 
			  required 
			  value = {coach_name}
			  onChange ={(e) => setCoachName(e.target.value)}/>
</li>
			  <li>
              <label htmlFor="timing">Timing:</label>
              <input type="text" id="timing" name="timing" 
			  required
			  value = {timing}
			  onChange ={(e) => setTiming(e.target.value)} />
</li>
			  <li>
              <label htmlFor="price">Price:</label>
              <input type="text" id="price" name="price" 
			  required 
			  value = {price}
			  onChange ={(e) => setPrice(e.target.value)}/>
</li>
 <li>
              <label htmlFor="coach_brief">Coach Brief:</label>
              <input type="text" id="coach_brief" name="coach_brief" 
			  value = {coach_brief}
			  onChange ={(e) => setCoachBrief(e.target.value)}/>
</li>
 <li>
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" 
			  value = {description}
			  onChange ={(e) => setDescription(e.target.value)}/>
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
 
export default ClassCard;