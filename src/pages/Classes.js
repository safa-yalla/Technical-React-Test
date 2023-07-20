import {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import {
  Container,
  IconButton
} from "@mui/material";
import ClassCard from '../comps/ClassCard'
import * as FaIcons from "react-icons/fa";
import "../FormModal.css"
import "../App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Classes = () => {

const [classes, setClasses] = useState([])

const fetchClasses= () =>{
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes")
	.then(response => {
		return response.json()
	})
	.then(data => {
		setClasses(data)
		console.log("dataClass", data)
	})

};
useEffect(() =>{
	fetchClasses()
}, [])


  const [showModal, setShowModal] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [coach_name, setCoachName] = useState('');
  const [timing, setTiming] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [coach_brief, setCoachBrief] = useState('');

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
	fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/" ,{
	method: 'POST',
	headers: {"Content-Type": "application/json"},
	body: JSON.stringify(classData)
  }).then(()=>{
	  console.log("New class added")
	   toast.success('Form submitted successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
	  handleCloseModal();
  })

}

  

const handleDelete = async (id) =>{
	await fetch("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/" + id,{
	method: "DELETE"
})
const newClasses = classes.filter(classes => classes.id!=id)
setClasses(newClasses)
};


return (
		<>
		<Container>
			<div className="headline">
	<h1>Classes</h1>
	<div className="button_icon">
	<IconButton  onClick={handleOpenModal}>
		  <FaIcons.FaPlus/>
    </IconButton>
			  
			  </div>
</div>
	{/*<IconButton onClick={handleOpenModal}>
		<FaIcons.FaPlus/>
	</IconButton>*/}
	{showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add a new class</h2>
            <form onSubmit={handleSubmit}>
              {/* Add your form elements here */}
			  <li>
              <label htmlFor="title">Class Title:</label>
              <input type="text" id="name" 
			  name="name" 
			  required 
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
			  onChange ={(e) => setCoachName(e.target.value)}/>
</li>
			  <li>
              <label htmlFor="timing">Timing:</label>
              <input type="text" id="timing" name="timing" 
			  required
			  onChange ={(e) => setTiming(e.target.value)} />
</li>
			  <li>
              <label htmlFor="price">Price:</label>
              <input type="text" id="price" name="price" 
			  required 
			  onChange ={(e) => setPrice(e.target.value)}/>
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
    {classes.map((client) => (
		<Grid item xs={12}md = {12}>
		<ClassCard data={client} handleDelete = {handleDelete}/>
		</Grid>
	))}
</Grid>
</Container>
</Container>
		</>
	 );
}

 
export default Classes;