import React, { useState} from "react"
import {Button,Form,ModalBody} from "react-bootstrap"
const AddList = (props) => {

	const [show, setShow] = useState(false);
	const handleSave = () => {
		setShow(false);
	    props.Add(NewMovie);
	};
	const handleClose = () => {
	    setShow(false);
	};
	const handleShow = () => setShow(true);
	const [NewMovie, setNewMovie] = useState({});
	const AddNewMovie = (e) => {
	    setNewMovie({ ...NewMovie, [e.target.name]: e.target.value });
	};
	return (
<div className="modal" tabindex="-1" role="dialog"show={show} onHide={handleClose} centered>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
		{console.log(NewMovie)}
		<Button variant="dark" onClick={handleShow}className="modal-title">
		Add a New Movie
		</Button>
		</div>
		
        <ModalBody>
			<Form>
				<label>Movie title</label>
				<input type="text"name="Title"placeholder="Movie title" onChange={AddNewMovie}/>
				<label>Movie year</label>
				<input type="text"name="Year" placeholder="Movie year"onChange={AddNewMovie} />
				<label>Movie Id</label>
				<input type="text"name="imdbID"placeholder="Movie Id"onChange={AddNewMovie} />
				<label>Movie rating</label>
				<input type="text"name="Rating"placeholder="Movie rating"onChange={AddNewMovie} />
				<label>Movie poster</label>
				<input type="text"name="Poster"placeholder="Movie poster"onChange={AddNewMovie}/>
            </Form>
        </ModalBody>
          
			<div className="modal-footer">
                  <button type="button" className="btn btn-primary"onClick={handleSave}>Save changes</button>
            </div>
    </div>
  </div>
</div>
);
};
export default  AddList